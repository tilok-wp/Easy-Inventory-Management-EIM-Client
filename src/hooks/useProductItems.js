import { useEffect, useState } from "react"

const useProductItems = ([limit, page]) => {
    const [productItems, setProductItems] = useState([])
    useEffect(() => {
        const url = `https://secure-earth-46160.herokuapp.com/inventory?limit=${limit}&page=${page}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductItems(data))
    }, [limit, page])
    return [productItems, setProductItems]
}

export default useProductItems