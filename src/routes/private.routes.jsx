// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Outlet } from "react-router-dom"

// export const PrivateRoutes = () => {

//     const [loginData, setLoginData] = useState()

//     useEffect(() => {
//         fetchLoginData()
//     }, [])

//     function fetchLoginData() {
//         setLoginData(localStorage.getItem("login"))
//     }

//     if (loginData == "logged") {
//         window.location.href = "/Management/inventory";
//     }
//     else {
//         return <Outlet />;
//     }
// }