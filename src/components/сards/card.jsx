import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import img from "../../assets/xiaomi-redmi-note-9-pro.jpeg"

import style from "./card.module.css"
import {connect} from "react-redux";

const useStyles = makeStyles({
    media: {
        height: 280,
    },
})

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Card className={style.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={style.title} gutterBottom variant="h5" component="h2">
                        Xiaomi Note 9
                    </Typography>
                    <Typography className={style.price} variant="body2" color="textSecondary" component="p">
                       80 000 KZT
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={style.cardButtons}>
                    <AddShoppingCartIcon className={style.icon}/>
                <Button size="small" color="secondary" className={style.byBtn}>
                    Купить
                </Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {})(ProductCard)
