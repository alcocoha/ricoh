import React from 'react';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from '@material-ui/core/Container';
import { metadata } from '../../constants/translateMockup';
import './styles.scss';

const RicohCarousel = ({ products }) => {

    const language = useSelector( state => state.language );

    const getImage = item => {
        try {
            return require(`../../${ item.urlImagePath }/${ item.model }.jpg`);
        } catch (error) {
            console.log('no se encontro la ruta')
        }
    }

    const productsItems = () => {
        return products && products.map( ( item, index ) => {
            const image = getImage( item );
            return <div className="item-container" key={ index }>
                <p className="legend">{ `${ item.brand } ${ item.model }` }</p>
                <div className="info">
                    <div className="text">{ item.price }€</div>
                    <div className="text">{ item.ram }GB</div>
                    <div className="text">{ item.type }</div>
                </div>
                <div className="img-container">
                    <img src={ image } />
                </div>
            </div>
        });
    }

    return (
        <Container maxWidth="lg">
            <h1>{ metadata.products_section[language].carouselTitle }</h1>
            <Carousel
                showThumbs={ false }
            >
                { productsItems() }
            </Carousel>
        </ Container>
    );
};

export default RicohCarousel;