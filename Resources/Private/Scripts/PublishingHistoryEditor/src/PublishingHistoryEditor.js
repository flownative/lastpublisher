import React, {Component} from 'react';
import style from './style.module.css';
import {Icon} from '@neos-project/react-ui-components';
import I18n from '@neos-project/neos-ui-i18n';
import PublishingHistoryTable from './components/PublishingHistoryTable';

export default class PublishingHistoryEditor extends Component {
    render() {
        const {value, options} = this.props;

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

        const {maximumItems} = options || {};
        const sortedItems = [...value].sort((a, b) => new Date(a.publishingDate) - new Date(b.publishingDate));
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
