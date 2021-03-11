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
import {connect} from "react-redux";

const ProductCard = ({price, title, img}) => {

    return (
        <Card className={style.card}>
            <CardActionArea>
                <CardMedia
                    className={style.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={style.title} gutterBottom variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography className={style.price} variant="body1" color="textSecondary" component="p">
                        {price} KZT
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
