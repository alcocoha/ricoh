import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFirstProductAction } from '../../store/actions/productsActions';
import { getData } from '../../api';
import RicohTable from '../../components/RicohTable';
import RicohCarousel from '../../components/RicohCarousel';

const Products = () => {

	const [ requestActive, setRequestActive ] = useState(false);

    const dispatch = useDispatch();
	const products = useSelector( state => state.products );

	const getAllProducts = async () => {
		// add request
		const data = await getData('5e4a06f92f0000640097cea4');
		dispatch( addFirstProductAction( data ) );
		setRequestActive(true);
    }

    useEffect( () => {
		if( !requestActive ) getAllProducts();
	}, [requestActive]);

	return (
		<>
			{ requestActive ?
				<>
					<RicohTable
						rows= { products.data }
					/>
					<RicohCarousel
						products = { products.data }
					/>
				</>
				:
				<div style={ { textAlign: 'center', paddingTop: 50 } }>Cargando información...</div>
			}
		</>
	);
};

export default Products;