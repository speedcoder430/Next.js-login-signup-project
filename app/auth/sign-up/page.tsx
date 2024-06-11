"use client"

import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, } from 'react';

const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    admin: 0, //default 0: user, 1: admin
}
const inputProps = [
    {
        label: "First name*",
        name: "firstName",
        type: "text"
    },
    {
        label: "Middle name",
        name: "middleName",
        type: "text"
    },
    {
        label: "Last name*",
        name: "lastName",
        type: "text"
    },
    {
        label: "Email*",
        name: "email",
        type: "email"
    },
    {
        label: "Password*",
        name: "password",
        type: "password"
    },
    {
        label: "Confirm password*",
        name: "password2",
        type: "password"
    },
]
export default function Page() {
    const [formData, setFormData] = useState(initialValues)
    const [miscState, setMiscState] = useState({
        checked: true,
    })
    const [errors, setErrors] = useState(initialValues)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        (!value && name !== 'middleName') ? setErrors({ ...errors, [name]: `${[name]} field is required!` }) : setErrors({ ...errors, [name]: "" });
        (name === "password2" && value !== formData.password) ? setErrors({ ...errors, [name]: `${[name]} must be match to password` }) : setErrors({ ...errors, [name]: "" });
    }
    const handleChangeAdmin = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setMiscState(prevData => ({
            ...prevData,
            [name]: (miscState.checked === true ? false : true)
        }));
    }

    const inputList = inputProps.map((element, index) => {
        const { label, name, type } = element;
        const nameKey: keyof typeof formData = name as any;
        return (
            <div key={index} className='grid grid-cols-12 gap-4 justify-end'>
                <label
                    className="col-span-4 text-right text-gray-600">
                    {label} :
                </label>
                <input
                    className="col-span-8"
                    type={type}
                    name={name}
                    value={formData[nameKey]}
                    onChange={handleChange}
                />
                <span className=' text-right col-span-12 text-red-400 text-xs'>{errors[nameKey]}</span>
            </div>
        )
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validator(formData)) {
            return;
        } else {
            const user = { ...formData };
            console.log(user);
        }
    }

    const validator = (anyState: any) => {
        for (let key in anyState) {
            if (!anyState[key]) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="page-login w-full">
            <div className="card-login w-[500px] mx-auto mt-8 bg-gray-200 py-8 px-4 rounded-lg flex flex-col gap-4">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className=" flex justify-center grid-cols-12 py-6">
                        <span className=" text-4xl text-gray-700">
                            Sign Up
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        {inputList}
                    </div>
                    <div className="flex justify-around">
                        <input type='checkbox' id="admin" name='checked' checked={miscState.checked} onChange={handleChangeAdmin}></input><label className='py-2' htmlFor='admin'>Signup as Admin</label>
                        <button className=" bg-green-500 text-white rounded-md px-4 py-2" type="submit" >Submit</button>
                        <Link className=' text-gray-600 px-4 py-2' href="/">Guest Mode</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
