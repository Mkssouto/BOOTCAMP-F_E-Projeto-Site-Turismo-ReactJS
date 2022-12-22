import { useParams } from "react-router-dom";
import { get } from "../../services/request";
import { useEffect, useState } from "react";
import NotFound from '../not-found/not-found';
import ProductItem from "../../components/product-item/product-item";

const Product = () => {
    const params = useParams();
    const [ product, setProduct] = useState(null);

    const loadData = async () => {
        // const id = 1;
        const id = params.id; //Correto
        const response = await 
        get(`https://demo5193762.mockable.io/product/${id}`);
        setProduct(response.data)
    }

    useEffect(() => {
        loadData()
    }, [])
    return product ? 
        <ProductItem product={product}/> : 
        <NotFound 
            title="OOps! Produto não encontrado!"
            text="Sentimos muito, mas esse produto não existe mais em nossa loja!"
            link="/catalog"
            link_name="Produtos"
        />
}

export default Product;