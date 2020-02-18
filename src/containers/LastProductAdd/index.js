import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import isEmpty from 'lodash/isEmpty';
import { metadata } from '../../constants/translateMockup';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const LastProductAdd = () => {
    const language = useSelector( state => state.language );
    const lastProduct = useSelector( state => state.lastProduct );

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <h1>{ metadata.last_products_added_section[language].title }</h1>
                {
                    isEmpty(lastProduct) ?
                    <h3>{ metadata.last_products_added_section[language].messageDontProducts }</h3>
                    :
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <h2>{ metadata.last_products_added_section[language].labelBrand }</h2>
                            <p> { lastProduct.brand } </p>
                            <h2>{ metadata.last_products_added_section[language].labelModel }</h2>
                            <p> { lastProduct.model } </p>
                            <h2>{ metadata.last_products_added_section[language].labelPrice }</h2>
                            <p> { lastProduct.price } </p>
                            <h2>{ metadata.last_products_added_section[language].labelCPU }</h2>
                            <p> { lastProduct.cpu } </p>
                            <h2>{ metadata.last_products_added_section[language].labelRAM }</h2>
                            <p> { lastProduct.ram } </p>
                            <h2>{ metadata.last_products_added_section[language].labelType }</h2>
                            <p> { lastProduct.type } </p>
                            <h2>{ metadata.last_products_added_section[language].labelShape }</h2>
                            <p> { lastProduct.shape } </p>
                        </CardContent>
                    </Card>
                }
        </Container>
    );
};

export default LastProductAdd;