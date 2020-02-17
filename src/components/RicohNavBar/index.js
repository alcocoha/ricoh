import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import logo from '../../assets/images/ricoh-hd_logo.png'

const RicohNavBar = props => {
    const classes = useStyles();
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
        <>
            {/* <div className={classes.imgContainer}><img src={logo} /></div> */}
            <AppBar position="static" className={classes.root}>
                <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
                    { buildMenu() }
                </Tabs>
            </AppBar>
        </>
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
