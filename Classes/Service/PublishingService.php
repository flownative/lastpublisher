<?php
declare(strict_types=1);

namespace Flownative\Neos\LastPublisher\Service;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\ContentRepository\Exception\NodeException;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Log\ThrowableStorageInterface;
use Neos\Neos\Service\PublishingService as NeosPublishingService;
use Neos\Neos\Service\UserService;
use Psr\Log\LoggerInterface;

#[Flow\Scope('singleton')]
final class PublishingService
{
    #[Flow\Inject]
    protected NeosPublishingService $publishingService;

    #[Flow\Inject]
    protected ThrowableStorageInterface $throwableStorage;

    #[Flow\Inject]
    protected LoggerInterface $logger;

    #[Flow\Inject]
    protected UserService $userService;

    #[Flow\InjectConfiguration(path: 'PublishingHistoryEditor.maximumItems', package: 'Flownative.Neos.LastPublisher')]
    protected int $maximumItems;

    /**
     * Used as a slot upon node publishing, see \Flownative\Neos\LastPublisher\Package::boot()
     */
    public function persistLastPublisherForNode(NodeInterface $node, ?Workspace $targetWorkspace = null): void
    {
        if ($targetWorkspace === null) {
            $targetWorkspace = $node->getWorkspace()->getBaseWorkspace();
        }

        $currentUser = $this->userService->getBackendUser();
        $publisherName = $currentUser?->getName()->getFullName() ?: 'n/a';
        try {
            $this->appendLastPublisherForNode($node, $targetWorkspace, $publisherName);
        } catch (NodeException $e) {
            $this->logger->warning($this->throwableStorage->logThrowable($e));
        }
    }

    /**
     * Appends the last publisher information to the node's properties.
     *
     * @throws NodeException
     * @throws \Exception
     */
    public function appendLastPublisherForNode(NodeInterface $node, Workspace $targetWorkspace, string $publisherName = '', string $publisherId = ''): void
    {
        $nodeType = $node->getNodeType();
        if ($nodeType->isOfType('Flownative.Neos.LastPublisher:Mixin.LastPublisher')) {
            $publishingInfo = $node->getProperty('last_publishing_information') ?: [];
            $publishingInfo[] = [
                'targetWorkspace' => $targetWorkspace->getTitle(),
                'publisherName' => $publisherName,
                'publisherId' => $publisherId,
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
