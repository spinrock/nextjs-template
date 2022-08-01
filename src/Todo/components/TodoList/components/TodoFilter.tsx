import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import theme from '../../../../styles/theme'

const menuItemList = [
  { menuValue: 'ALL', stateValue: null },
  { menuValue: 'Incompleted', stateValue: false },
  { menuValue: 'Completed', stateValue: true },
];

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

const StyledSelect = styled(Select)(() => ({
  width: theme.spacing(20),
}));


type Props = {
  filterState: boolean;
  callbackOnChengeFunction: (state: boolean) => void;
}

const TodoFilter: React.FC<Props> = ({
  filterState,
  callbackOnChengeFunction,
}: Props) => (
  <StyledBox m={0}>
    <StyledSelect
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
    </StyledSelect>
  </StyledBox>
);

export default TodoFilter;
