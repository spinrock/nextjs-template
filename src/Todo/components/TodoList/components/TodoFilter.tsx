import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import theme from '../../../../styles/theme'

const useStyles = makeStyles({
  selectComponent: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  select: {
    width: theme.spacing(20),
  },
})

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
  const classes = useStyles()
  return (
    <Box m={0} className={classes.selectComponent}>
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
        className={classes.select}
      >
        {menuItemList.map((menuItem) => (
          <MenuItem key={menuItem.menuValue} value={menuItem.menuValue}>
            {menuItem.menuValue}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default TodoFilter
