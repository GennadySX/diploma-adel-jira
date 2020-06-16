import React from 'react';
import PropTypes from 'prop-types';

import { formatDateTimeConversational } from 'shared/utils/dateTime';

import { Dates } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsDates = ({ issue }) => (
  <Dates>
    <div>Создан  {formatDateTimeConversational(issue.createdAt)}</div>
    <div>Обновлен  {formatDateTimeConversational(issue.updatedAt)}</div>
  </Dates>
);

ProjectBoardIssueDetailsDates.propTypes = propTypes;

export default ProjectBoardIssueDetailsDates;
