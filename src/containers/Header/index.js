import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU } from '../../constants/commons';
import RicohNavBar from '../../components/RicohNavBar';
import { changeToSpanishAction, changeToEnglishAction } from '../../store/actions/languageActions';
import { metadata } from '../../constants/translateMockup';

const Header = () => {

    const dispatch = useDispatch();
    const language = useSelector( state => state.language );
    
    // function to set language into store
    const handlerChangeLanguage = language => {
        if( language === 'es') dispatch( changeToSpanishAction() );
        else if ( language === 'en' ) dispatch( changeToEnglishAction() );
    }

    const menu = [
        {
            id: 1,
            title: metadata.menu[language].create,
            url: '/'
        },
        {
            id: 2,
            title: metadata.menu[language].last,
            url: '/last-product-add'
        },
        {
            id: 3,
            title: metadata.menu[language].products,
            url: '/products'
        },
        {
            id: 4,
            title: metadata.menu[language].summary,
            url: '/sales-analysis'
        }
    ];

    return (
        <div>
            <RicohNavBar
                menu= { menu }
                handlerChangeLanguage = { handlerChangeLanguage }
            />
        </div>
    );
}

export default Header;
