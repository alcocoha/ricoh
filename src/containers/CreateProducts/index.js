import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RicohSelect from '../../components/RicohSelect';
import RicohText from '../../components/RicohText';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { CATALOGS } from '../../constants/commons';
import { useStyles } from './styles';
import { addProductAction } from '../../store/actions/productsActions';
import { addLastProductAction } from '../../store/actions/lastProductActions';
import { Alert, AlertTitle } from '@material-ui/lab';
import { metadata } from '../../constants/translateMockup';

const CreateProducts = () => {
    const language = useSelector( state => state.language );
    const classes = useStyles();
    const [ brand, setBrand ] = useState( '' );
    const [ model, setModel] = useState( '' );
    const [ price, setPrice ] = useState( '' );
    const [ cpu, setCpu ] = useState( '' );
    const [ ram, setRam ] = useState( '' );
    const [ type, setType ] = useState( '' );
    const [ shape, setShape ] = useState( '' );
    const [ alertSuccess, setAlertSuccess ] = useState( -1 );
    const [ formData, setFormData ] = useState({});

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

    const cleanFields = () => {
        setBrand( '' );
        setModel( '' );
        setPrice( '' );
        setCpu( '' );
        setRam( '' );
        setRam( '' );
        setType( '' );
        setShape( '' );
    }

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if(brand !== '' && model !== '' && price !== '' && cpu !== ''
            && ram !== '' && type !== '' && shape !== '') {
                const data = { 
                    brand,
                    model,
                    price,
                    cpu,
                    ram,
                    type,
                    shape
                };
                setFormData( data );
                dispatch( addProductAction( data ) );
                dispatch( addLastProductAction( data ) );
                setAlertSuccess(1);
                cleanFields();
        } else {
            setAlertSuccess(0);
        }
    }

    useEffect( () => {
        if( brand !== '') setAlertSuccess(-1);
    }, [brand]);

    return (
        <Container maxWidth="sm">
            {
                alertSuccess === 1 &&
                <Alert severity="success">
                    <AlertTitle>{ metadata.creation_products_section[language].alertSuccess }</AlertTitle>
                    { metadata.creation_products_section[language].alertSuccessMessage }
                    <p>
                        {
                            JSON.stringify(formData, null, 4)
                        }
                    </p>
                </Alert>
            }
            {
                alertSuccess === 0 &&
                <Alert severity="error">
                    <AlertTitle>{ metadata.creation_products_section[language].alertError }</AlertTitle>
                    { metadata.creation_products_section[language].alertErrorMessage }
                </Alert>
            }
            <h1>{ metadata.creation_products_section[language].title }</h1>
            <RicohSelect
                id= "brand"
                label={ metadata.creation_products_section[language].labelBrand }
                value={ brand }
                onChange= { handleChange }
                options= { CATALOGS.brands }
                placeholder = { metadata.creation_products_section[language].placeholderBrand }
            />
            <RicohText
                id= "model"
                label= { metadata.creation_products_section[language].labelModel }
                value= { model }
                placeholder= { metadata.creation_products_section[language].placeholderModel }
                onChange= { handleChange }
            />
            <RicohText
                id= "price"
                label= { metadata.creation_products_section[language].labelPrice }
                value= { price }
                placeholder= { metadata.creation_products_section[language].placeholderPrice }
                onChange= { handleChange }
            />
            <RicohSelect
                id= "cpu"
                label={ metadata.creation_products_section[language].labelCPU }
                value= { cpu }
                onChange= { handleChange }
                options= { CATALOGS.cpu }
                placeholder= { metadata.creation_products_section[language].placeholderCPU }
            />
            <RicohSelect
                id= "ram"
                label={ metadata.creation_products_section[language].labelRAM }
                value= { ram }
                onChange= { handleChange }
                options= { CATALOGS.ram }
                placeholder= { metadata.creation_products_section[language].placeholderRAM }
            />
            <RicohSelect
                id= "type"
                label={ metadata.creation_products_section[language].labelType }
                value= { type }
                onChange= { handleChange }
                options= { CATALOGS.type }
                placeholder= { metadata.creation_products_section[language].placeholderType }
            />
            <RicohSelect
                id= "shape"
                label={ metadata.creation_products_section[language].labelShape }
                value= { shape }
                onChange= { handleChange }
                options= { CATALOGS.shape }
                placeholder= { metadata.creation_products_section[language].placeholderShape }
            />
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleAddProduct}>
                { metadata.creation_products_section[language].button }
                </Button>
            </div>
        </Container>
    );
};

export default CreateProducts;