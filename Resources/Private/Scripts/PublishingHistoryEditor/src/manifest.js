import manifest from '@neos-project/neos-ui-extensibility';

import PublishingHistoryEditor from './PublishingHistoryEditor';

manifest('Flownative.LastPublisher:PublishingHistoryEditor', {}, globalRegistry => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');

	editorsRegistry.set('Flownative.LastPublisher/PublishingHistoryEditor', {
		component: PublishingHistoryEditor
	});
});
