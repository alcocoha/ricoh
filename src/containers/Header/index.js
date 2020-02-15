import React from 'react';
import { MENU } from '../../constants/commons';
import RicohNavBar from '../../components/RicohNavBar';

const Header = () => {
    return (
        <div>
            <RicohNavBar
                menu= { MENU }
            />
        </div>
    );
}

export default Header;
