import React, { useState } from "react";
import "../Styles/Login.scss";
import Swal from "sweetalert2";
import UserData from "../Users.json";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState("");
    // const history = useHistory();

    const validateData = (e) => {
        e.preventDefault();

        const foundUser = UserData.users.find(
            (user) => user.name === email && user.pass === password
        );
        //Validate

        if (email === "" || password === "") {
            Swal.fire({
                icon: "error",
                text: "You cannot leave empty fields",
                confirmButtonColor: "#DE0000",
            });
        } else if (!foundUser) {
            Swal.fire({
                icon: "warning",
                text: "user not found",
                confirmButtonColor: "#D3C711",
            });
        } else {
            Swal.fire({
                icon: "success",
                text: "Welcome",
                confirmButtonColor: "#39F50B",
            });
            navigate("/Products");
            //history.push("/products");
            console.log("enruta");
            setIsValid(true);
        }
    };
    return (
        <div className="Login">
            <h1>LOGIN</h1>
            <form data-valid={isValid.toString()}>
                <input
                    type="email"
                    placeholder="User"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={validateData}>Continue</button>
            </form>
        </div>
    );
};
export default Login;
