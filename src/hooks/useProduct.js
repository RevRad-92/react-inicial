import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from '../redux/reducers/productReducer';


export const useProduct = () => {
    const productReducer = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!productReducer.all.length) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setAllProducts(data))
                })
        }
    }, [productReducer.all.length, dispatch]);

    return [productReducer];
}

