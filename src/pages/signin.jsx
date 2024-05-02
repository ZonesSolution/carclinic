import React, { useState } from 'react'
import { chatimage } from '../assets/images'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext';
import axios from 'axios'

const SignIn = ({ active }) => {

    const [formData, setFormData] = useState({
        emailAddress: '',
        password: '',
    });

    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()
    const location = useLocation()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/api/v1/auth/login', formData)
            if (response.data.success === false) {
                alert(response.data.message)
            } else if (response.data.success === true) {
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token
                })
                localStorage.setItem('auth', JSON.stringify(response.data))
                navigate('/dashboard/user')
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <>
            <div className='flex max-sm:flex-col h-[100vh]'>
                <div className='w-1/4 max-sm:w-full bg-white flex justify-center items-center h-full'>
                    <Link to={'/'}>
                        <img src={chatimage} alt="chat-image" />
                    </Link>
                </div>
                <div className='w-3/4 max-sm:w-full bg-white flex flex-col justify-center items-center'>
                    <div className='w-full px-16 max-sm:px-8'>
                        <h2 className='text-[#011E33] text-2xl font-bold pb-4'>SIGN IN</h2>
                        <form onSubmit={handleSubmit} className='flex justify-between w-full gap-12 pb-6 border-b border-[#011E33]'>
                            <div className='w-full'>
                                <div className='flex flex-col gap-6'>
                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="email"
                                        placeholder='Email Address'
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="password"
                                        placeholder='Password'
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        minLength="8"
                                        required
                                    />
                                    <Link to={'/forget-password'} className='cursor-pointer underline'>Forget Password ?</Link>
                                    <input className='text-white bg-[#011E33] px-[30px] py-[10px] text-md font-medium rounded-md w-1/4 max-sm:w-full cursor-pointer' type="submit" value="Continue" />

                                </div>
                            </div>
                        </form>
                        <p className='py-4 font-medium'>Dont have an account ? <Link to={'/signup'} className='cursor-pointer'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn