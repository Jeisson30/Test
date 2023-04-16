import React from "react";
import "../Styles/SignUp.scss";

const SignUp = () => {
    return (
        <div className="signup">
            <h1>signup</h1>
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo electrónico" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};
export default SignUp;
