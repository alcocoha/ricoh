import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { addFirstProductAction } from '../../store/actions/productsActions';
import { getData } from '../../api';
import isEmpty from 'lodash/isEmpty';
import { decimalToHex } from '../../utils';
import './styles.scss';

const SalesAnalysis = () => {

    const [ requestActive, setRequestActive ] = useState(false);

    const dispatch = useDispatch();

    // we bring the data from the store
	const products = useSelector( state => state.products );

    const getAllProducts = async () => {
        // if products is empty apply request to get data products
        if( isEmpty( products ) ){
            const data = await getData('5e4a06f92f0000640097cea4');
            dispatch( addFirstProductAction( data ) );
            setRequestActive(true);
        }
    }

    const getBarLabels = () => products && products.data.map( item => `${item.brand} ${item.model}` );

    const getBarData = () => products && products.data.map( item => item.price );

    // bar chart data is created
    const barData = () => ( {
        labels: getBarLabels(),
        datasets: [
            {
                label: 'Precios',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: getBarData()
            }
        ]
    } );

    // donut chart data is created
    const donutData = () => {
        const productsData = products && products.data.map( item => item.ram );
        const countData = productsData.reduce( ( countType, type ) => {
            countType[type] = ( countType[type] || 0 ) + 1;
            return countType;
        }, {});

        const labels = Object.keys( countData );
        const data = Object.values( countData );

        const colors = [];
        
        // dynamic colors are created
        for( let i = 0; i < data.length; i++){
            colors.push(decimalToHex());
        };

        return {
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                hoverBackgroundColor: colors
            }]
        };
    }

    useEffect( () => {
        if( !requestActive ) getAllProducts();
    }, []);

    return (
        <div className="sales-analysis-container">
            <h1>Analisis de ventas</h1>
            <div className="grid">
                { !isEmpty( products ) && 
                    <>
                        <div>
                            <Bar
                                data={ barData() }
                                width={1000}
                                height={600}
                                animation={true}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>
                        <div className="donut-chart">
                            <h4>Memoria RAM</h4>
                            <Doughnut data={donutData()} />
                        </div>
                    </>
                }
            </div>
            
        </div>
    );
};

export default SalesAnalysis;