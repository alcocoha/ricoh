import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Polar} from 'react-chartjs-2';
import './styles.scss';


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data1 = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ]
  };

const data2 = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const SalesAnalysis = () => {
    return (
        <div className="sales-analysis-container">
            <h1>Analisis de ventas</h1>
            <div className="grid">
                <div>
                    <Bar
                        data={data}
                        width={1000}
                        height={600}
                        animation={true}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div>
                    <Polar data={data1} />
                    <Doughnut data={data2} />
                </div>
            </div>
            
        </div>
    );
};

export default SalesAnalysis;