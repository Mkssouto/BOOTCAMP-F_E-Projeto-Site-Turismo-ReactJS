import { useEffect, useState } from "react";
import { get } from "../../services/request";
import Grid from '@mui/material/Grid';
import Product from '../../components/product/product';

const Catalog = () => {
    const [catalog, setCatalog] = useState([]);

    const loadData = async () => {
        const response = await get("https://demo5193762.mockable.io/produto");
        setCatalog(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return <Grid container spacing={2} 
        
        style={{
        padding: '15px',
        boxSizing: 'border-box',
        backgroundColor: '#001b33',
        marginLeft: 0
    }}>
        { catalog.length > 0 ? 
            catalog.map(product => {
                return <Grid item xs={12} sm={6} md={4} lg={3}>
                          <Product product={product}/>
                       </Grid>
            })
        : "Nenhum produto encontrado"}
    </Grid>
}

export default Catalog;