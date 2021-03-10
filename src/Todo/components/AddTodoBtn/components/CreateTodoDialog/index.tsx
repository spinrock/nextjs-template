import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import { addTodo } from '../../../../reducer'

const useStyles = makeStyles({
  dialogContent: {
    display: 'grid',
  },
})

type Props = {
  open: boolean
  closeDialog: VoidFunction
}

const CreateTodoDialog: React.FC<Props> = ({ open, closeDialog }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodoFunc: VoidFunction = () => {
    dispatch(addTodo({ title: title, description: description }))
    setTitle('')
    setDescription('')
    closeDialog()
  }

  return (
    <Dialog onClose={closeDialog} open={open}>
      <DialogTitle>Please Input Todo Property</DialogTitle>
      <DialogContent className={classes.dialogContent}>
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
      </DialogContent>
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
  )
}

export default CreateTodoDialog
