import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import theme from '../../../../styles/theme'

const menuItemList = [
  { menuValue: 'ALL', stateValue: null },
  { menuValue: 'Incompleted', stateValue: false },
  { menuValue: 'Completed', stateValue: true },
]

const StyledSelect = styled(Select)(() => ({
  width: theme.spacing(20),
}))

type Props = {
  filterState: boolean
  callbackOnChengeFunction: (state: boolean) => void
}

const TodoFilter: React.FC<Props> = ({
  filterState,
  callbackOnChengeFunction,
}: Props) => (
  <div className="flex justify-end">
    <StyledSelect
      value={
        menuItemList.find((menuItem) => menuItem.stateValue === filterState)
          .menuValue
      }
      onChange={(event) => {
        callbackOnChengeFunction(
          menuItemList.find(
            (menuItem) => menuItem.menuValue === event.target.value,
          ).stateValue,
        )
      }}
      data-testid="select"
    >
      {menuItemList.map((menuItem) => (
        <MenuItem key={menuItem.menuValue} value={menuItem.menuValue}>
          {menuItem.menuValue}
        </MenuItem>
      ))}
    </StyledSelect>
    <div
      role="combobox"
      tabIndex={0}
      className="flex w-40 h-14 pl-3 leading-[56px] border-slate-300 border-[1px] rounded-md hover:cursor-pointer hover:border-slate-500"
    >
      <p className="flex-grow">
        {
          menuItemList.find((menuItem) => menuItem.stateValue === filterState)
            .menuValue
        }
      </p>
      <MdArrowDropDown className=" size-6 my-auto" />
    </div>
  </div>
)

export default TodoFilter
