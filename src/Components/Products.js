import React, { useState } from "react";
import "../Styles/Products.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
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

    const handleLogout = () => {
        navigate("/");
    };

    const handleProcederPago = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                icon: "error",
                title: "No products in cart",
                text: "Please add products to your cart before proceeding to payment.",
                confirmButtonColor: "#d33",
            });
        } else {
            let timerInterval;
            Swal.fire({
                title: "Processing payment",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    Swal.fire({
                        icon: "success",
                        text: "Thanks for your payment :)",
                        confirmButtonColor: "#39F50B",
                    });
                    setCartItems([]);
                },
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    return;
                }
            });
        }
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
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h2>Cart</h2>
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
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Products;
