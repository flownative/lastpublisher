import React, {Component} from 'react';
import {neos} from '@neos-project/neos-ui-decorators';
import {Icon} from '@neos-project/react-ui-components';
import I18n from '@neos-project/neos-ui-i18n';
import style from './style.module.css';
import PublishingHistoryTable from './components/PublishingHistoryTable';

class PublishingHistoryEditor extends Component {
    render() {
        const {value, configuration} = this.props;
        if (!Array.isArray(value) || value.length === 0) {
            return (
                <div className={style.emptyList}>
                    <Icon icon="exclamation-circle" size="s"/>
                    <span>
                        <I18n
                            id="PublishingHistoryEditor.noPublishingHistory"
                            sourceName="Main"
                            packageKey="Flownative.LastPublisher"
                            fallback="The Element has no publishing history entries."
                        />
                    </span>
                </div>
            );
        }

        const {maximumItems} = configuration || 5;
        const sortedItems = [...value].sort((a, b) => new Date(b.publishingDate) - new Date(a.publishingDate));
        const filteredItems = typeof maximumItems === 'number'
            ? sortedItems.slice(0, maximumItems)
            : sortedItems;

        return (
            <div>
                <PublishingHistoryTable publishingInformations={filteredItems}/>
            </div>
        );
    }
}

export default neos(globalRegistry => ({
    configuration: globalRegistry.get('frontendConfiguration').get('Flownative.LastPublisher:PublishingHistoryEditor')
}))(PublishingHistoryEditor);
