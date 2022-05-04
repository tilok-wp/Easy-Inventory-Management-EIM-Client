import { useEffect, useState } from "react"

const useProductItems = () => {
    const [productItems, setProductItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProductItems(data))
    }, [])
    return [productItems, setProductItems]
}

export default useProductItems