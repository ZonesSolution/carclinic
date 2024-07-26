import React, { useState } from 'react'
import { chatimage } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = ({ active }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        make: '',
        model: '',
        age: '',
        mileage: '',
        vin: '',
        previousThreadId: ''
    });

    const navigate = useNavigate()

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
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            const response = await axios.post('/api/api/v1/auth/register', formData)
            if (response.data.success === false) {
                alert(response.data.message)
              } else if (response.data.success === true) {
                alert(response.data.message)
                navigate('/signin')
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
                        <h2 className='text-[#011E33] text-2xl max-sm:text-xl font-bold pb-4'>SETUP YOUR ACCOUNT</h2>
                        <form onSubmit={handleSubmit} className='flex max-sm:flex-col-reverse justify-between w-full gap-12 pb-6 border-b border-[#011E33]'>
                            <div className='w-1/2 max-sm:w-full'>
                                <h3 className='pb-4 text-[#011E33] font-semibold'>YOUR DETAILS</h3>
                                <div className='flex flex-col gap-6'>
                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="text"
                                        placeholder='First Name'
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="text"
                                        placeholder='Last Name'
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="tel"
                                        placeholder='Mobile Number'
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        pattern="[2-9]{1}[0-9]{9}"
                                        title="Please enter a valid US phone number (10 digits)"
                                    />

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

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="password"
                                        placeholder='Confirm Password'
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        minLength="8"
                                        required
                                    />
                                    <input className='text-white bg-[#011E33] px-[30px] py-[10px] text-xl font-medium rounded-md w-1/2 max-sm:w-full cursor-pointer' type="submit" value="CONTINUE" />
                                </div>
                            </div>
                            <div className='w-1/2 max-sm:w-full'>
                                <h3 className='pb-4 text-[#011E33] font-semibold'>CAR DETAILS</h3>
                                <div className='flex flex-col gap-6'>
                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="text"
                                        placeholder='Make'
                                        name="make"
                                        value={formData.make}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="number"
                                        placeholder='Model'
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="number"
                                        placeholder='Age'
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        min="0"
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="number"
                                        placeholder='Mileage'
                                        name="mileage"
                                        value={formData.mileage}
                                        onChange={handleChange}
                                        min="0"
                                        required
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="text"
                                        placeholder='VIN (Optional)'
                                        name="vin"
                                        value={formData.vin}
                                        onChange={handleChange}
                                        pattern="[A-HJ-NPR-Za-hj-npr-z0-9]{17}"
                                    />

                                    <input
                                        className='border px-2 py-2 rounded-md'
                                        type="text"
                                        placeholder='Previous Thread-ID (Optional)'
                                        name="previousThreadId"
                                        value={formData.previousThreadId}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </form>
                        <p className='py-4 font-medium'>Already have an account ? <Link to={'/signin'} className='cursor-pointer'>SignIn</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup