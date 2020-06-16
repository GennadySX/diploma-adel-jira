import React from 'react';

import { Button } from 'shared/components';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = () => (
  <Header>
    <BoardName>Доска</BoardName>
    <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
      <Button icon="github">Исходники проекта</Button>
    </a>
  </Header>
);

export default ProjectBoardHeader;
