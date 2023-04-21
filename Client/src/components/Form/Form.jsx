import style from "./Form.module.css";
import { useState } from "react"
import validation from "./validation";
import imgform from "./../../images/rick_and_morty_form3.jpg";
export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value })
        setErrors(validation({ ...userData, [property]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }
    return (
        <div className={style.container}>
            <div className={style.form}>
            <img src={imgform}  alt="" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className={style.inputs}>
                    <label className={style.label}>Username </label>
                    <input className={style.input} name="email" value={userData.name} onChange={handleChange} autoComplete="off"/>
                    <p className={style.errors}>{errors.email}</p>
                </div>
                <div className={style.inputs}>
                    <label className={style.label}>Password </label>
                    <input className={style.input} name="password" value={userData.password} onChange={handleChange} type="password" autoComplete="off" />
                    <p className={style.errors}>{errors.password}</p>
                </div>
                <button className={style.button}>Submit</button>
            </form>
            </div>
            
        </div>
    )
}