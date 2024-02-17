import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import CreateTodoDialog from './components/CreateTodoDialog'

const AddTodoBtn: React.FC = () => {
  const [dialogStatus, setDialogStatus] = useState(false)

  const openDialog: VoidFunction = () => {
    setDialogStatus(true)
  }

  const closeDialog: VoidFunction = () => {
    setDialogStatus(false)
  }

  return (
    <div>
      <button
        type="button"
        aria-label="add"
        className="size-12 bg-slate-200 rounded-full z-50 inline-flex justify-center items-center shadow-lg hover:bg-slate-300"
        onClick={openDialog}
      >
        <MdAdd className="size-6" />
      </button>
      <CreateTodoDialog isOpen={dialogStatus} closeDialog={closeDialog} />
    </div>
  )
}

export default AddTodoBtn
