import manifest from '@neos-project/neos-ui-extensibility';

import PublishingHistoryEditor from './PublishingHistoryEditor';

manifest('Flownative.Neos.LastPublisher:PublishingHistoryEditor', {}, globalRegistry => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');

	editorsRegistry.set('Flownative.Neos.LastPublisher/PublishingHistoryEditor', {
		component: PublishingHistoryEditor
	});
});
