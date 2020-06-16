import React from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { Button, ConfirmModal } from 'shared/components';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsDelete = ({ issue, fetchProject, modalClose }) => {
  const handleIssueDelete = async () => {
    try {
      await api.delete(`/issues/${issue.id}`);
      await fetchProject();
      modalClose();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ConfirmModal
      title="Вы уверены, что хотите удалить эту задачу?"
      message="Как только вы удалите, это навсегда."
      confirmText="Удалить задачу"
      onConfirm={handleIssueDelete}
      renderLink={modal => (
        <Button icon="trash" iconSize={19} variant="empty" onClick={modal.open} />
      )}
    />
  );
};

ProjectBoardIssueDetailsDelete.propTypes = propTypes;

export default ProjectBoardIssueDetailsDelete;
