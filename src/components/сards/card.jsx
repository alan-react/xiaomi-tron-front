import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import style from "./card.module.css"
import {Link} from "react-router-dom";


const ProductCard = ({price, title, img, available, slug}) => {
    return (
        <Link to={"product/" + slug}>
        <Card className={style.card}>
            <CardActionArea>
                <CardMedia
                    className={style.media}
                    title="Contemplative Reptile"
                    image={img}
                />
                <CardContent>
                    <Typography style={{fontSize: 20}} className={style.title} gutterBottom variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography className={style.price} variant="body1" color="textSecondary" component="p">
                        {price} KZT
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={style.cardButtons}>
                {available ? <AddShoppingCartIcon className={style.icon}/> : <div/>}
                <Button disabled={!available} size="small" color="secondary" className={style.byBtn}>
                    {available ? "Купить" : "Нет в наличии "}
                </Button>
            </CardActions>
        </Card>
        </Link>

    );
}

export default ProductCard
