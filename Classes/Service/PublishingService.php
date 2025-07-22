<?php
declare(strict_types=1);

namespace Flownative\LastPublisher\Service;

/*
 * This file is part of the Flownative.LastPublisher package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\Neos\Service\PublishingService as NeosPublishingService;
use Neos\Neos\Service\UserService;
use Psr\Log\LoggerInterface;

/**
 * @Flow\Scope("singleton")
 */
final class PublishingService
{
    /**
     * @Flow\Inject
     * @var NeosPublishingService
     */
    protected NeosPublishingService $publishingService;

    /**
     * @Flow\Inject
     * @var LoggerInterface
     */
    protected LoggerInterface $logger;

    /**
     * @Flow\Inject
     * @var UserService
     */
    protected UserService $userService;

    /**
     * Publishes the given node to the specified target workspace. If no workspace is specified, the base workspace
     * is assumed.
     *
     * If the given node is a Document or has ContentCollection child nodes, these nodes are published as well.
     *
     * @param NodeInterface $node
     * @param Workspace|null $targetWorkspace If not set the base workspace is assumed to be the publishing target
     * @return void
     * @api
     */
    public function persistLastPublisherForNode(NodeInterface $node, ?Workspace $targetWorkspace = null)
    {
        $this->logger->debug(
            sprintf('Persisting last publisher information for node "%s" in workspace "%s"', $node->getNodeAggregateIdentifier(), $targetWorkspace?->getName() ?? 'default')
        );
        if ($targetWorkspace === null) {
            $targetWorkspace = $node->getWorkspace()->getBaseWorkspace();
        }

        $nodeType = $node->getNodeType();

        if ($nodeType->isOfType('Flownative.LastPublisher:Mixin.LastPublisher')) {
            if ($this->userService === null) {
                $this->logger->warning(
                    'UserService is not available, cannot persist last publishing information for node "{nodeIdentifier}" in workspace "{workspaceName}".',
                    [
                        'nodeIdentifier' => $node->getNodeAggregateIdentifier(),
                        'workspaceName' => $targetWorkspace->getName()
                    ]
                );
                return;
            }

            $currentUser = $this->userService->getBackendUser();
            if ($currentUser !== null) {
                $publisherName = $currentUser->getName()->getFullName();
                $publishingInfo = $node->getProperty('last_publishing_information') ?: [];
                $publishingInfo[] = [
                    'targetWorkspace' => $targetWorkspace->getTitle(),
                    'publisher' => $publisherName,
                    'publishingDate' => (new \DateTime())->format('c')
                ];

                if (count($publishingInfo) > 5) {
                    $publishingInfo = array_slice($publishingInfo, -5);
                }

                $this->logger->debug(
                    sprintf(
                        'Persisting last publishing information for node "%s" in workspace "%s" by user "%s"',
                        $node->getNodeAggregateIdentifier(),
                        $targetWorkspace->getName(),
                        $publisherName
                    )
                );

                $node->setProperty('last_publishing_information', $publishingInfo);
            }
        }
    }
}
