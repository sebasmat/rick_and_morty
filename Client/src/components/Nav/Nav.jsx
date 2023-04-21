import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav(props) {

    return (
        <ul className={style.container}>
            <li>
                <Link to="/Favorites">
                    <p>Favorites</p>
                </Link>
            </li>
            <li>
                <Link to="/About">
                    <p>About</p>
                </Link>
            </li>
            <li>
                <Link to="/Home">
                    <p>Home</p>
                </Link>
            </li>
            <li className={style.searchBar}>
                <SearchBar onSearch={props} />
            </li>
        </ul>
    )
}