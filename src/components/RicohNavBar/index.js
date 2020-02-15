import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const RicohNavBar = props => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const buildMenu = () => {
        const { menu } = props;
        return menu.map( item => <Tab
                key = { item.id }
                label = { item.title }
                component = { Link }
                to = { item.url }
            />
        )
    }

    return (
        <AppBar position="static">
            <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
                { buildMenu() }
            </Tabs>
        </AppBar>
    );
};

RicohNavBar.propTypes = {
    menu: PropTypes.array
};

RicohNavBar.defaultProps = {
    menu: [
        { id: 1, title: 'foo', url: '/' },
        { id: 2, title: 'bar', url: '/' }
    ]
}

export default RicohNavBar;
