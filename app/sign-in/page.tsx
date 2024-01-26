"use client"
import axios from "axios"
import { FormEvent, FormEventHandler, useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { IoPerson } from "react-icons/io5"



export default function SignIn() {
    const [data, setData] = useState({
        login: "admin",
        password: "111"
    })


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const response = await axios.post("/api/auth", data)
            console.log(response)
        } catch (error) {
            console.log("catch message")
        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center gap-2 mb-6 text-2xl font-semibold  text-accent">
                    <IoPerson />
                    Admin
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-normal leading-tight tracking-tight text-center md:text-2xl text-white">
                            Войти
                        </h1>
                        <div className="flex gap-4 justify-between">
                            <div className="flex items-center gap-2 font-light text-xs border-white border-2 py-2 px-4 rounded-md">
                                Войти с помошью <FcGoogle size={25} />
                            </div>
                            <div className="flex items-center gap-2 font-light text-xs border-white border-2 py-2 px-4 rounded-md">
                                Войти с помошью <FaGithub size={25} />
                            </div>
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label id="login" className="block mb-2 text-sm font-medium text-white">Логин</label>
                                <input
                                    onChange={(value) => setData({ ...data, login: value.currentTarget.value })}
                                    value={data.login} type="login" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" />
                            </div>

                            <div>
                                <label id="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                <input autoComplete="password"
                                    onChange={(value) => setData({ ...data, password: value.currentTarget.value })}
                                    value={data.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}