import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateTodoDialog from './components/CreateTodoDialog';

const AddTodoBtn: React.FC = () => {
  const [dialogStatus, setDialogStatus] = useState(false);

  const openDialog: VoidFunction = () => {
    setDialogStatus(true)
  };

  const closeDialog: VoidFunction = () => {
    setDialogStatus(false)
  };

  return (
    <div>
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        onClick={openDialog}
      >
        <AddIcon />
      </Fab>
      <CreateTodoDialog open={dialogStatus} closeDialog={closeDialog} />
    </div>
  );
}

export default AddTodoBtn;
