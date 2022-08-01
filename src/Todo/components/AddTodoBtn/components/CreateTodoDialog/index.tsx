import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { addTodo } from '../../../../reducer';

const StyledDialogContent = styled(DialogContent)(() => ({
  display: 'grid',
}));

type Props = {
  open: boolean
  closeDialog: VoidFunction
}

const CreateTodoDialog: React.FC<Props> = ({ open, closeDialog }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodoFunc: VoidFunction = () => {
    dispatch(addTodo({ title: title, description: description }))
    setTitle('')
    setDescription('')
    closeDialog()
  }

  return (
    <Dialog onClose={closeDialog} open={open}>
      <DialogTitle>Please Input Todo Property</DialogTitle>
      <StyledDialogContent>
        <TextField
          error={title == ''}
          label="Title"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setTitle(e.target.value)
          }}
          helperText="Please Input Title"
        />
        <TextField
          label="Description"
          multiline={true}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value)
          }}
        />
      </StyledDialogContent>
      <DialogActions>
        <Button
          onClick={addTodoFunc}
          disabled={title == ''}
          variant="contained"
          color="primary"
        >
          Create Todo
        </Button>
        <Button onClick={closeDialog} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateTodoDialog;
