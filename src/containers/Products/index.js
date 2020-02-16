import React from 'react';
import RicohTable from '../../components/RicohTable';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function createData( brand, model, price, cpu, ram, type, shape ) {
	return { brand, model, price, cpu, ram, type, shape };
}

const rows = [
	createData( 'amsi', 'aegis', 12344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'bmsi', 'aegis', 22344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'cmsi', 'aegis', 32344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'dmsi', 'aegis', 42344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'emsi', 'aegis', 52344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'fmsi', 'aegis', 62344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'gmsi', 'aegis', 72344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'hmsi', 'aegis', 82344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'imsi', 'aegis', 92344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'jmsi', 'aegis', 102344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'kmsi', 'aegis', 112344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'lmsi', 'aegis', 122344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'mmsi', 'aegis', 132344, 'i7', 64, 'gaming', 'desktop'),
	createData( 'nmsi', 'aegis', 142344, 'i7', 64, 'gaming', 'desktop')
];

const Products = () => {
	return (
		<div>
			<RicohTable
				rows= { rows }
			/>
			<Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
		</div>
	);
};

export default Products;