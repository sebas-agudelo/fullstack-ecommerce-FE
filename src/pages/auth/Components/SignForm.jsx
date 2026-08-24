import { Link } from "react-router-dom"
import ButtonSpinner from "../../../components/spinners/ButtonSpinner";

export const SignForm = ({ handleSubmit, email, setEmail, password, setPassword, btn, error, isPending }) => {
    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <div className="flex flex-col mb-6">
                <label htmlFor="email" className="text-[14px] mb-1">E-post</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-post" id="email" name="email" 
                className={`border border-gray-400 rounded-lg py-2 px-2 transition-shadow duration-150 ease-in focus:outline-none focus:border-purple-800 focus:shadow-md ${(error?.msg?.email || error?.type === "invalid_credentials") && "border-red-600 focus:border-red-600"}`} />
                <p className="text-sm text-red-600">{error?.msg?.email}</p>
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-[14px] mb-1">Lösenord</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Lösenord" id="password" name="password" 
                className={`border border-gray-400 rounded-lg py-2 px-2 transition-shadow duration-150 ease-in focus:outline-none focus:border-purple-800 focus:shadow-md ${(error?.msg?.password || error?.type === "invalid_credentials") && "border-red-600 focus:border-red-600"}`} />
                <p className="text-sm text-red-600">{error?.msg?.password}</p>
            </div>

            <div className="text-end py-5">
                <Link to={``} className="lg:hover:text-purple-950 lg:hover:font-medium translate-all duration-150 ease-in">Glömt ditt lösenord?</Link>
            </div>

            <div className="w-full">

                <button className={`buttons ${password.length === 0 || email.length === 0 ? "bg-gray-400" : "buttons-bg "}`}
                    disabled={
                email.length === 0 || password.length === 0  ||
                    isPending}> {isPending ? <ButtonSpinner /> : btn} </button>
            </div>
        </form>
    )
}