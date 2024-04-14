import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

const styles = {
  select: {
    color: '#545454',
    width: '330px',
    height: '47px',
    borderRadius: '20px',
    border: '1px solid #545454',
    background: '#FFFFFF',
    top: '376px',
    left: '238px',
    '&.MuiInput-underline': {
        left: {}
    }
  },
  menuItem: {
    width: '330px',
  },
  root: {
    'MuiInput-underline:before': {
      left: 'none',
    },
  },
};

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Select
        value={selectedValue}
        onChange={handleChange}
        style={styles.select}
        className={styles.root}
      >
        <MenuItem value="" disabled style={styles.menuItem}>
          Select an option
        </MenuItem>
        <MenuItem value="option1" style={styles.menuItem} variant="standard">Option 1</MenuItem>
        <MenuItem value="option2" style={styles.menuItem} variant="standard">Option 2</MenuItem>
        <MenuItem value="option3" style={styles.menuItem} variant="standard">Option 3</MenuItem>
      </Select>
    </div>
  );
}

export default Dropdown;
