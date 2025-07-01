"use client";
import {useState} from 'react';

function NameFields(props:any){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    return (
        <form>
            First name: <input type='text' className='input-field' onChange={(e) => setFirstName(e.target.value)}/>
            <div>
                Last name: <input type="text" className="input-field" onChange={(e) => setLastName(e.target.value)}/>
            </div>
        </form>
        
    );
}

export default NameFields