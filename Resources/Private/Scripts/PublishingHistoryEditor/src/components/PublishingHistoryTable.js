import React from 'react';
import PropTypes from 'prop-types';
import {neos} from '@neos-project/neos-ui-decorators';
import {Icon} from '@neos-project/react-ui-components';
import style from './PublishingHistoryTable.module.css';

const PublishingHistoryTable = ({publishingInformations, i18nRegistry}) => {
    const formatDate = (isoString, withTime = false) => {
        const date = new Date(isoString);
        return withTime ? date.toLocaleString() : date.toLocaleDateString();
    };

    const labels = {
        publishingDate: i18nRegistry.translate(
            'PublishingHistoryEditor.publishingHistoryTable.publishingDate',
            'Publishing Date',
            'Main',
            'Flownative.Neos.LastPublisher'
        ),
        publisher: i18nRegistry.translate(
            'PublishingHistoryEditor.publishingHistoryTable.publisher',
            'Publisher',
            'Main',
            'Flownative.Neos.LastPublisher'
        ),
        targetWorkspace: i18nRegistry.translate(
            'PublishingHistoryEditor.publishingHistoryTable.targetWorkspace',
            'Target Workspace',
            'Main',
            'Flownative.Neos.LastPublisher'
        )
    };

    if (!publishingInformations || publishingInformations.length === 0) {
        return null;
    }

    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th title={labels.publishingDate}>
                    <Icon icon="clock" size="s"/>
                </th>
                <th title={labels.publisher} className={style.publisherColumn}>
                    <Icon icon="user" size="s"/>
                    <span>{labels.publisher}</span>
                </th>
                <th title={labels.targetWorkspace}>
                    <Icon icon="th-large" size="s"/>
                </th>
            </tr>
            </thead>
            <tbody>
            {publishingInformations.map((info, index) => (
                <tr key={index}>
                    <td title={formatDate(info.publishingDate, true)}>
                        {formatDate(info.publishingDate, false)}
                    </td>
                    <td>{info.publisher}</td>
                    <td>{info.targetWorkspace}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

PublishingHistoryTable.propTypes = {
    publishingInformations: PropTypes.arrayOf(
        PropTypes.shape({
            publisher: PropTypes.string.isRequired,
            targetWorkspace: PropTypes.string.isRequired,
            publishingDate: PropTypes.string.isRequired
        })
    ).isRequired,
    i18nRegistry: PropTypes.object.isRequired
};

export default neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))(PublishingHistoryTable);
