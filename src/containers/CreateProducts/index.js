import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RicohSelect from '../../components/RicohSelect';
import RicohText from '../../components/RicohText';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { CATALOGS } from '../../constants/commons';
import { useStyles } from './styles';
import { addProductAction } from '../../store/actions/productsActions';

const CreateProducts = () => {

    const classes = useStyles();
    const [ brand, setBrand ] = useState( '' );
    const [ model, setModel] = useState( '' );
    const [ price, setPrice ] = useState( '' );
    const [ cpu, setCpu ] = useState( '' );
    const [ ram, setRam ] = useState( '' );
    const [ type, setType ] = useState( '' );
    const [ shape, setShape ] = useState( '' );

    const handleChange = e => {
        const id = e.target.id;
        const value = e.target.value;
        switch (id) {
            case 'brand':
                setBrand( value );
                break;
            case 'model':
                setModel( value );
                break;
            case 'price':
                setPrice( value );
                break;
            case 'cpu':
                setCpu( value );
                break;
            case 'ram':
                setRam( value );
                break;
            case 'type':
                setType( value );
                break;
            case 'shape':
                setShape( value );
                break;
            default:
                console.log('default')
                break;
        }
    }

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch( addProductAction( { brand, model, price, cpu, ram, type, shape } ) );
    }

    return (
        <Container maxWidth="sm">
            <h1>Crear nuevo ordenador</h1>
            <RicohSelect
                id= "brand"
                label="Brand"
                value={ brand }
                onChange= { handleChange }
                options= { CATALOGS.brands }
            />
            <RicohText
                id= "model"
                label= "Model"
                value= { model }
                placeholder= "Ingresa algo"
                onChange= { handleChange }
            />
            <RicohText
                id= "price"
                label= "Price"
                value= { price }
                placeholder= "Ingresa algo"
                onChange= { handleChange }
            />
            <RicohSelect
                id= "cpu"
                label="CPU"
                value= { cpu }
                onChange= { handleChange }
                options= { CATALOGS.cpu }
            />
            <RicohSelect
                id= "ram"
                label="RAM"
                value= { ram }
                onChange= { handleChange }
                options= { CATALOGS.ram }
            />
            <RicohSelect
                id= "type"
                label="Type"
                value= { type }
                onChange= { handleChange }
                options= { CATALOGS.type }
            />
            <RicohSelect
                id= "shape"
                label="Shape"
                value= { shape }
                onChange= { handleChange }
                options= { CATALOGS.shape }
            />
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleAddProduct}>
                    Crear nueva computadora
                </Button>
            </div>
        </Container>
    );
};

export default CreateProducts;