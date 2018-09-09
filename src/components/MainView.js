import React, { Fragment } from 'react';

import ActionButtons from './ActionButtons';
import TaskList from './taskList/TaskList';

const MainView = () => (
  <Fragment>
    <ActionButtons />
    <TaskList />
  </Fragment>
);

export default MainView;
