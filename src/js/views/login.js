import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
  const {store, actions} = useEffect(Context)
    function method(store) {
        console.log("store:", store);
    }
    return (
        <div className="container">

        </div>
    );
};