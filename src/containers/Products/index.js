import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RicohTable from '../../components/RicohTable';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from '@material-ui/core/Container';
import { addFirstProductAction } from '../../store/actions/productsActions';
import { getData } from '../../api';
import isEmpty from 'lodash/isEmpty';

const Products = () => {

    const dispatch = useDispatch();
	const products = useSelector( state => state.products );

	const getAllProducts = async () => {
		const data = await getData('5e4a06f92f0000640097cea4');
		console.log('data', data)
        dispatch( addFirstProductAction( data ) );
    }

    useEffect( () => {
		getAllProducts();
	}, []);

	return (
		<>
			{ products.data &&
				<RicohTable
					rows= { products.data }
				/>
			}
			<Container maxWidth="lg">
				<h1>Carrusel de ordenadores portatiles</h1>
				<Carousel
					showThumbs={ false }
				>
					<div>
						<p className="legend">Legend 1</p>
						<div style={{ position: 'absolute', width: 100, height:200, backgroundColor: '#ff0000'}}>foo</div>
						<div style={{ position: 'absolute'}}>bar</div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
					</div>
					<div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
						<p className="legend">Legend 3</p>
					</div>
				</Carousel>
			</ Container>
		</>
	);
};

export default Products;