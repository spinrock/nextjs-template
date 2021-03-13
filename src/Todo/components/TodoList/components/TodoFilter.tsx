import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const menuItemList = [
  { menuValue: 'ALL', stateValue: null },
  { menuValue: 'Incompleted', stateValue: false },
  { menuValue: 'Completed', stateValue: true },
]

type Props = {
  filterState: boolean
  callbackOnChengeFunction: (state: boolean) => void
}

const TodoFilter: React.FC<Props> = ({
  filterState,
  callbackOnChengeFunction,
}: Props) => {
  return (
    <Select
      value={
        menuItemList.find((menuItem) => menuItem.stateValue === filterState)
          .menuValue
      }
      onChange={(event) => {
        callbackOnChengeFunction(
          menuItemList.find(
            (menuItem) => menuItem.menuValue === event.target.value
          ).stateValue
        )
      }}
    >
      {menuItemList.map((menuItem) => (
        <MenuItem key={menuItem.menuValue} value={menuItem.menuValue}>
          {menuItem.menuValue}
        </MenuItem>
      ))}
    </Select>
  )
}

export default TodoFilter
