import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import isEmpty from 'lodash/isEmpty';

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
            <h1>Ultimo producto agregado</h1>
                {
                    isEmpty(lastProduct) ?
                    <h3>No hay ningún producto agregado =(</h3>
                    :
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <h2>Brand</h2>
                            <p>
                                { lastProduct.brand }
                            </p>
                            <h2>Model</h2>
                            <p>
                                { lastProduct.model }
                            </p>
                            <h2>Price</h2>
                            <p>
                                { lastProduct.price }
                            </p>
                            <h2>CPU</h2>
                            <p>
                                { lastProduct.cpu }
                            </p>
                            <h2>RAM</h2>
                            <p>
                                { lastProduct.ram }
                            </p>
                            <h2>Type</h2>
                            <p>
                                { lastProduct.type }
                            </p>
                            <h2>Shape</h2>
                            <p>
                                { lastProduct.shape }
                            </p>
                        </CardContent>
                    </Card>
                }
        </Container>
    );
};

export default LastProductAdd;