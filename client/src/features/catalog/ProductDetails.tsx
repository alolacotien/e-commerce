import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "../../app/models/product.ts";
import {Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]);
    
    if(loading) return (<h2>Loading...</h2>)
    
    if(!product) return (<h2>Product not found</h2>)
    
    return (
        <Grid container spacing={6}>
            <Grid item xs={6} >
                <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{mb: 2}} />
                <Typography variant="h4" color={'primary'}>${(product.price/100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Descroption</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default ProductDetails;