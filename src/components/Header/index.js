import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { MENU } from '../../constants/commons';

const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const buildMenu = () =>
        MENU.map( item => <Tab 
                key = { item.id }
                label = { item.title }
                component = { Link }
                to = { item.url }
            />
    )

    return (
        <>
            <AppBar position="static">
                <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
                    { buildMenu() }
                </Tabs>
            </AppBar>
        </>
    );
};

export default Header;