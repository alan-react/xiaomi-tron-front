import styles from "./PopularProductCard.module.css"
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import img from "../../assets/xiaomi-redmi-note-9-pro.jpeg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import React from 'react';


const PopularProductCard = ({image, title, oldPrice, actualPrice, showAlert}) => {
    return (
        <Card className={styles.card}>
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={image}
                 />
                <CardContent style={{paddingTop: 0, marginTop: 0,
                    marginBottom: 15, paddingBottom: 0, height: 100}}>
                    <Typography className={styles.title} style={{fontSize: 16}}
                                gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" className={styles.price}
                                color="textSecondary" component="p">
                        {oldPrice} KZT
                    </Typography>
                    <Typography variant="h5" style={{fontSize: 20}}
                                className={styles.actualPrice} component="h3">
                        {actualPrice} KZT
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardButtons}>
                <AddShoppingCartIcon className={styles.icon}
                                     onClick={() => showAlert("Продукт добавлен в корзину", 5000, "Внимание")}/>
                <Button className={styles.byBtn} size="small" variant="outlined">
                    Купить
                </Button>
            </CardActions>
        </Card>
    );
}


export default PopularProductCard;
