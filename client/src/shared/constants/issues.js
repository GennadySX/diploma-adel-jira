export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  SELECTED: 'selected',
  INPROGRESS: 'inprogress',
  DONE: 'done',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.BUG]: 'Bug',
  [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: 'Задачи',
  [IssueStatus.SELECTED]: 'Особые задачи',
  [IssueStatus.INPROGRESS]: 'В ходе выполнения',
  [IssueStatus.DONE]: 'Выполнено',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Очень срочно',
  [IssuePriority.HIGH]: 'Срочно',
  [IssuePriority.MEDIUM]: 'Средний',
  [IssuePriority.LOW]: 'Не срочно',
  [IssuePriority.LOWEST]: 'Отложено',
};
