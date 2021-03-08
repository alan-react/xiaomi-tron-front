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


const PopularProductCard = () => {
    return (
        <Card className={styles.card}>
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent style={{paddingTop: 0, marginTop: 0,
                    marginBottom: 0, paddingBottom: 0}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Xiaomi Note 9
                    </Typography>
                    <Typography variant="body2" className={styles.price} color="textSecondary" component="p">
                        80 000 KZT
                    </Typography>
                    <Typography variant="h5" className={styles.actualPrice} component="h3">
                        79 999 KZT
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardButtons}>
                <AddShoppingCartIcon className={styles.icon}/>
                <Button className={styles.byBtn} size="small" color="secondary">
                    Купить
                </Button>
            </CardActions>
        </Card>
    );
}



const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {})(PopularProductCard)
