// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Outlet } from "react-router-dom"

// export const ProtectRoutes = () => {

//     const [loginData, setLoginData] = useState()

//     useEffect(() => {
//         fetchLoginData()
//     }, [])

//     function fetchLoginData() {
//         setLoginData(localStorage.getItem("login"))
//     }


//     if (loginData == "logged") {
//         return <Outlet />;
//     }
//     if (loginData == "unLogged") {
//         window.location.href = "/loginPage";
//     }
// }