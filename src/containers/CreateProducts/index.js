import React from 'react';
import RicohSelect from '../../components/RicohSelect';
import RicohText from '../../components/RicohText';

const CreateProducts = () => {

    const handleChange = e => {
        console.log('event: ', e.target.value, e.target.id)
    }

    return (
        <div>
            <h1>Crear nuevo ordenador</h1>
            <RicohText
                id= "texto1"
                label= "Demo"
                placeholder= "Ingresa algo"
                onChange= { handleChange }
            />
            <RicohSelect
                id= "model"
                label="Modelo"
                onChange= { handleChange }
            />
        </div>
    );
};

export default CreateProducts;