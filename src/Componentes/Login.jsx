import COVER_IMAGE from '/src/assets/elmo.jpg';

//un objeto que almacena valores de colores para mantener una paleta de colores consistentes
const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disbaled: "#D9D9D9"
}

//funcion flecha anonima login
const Login = () =>{
    return (
        <div className={"w-full h-screen flex items-start"}>
            <div className={"relative w-1/2 h-full flex flex-col"}>
                <div className={"absolute top-[7.8%] left-[15%] flex flex-col"}>
                    <h1 className={"text-4xl text-white font-bold my-4"}>está parchao</h1>
                    <p className={"text-xl text-white font-normal"}>texto lindo de intro a la página</p>
                </div>
                <img src={COVER_IMAGE} className={"w-full h-full"}/>
            </div>

            <div className={"w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center"}>
                <h1 className={" w-full max-w-[450px] mx-auto text-xl text-[#060606] font-semibold"}>Nombre del sitio</h1>

                <div className={"w-full flex flex-col max-w-[450px]"}>
                    <div className={"w-full flex flex-col mb-5"}>
                        <h3 className={"text-3xl font-semibold mb-4"}>Login</h3>
                        <p className={"text-base mb2"}>Welcome Back! Please enter your details</p>
                    </div>

                    <div className={"w-full flex flex-col"}>
                        <input
                            type = "email"
                            placeholder={"Email"}
                            className={"w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"}/>

                        <input
                            type = "password"
                            placeholder={"Password"}
                            className={"w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"}/>
                    </div>

                    <div className={"w-full flex items-center justify-between"}>
                        <div className={"w-full flex items-center"}>
                            <input type={"checkbox"} className={"w-4 h-4 mr-2"}/>
                            <p className={"text-sm"}>Remember me</p>
                        </div>

                        <p className={"text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"}>Forgot password?</p>
                    </div>

                    <div className={"w-full flex flex-col my-4"}>
                        <button className={"w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"}>
                            Log in
                        </button>
                        <button className={"w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"}>
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className={"w-full flex items-center justify-center"}>
                    <p className={"text-sm font-normal text-[#060606]"}>Dont have a account? <span className={"font-semibold underline underline-offset-2 cursor-pointer"}>Sign Up</span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;