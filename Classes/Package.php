<?php declare(strict_types=1);

namespace Flownative\Neos\LastPublisher;

/*
 * This file is part of the Flownative.Neos.LastPublisher package.
 */

use Neos\Flow\Package\Package as BasePackage;
use Neos\Flow\Core\Bootstrap;
use Neos\ContentRepository\Domain\Model\Workspace;
use Flownative\Neos\LastPublisher\Service\PublishingService as LastPublisherPublishingServiceService;

class Package extends BasePackage
{

    /**
     * @param Bootstrap $bootstrap
     * @return void
     */
    public function boot(Bootstrap $bootstrap)
    {
        $dispatcher = $bootstrap->getSignalSlotDispatcher();
        $dispatcher->connect(Workspace::class, 'beforeNodePublishing', LastPublisherPublishingServiceService::class, 'persistLastPublisherForNode', false);
    }
}
