import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { CreateTodoDialog } from './'

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
      <Button
        className="size-12 bg-slate-200 rounded-full z-50 inline-flex justify-center items-center shadow-lg hover:bg-slate-300"
        onClick={openDialog}
      >
        <MdAdd className="size-6 text-slate-700" />
      </Button>
      <CreateTodoDialog isOpen={dialogStatus} closeDialog={closeDialog} />
    </div>
  )
}

export default AddTodoBtn
