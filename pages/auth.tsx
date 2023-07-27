import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import {signIn} from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState<Boolean>(true);


    const toggleVariant = useCallback(() => {
        setVariant((nowVariant) => {
            return !nowVariant;
        })
    }, []);


    const login = useCallback(async () => {
            try {
                await signIn('credentials', {
                    email,
                    password,
                    callbackUrl: '/profiles',
                })
            } catch (error) {
                console.log(error);
            }
        }, [email, password])


    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
        } catch (error) {
            console.log(error);
        }
        login();
    }, [email, name, password, login])

    



    return ( 
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 ">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center  lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                           {
                            !variant && (
                                <Input 
                                label="name"
                                onChange={(e:any) => {setName(e.target.value)}}
                                id="name"
                                value={name}
                                />
                            )
                           }
                            <Input 
                            label="Email"
                            onChange={(e:any) => {setEmail(e.target.value)}}
                            id="email"
                            type="email"
                            value={email}
                            />
                            <Input 
                            label="Password"
                            onChange={(e:any) => {setPassword(e.target.value)}}
                            id="password"
                            type="password"
                            value={password}
                            />
                            <button className="bg-red-500 py-3 rounded-md w-full text-white hover:bg-red-700 transition mt-10" onClick={ variant ? login : register}>
                                {variant ? 'Login' : 'Register'}
                            </button>
                            <div className="flex justify-center items-center gap-4 mt-6">
                                <div 
                                className="flex justify-center items-center bg-white rounded-full w-10 h-10 hover:opacity-80 transition cursor-pointer"
                                onClick={() => {
                                    signIn('google', {callbackUrl: '/profiles'});
                                }}>
                                    <FcGoogle size={30}/>
                                </div>
                                <div 
                                className="flex justify-center items-center bg-white rounded-full w-10 h-10 hover:opacity-80 transition cursor-pointer"
                                onClick={() => {
                                    signIn('github', {callbackUrl: '/profiles'});
                                }}>
                                    <FaGithub size={30} />
                                </div>
                            </div>

                            
                            <p className="text-neutral-500 mt-2">
                                { variant ? 'First time using Netflix?' : 'Already have account?'} <span className="text-white ml-1 hover:underline cursor-pointer" onClick={() => {
                                    toggleVariant();
                                }}>{ variant ? "Create an account" : 'Login just now'}</span> 
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Auth; 