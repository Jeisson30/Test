import React, { useState } from "react";
import "../Styles/Products.scss";
import Swal from "sweetalert2";

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 5.99 },
    ]);

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice.toFixed(2);
    };
    const handleProcederPago = () => {
        Swal.fire({
            title: "Thanks",
            text: "Wait moment...",
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            onOpen: () => {
                Swal.showLoading();
                setTimeout(() => {
                    Swal.hideLoading();
                    Swal.fire({
                        title: "¡You rock!",
                        text: "Thanks.",
                        icon: "success",
                    });
                }, 2000);
            },
        });
    };

    return (
        <div className="Products">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>
                            Add to car
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h2>Car shop</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
                {cartItems.length > 0 ? (
                    <p>Total: ${getTotalPrice()}</p>
                ) : (
                    <p>No products</p>
                )}
                <button onClick={handleProcederPago}>Pay</button>
            </div>
        </div>
    );
};

export default Products;
