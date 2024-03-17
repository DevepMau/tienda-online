import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box>
        <div className='Banner'>
            Banner
        </div>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab component={Link} to='/' label="Home" />
            <Tab component={Link} to='/shop' label="Shop" />
            <Tab component={Link} to='/about' label="About" />
            <Tab component={Link} to='/login'label="Login" />
        </Tabs>
    </Box>
  )
}
