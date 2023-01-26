import React from "react";
import { useSelector } from 'react-redux'

const ButtomFavorites = ({ id }) => {
    const products = useSelector(state => state.products)
    const user = useSelector(state => state.user)

    const handleClick = () => {
        const product = products.filter(product => product._id === id)
        user.favoritos.push(product)
    }

    return (
        <button type="submit" onClick={() => handleClick()}>xddddd</button>
    )
}

export default ButtomFavorites