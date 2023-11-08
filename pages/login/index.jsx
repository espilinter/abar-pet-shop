import Image from "next/image";
import animals from "../../assets/image/image 25.png"
import logo from "../../assets/image/Logo.png"
import { useEffect, useState } from "react";
import axios from "axios";
import InputOTP from "@/components/InputOTP/InputOtp";

const Login = (props) => {
    const [switchCase, setSwitchCase] = useState("1")
    const [phoneInputValue, setPhoneInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")
    const [firstNameInputValue, setFirstNameInputValue] = useState("")
    const [lastNameInputValue, setLastNameInputValue] = useState("")
    const [emailInputValue, setEmailInputValue] = useState("")
    const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState("")

    const [loginToken, setLoginToken] = useState("")
    const [otp, setOtp] = useState("")


    function sendPhoneButton() {
        let object = { mobile: phoneInputValue }
        axios.post("https://api.abarpetshop.com/api/v1/get-otp", object).then((res) => {
            setLoginToken(res.data.data.login_token)
            res.data.data.status === "exists" ? setSwitchCase("2") : setSwitchCase("4")
        })
    }

    function sendPasswordButton() {
        let object = {
            login_token: loginToken,
            mobile: phoneInputValue,
            password: passwordInputValue
        }
        axios.post("https://api.abarpetshop.com/api/v1/login-password", object).then((res) => {
            localStorage.setItem("Authorization_token", res.data.token)
        }).then(() => { window.location.href = "/profile"; })
    }

    function getOTPButton() {
        let object = {
            mobile: phoneInputValue
        }
        axios.post("https://api.abarpetshop.com/api/v1/resend-otp", object).then((res) => {
            // localStorage.setItem("Authorization_token", res.data.token)
            console.log(res.data);
        })
        // .then(() => { window.location.href = "/profile"; })
        setSwitchCase("3")
    }

    function sendOTPButton() {
        let object = {
            login_token: loginToken,
            mobile: phoneInputValue,
            otp: otp
        }
        axios.post("https://api.abarpetshop.com/api/v1/login-otp", object).then((res) => {
            localStorage.setItem("Authorization_token", res.data.token)
        })
            .then(() => { window.location.href = "/profile"; })
    }

    // function sendOTPButton() {
    //     let object = {
    //         login_token: loginToken,
    //         mobile: phoneInputValue,
    //         otp: otp
    //     }
    //     axios.post("https://api.abarpetshop.com/api/v1/login-otp", object).then((res) => {
    //         // localStorage.setItem("Authorization_token", res.data.token)
    //         console.log(res.data);
    //     })
    //     // .then(() => { window.location.href = "/profile"; })
    // }

    function sendRegisterButton() {
        if (passwordInputValue === repeatPasswordInputValue) {
            let object = {
                login_token: loginToken,
                mobile: phoneInputValue,
                first_name: firstNameInputValue,
                last_name: lastNameInputValue,
                password: passwordInputValue,
                email: emailInputValue
            }
            axios.post("https://api.abarpetshop.com/api/v1/register", object).then((res) => {
                localStorage.setItem("Authorization_token", res.data.token)
            })
                .then(() => { window.location.href = "/profile"; })
        }
    }

    function checkOTPButton(params) {
        let object = {
            login_token: loginToken,
            mobile: phoneInputValue,
            otp: otp
        }
        axios.post("https://api.abarpetshop.com/api/v1/check-otp", object).then((res) => {
            // localStorage.setItem("Authorization_token", res.data.token)
            if (res.data.checkOtp === "true" || res.data.checkOtp === true) {
                setSwitchCase("5")
            }
        })
        // .then(() => { window.location.href = "/profile"; })
    }

    function phoneInputChangeHandler(event) {
        setPhoneInputValue(event.target.value)
    }

    function passwordInputChangeHandler(event) {
        setPasswordInputValue(event.target.value)
    }

    function firstNameInputChangeHandler(event) {
        setFirstNameInputValue(event.target.value)
    }

    function lastNameInputChangeHandler(event) {
        setLastNameInputValue(event.target.value)
    }

    function emailInputChangeHandler(event) {
        setEmailInputValue(event.target.value)
    }

    function repeatPasswordInputChangeHandler(event) {
        setRepeatPasswordInputValue(event.target.value)
    }

    switch (switchCase) {
        case "1":
            return (
                <div className="pt-150">
                    <div className="w-90% m-auto md:h-600 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                        <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                            <Image alt={""} className="hidden md:inline-block" src={logo} />
                            <div className=" py-48 px-0 lg:px-48 ">
                                <i className="hidden md:inline-block aps-home-2-o text-24  cursor-pointer" onClick={() => { setSwitchCase("1") }}></i>
                                <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] md:mt-120" placeholder="شماره موبایل" value={phoneInputValue} onChange={phoneInputChangeHandler} />
                                <button onClick={sendPhoneButton} className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">وارد کردن رمزعبور</button>
                            </div>
                        </div>
                        <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                            <Image alt={""} src={animals} />
                            <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                                <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#21C45D] ">کد ورود ارسال شد</p>
                                </div>
                                <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "2":
            return (
                <div className="pt-150">
                    <div className="w-90% m-auto md:h-600 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                        <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                            <Image alt={""} className="hidden md:inline-block " src={logo} />
                            <div className=" py-48 px-0 lg:px-48 flex flex-col items-center">
                                <i className="hidden md:inline-block aps-home-2-o text-24 mr-0 ml-auto  cursor-pointer" onClick={() => { setSwitchCase("1") }}></i>
                                <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] md:mt-120" placeholder="رمز عبور" value={passwordInputValue} onChange={passwordInputChangeHandler} />
                                <button onClick={sendPasswordButton} className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">ورود</button>
                                <button className="text-center text-[#728A2D] text-lg font-medium leading-[34px] mt-48 m-auto w-fit" onClick={getOTPButton}>ورود با کد</button>
                            </div>
                        </div>
                        <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                            <Image alt={""} src={animals} />
                            <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                                <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#21C45D] ">کد ورود ارسال شد</p>
                                </div>
                                <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "3":
            return (
                <div className="pt-150">
                    <div className="w-90% m-auto md:h-600 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                        <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                            <Image alt={""} className="hidden md:inline-block " src={logo} />
                            <div className=" py-48 px-0 lg:px-48 flex flex-col items-center">
                                <i className="hidden md:inline-block aps-home-2-o text-24 mr-0 ml-auto mb-[100px]  cursor-pointer" onClick={() => { setSwitchCase("1") }}></i>
                                <InputOTP setOtp={setOtp} otp={otp} />
                                <button onClick={sendOTPButton} className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">ورود</button>
                                {/* <button className="text-center text-[#728A2D] text-lg font-medium leading-[34px] mt-48 m-auto w-fit" onClick={() => { setSwitchCase("3") }}>ورود با کد</button> */}
                            </div>
                        </div>
                        <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                            <Image alt={""} src={animals} />
                            <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                                <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#21C45D] ">کد ورود ارسال شد</p>
                                </div>
                                <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "4":
            return (
                <div className="pt-150">
                    <div className="w-90% m-auto md:h-600 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                        <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                            <Image alt={""} className="hidden md:inline-block " src={logo} />
                            <div className=" py-48 px-0 lg:px-48 flex flex-col items-center">
                                <i className="hidden md:inline-block aps-home-2-o text-24 mr-0 ml-auto mb-[100px]  cursor-pointer" onClick={() => { setSwitchCase("1") }}></i>
                                <InputOTP setOtp={setOtp} otp={otp} />
                                <button onClick={checkOTPButton} className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">ورود</button>
                                {/* <button className="text-center text-[#728A2D] text-lg font-medium leading-[34px] mt-48 m-auto w-fit" onClick={() => { setSwitchCase("3") }}>ورود با کد</button> */}
                            </div>
                        </div>
                        <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                            <Image alt={""} src={animals} />
                            <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                                <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#21C45D] ">کد ورود ارسال شد</p>
                                </div>
                                <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "5":
            return (
                <div className="pt-150">
                    <div className="w-90% m-auto md:h-600 lg:h-800 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                        <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                            <Image alt={""} className="hidden md:inline-block" src={logo} />
                            <div className=" py-48 px-0 lg:px-48 ">
                                <i className="hidden md:inline-block aps-home-2-o text-24 cursor-pointer" onClick={() => { setSwitchCase("1") }}></i>
                                <div className="flex flex-col gap-y-36 mt-45">
                                    <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] " placeholder="نام" value={firstNameInputValue} onChange={firstNameInputChangeHandler} />
                                    <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] " placeholder="نام خانوادگی" value={lastNameInputValue} onChange={lastNameInputChangeHandler} />
                                    <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] " placeholder="ایمیل" value={emailInputValue} onChange={emailInputChangeHandler} />
                                    <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] " placeholder="رمز عبور" value={passwordInputValue} onChange={passwordInputChangeHandler} />
                                    <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#5e5e5e] bg-[#F1F1F1] md:bg-[#F3FBDF] " placeholder="تکرار رمز عبور" value={repeatPasswordInputValue} onChange={repeatPasswordInputChangeHandler} />
                                </div>
                                <button onClick={sendRegisterButton} className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">وارد کردن رمزعبور</button>
                            </div>
                        </div>
                        <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                            <Image alt={""} src={animals} />
                            <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                                <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#21C45D] ">کد ورود ارسال شد</p>
                                </div>
                                <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                    <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Login;