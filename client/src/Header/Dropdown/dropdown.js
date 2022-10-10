import * as React from 'react';
import { Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { dropdown_theme } from './dropdown_theme.js';

function Dropdown( props ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu_items = []

  for (let i = 0; i < props.children.length; i++) {
      menu_items.push(<MenuItem onClick={handleClose}>{props.children[i]}</MenuItem>)
  }

  return (
    <div id='dropdown' style={props.style}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon id='dropdown-icon'/>
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          {menu_items}
      </Menu>
    </div>
  );
}

export default Dropdown;