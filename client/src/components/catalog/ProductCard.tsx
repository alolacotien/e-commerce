import {Product} from "../../app/models/product.ts";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface Props {
    product: Product;
}

function ProductCard({product}: Readonly<Props>) {
    return (
        <Card>
            <CardHeader avatar={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            } 
                        title={product.name}
                        titleTypographyProps={{sx: {fontWeight: 'bold'}, color:'primary.main'}}
            />
            <CardMedia
                sx={{height: 140, backgroundSize: 'contain', bgcolor:'grey.500'}}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color={'secondary'}>
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price} / {product.brand}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to card</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;