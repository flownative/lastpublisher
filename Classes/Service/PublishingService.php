<?php
declare(strict_types=1);

namespace Flownative\Neos\LastPublisher\Service;

/*
 * This file is part of the Flownative.Neos.LastPublisher package.
 */

use Neos\ContentRepository\Exception\NodeException;
use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\Neos\Domain\Model\User;
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
     * @Flow\InjectConfiguration(package="Flownative.Neos.LastPublisher", path="PublishingHistoryEditor.maximumItems")
     * @var integer
     */
    protected $maximumItems;

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
        if ($targetWorkspace === null) {
            $targetWorkspace = $node->getWorkspace()->getBaseWorkspace();
        }

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
        $this->appendLastPublisherForNode($node, $targetWorkspace, $currentUser->getName()->getFullName());
    }

    /**
     * Appends the last publisher information to the node's properties.
     *
     * @param NodeInterface $node
     * @param Workspace|null $targetWorkspace
     * @param string $publisherName
     * @return void
     * @throws NodeException
     */
    public function appendLastPublisherForNode(NodeInterface $node, ?Workspace $targetWorkspace = null, string $publisherName = ''): void
    {
        $nodeType = $node->getNodeType();
        if ($nodeType->isOfType('Flownative.Neos.LastPublisher:Mixin.LastPublisher')) {
            $publishingInfo = $node->getProperty('last_publishing_information') ?: [];
            $publishingInfo[] = [
                'targetWorkspace' => $targetWorkspace->getTitle(),
                'publisher' => $publisherName,
                'publishingDate' => (new \DateTime())->format('c')
            ];

            if (count($publishingInfo) > $this->maximumItems) {
                $publishingInfo = array_slice($publishingInfo, -($this->maximumItems));
            }

            $this->logger->info(
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
