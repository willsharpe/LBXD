
"use client"
import { Roboto_Mono } from "next/font/google";
import {useState} from "react";
function LogIn(){
    const [formData,setFormData] = useState({
        name:'',
        email:''
    });

    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormData(((prevData) =>({
            ...prevData,[name]:value,
        })));
    };
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        console.log(formData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default LogIn