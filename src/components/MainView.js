import React, { Fragment } from 'react';

import ActionButtons from './ActionButtons';
import TaskList from './taskList/TaskList';

const MainView = () => (
  <Fragment>
    <TaskList />
    <ActionButtons />
  </Fragment>
);

export default MainView;
