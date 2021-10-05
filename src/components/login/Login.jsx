// import React, { useState } from "react";
// import { Redirect, Link, useHistory } from 'react-router-dom';
// import {useDispatch} from "react-redux";
//
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";
//
// import { connect } from "react-redux";
// import { login } from "../../actions/auth";
//
// const Login = () => {
//
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();
//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState({ username: "", password: "" });
//     const [data, setData] = useState({});
//
//     const history = useHistory();
//     const dispatch = useDispatch();
//
//     const required = (value) => {
//         if (!value) {
//             return (
//                 <div className="text-red-500" role="alert">
//                     Ce champ est requis !
//                 </div>
//             );
//         }
//     };
//
//     const handleChange = e => {
//         setData({...data,[e.target.name]:e.target.value});
//     };
//
//     const handleLogin = e => {
//         e.preventDefault();
//         setLoading(true);
//
//
//         checkBtn.context._errors.length === 0 ? (
//             dispatch(login(username, password))
//                 .then( () => {
//                     history.push("/mon-compte");
//                     window.location.reload();
//                 })
//                 .catch(setLoading(false))
//         ) : (
//             setLoading(false)
//         )
//     }
//
//
//
//     return(
//         <>
//             <form>
//                 <input
//                     type="text"
//
//                 />
//                 <input
//                     type="text"
//                 />
//
//                 <Link
//                     to="/accueil"
//                     className="button button-secondary"
//                 >
//                     retourner à l'accueil
//                 </Link>
//                 <button>
//                     se connecter
//                 </button>
//             </form>
//         </>
//     )
// }
//
// export default Login;