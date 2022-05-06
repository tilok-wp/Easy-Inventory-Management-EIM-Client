import { useEffect, useState } from "react";

const useProductDetails = product_id => {
    const [productItem, setProductItem] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${product_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductItem(data))

    }, [product_id])
    return [productItem, setProductItem]
};

export default useProductDetails;