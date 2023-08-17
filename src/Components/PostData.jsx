import React from 'react'
import { useState } from 'react'
import axios from "axios"
import './styles.css'

function PostData(onAddPlan) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('India');
    const [travellers, setTravellers] = useState(0);
    const [budget, setBudget] = useState(0);

    const handlePostData = async(e) => {
         e.preventDefault();
        try {
            const res = await axios.post("https://rn-101-mock4.onrender.com/travel/post",{
                name, email, destination, travellers:parseFloat(travellers) , budget:parseFloat(budget)
            });
            // console.log(res.data)
            // onAddPlan(res.data)
            setName('')
            setEmail('')
            setDestination('India')
            setTravellers('')
            setBudget('')
            
            alert("New Travel Plan added successfully")
             window.location.reload()
        } catch (error) {
            console.log({"Error in adding travel plan":error})
        }
    }
  return (
    <div>
        <h2 className='heading'>Add your Travel Plan</h2>

        <form onSubmit={handlePostData}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <select value={destination} onChange={(e)=>setDestination(e.target.value)}>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
            </select>
            <input type='number' placeholder='Travellers' value={travellers} onChange={(e)=>setTravellers(e.target.value)}></input>
            <input type='number' placeholder='Budget' value={budget} onChange={(e)=>setBudget(e.target.value)}></input>
            <button type='submit'>Add Plan</button>
        </form>
    </div>
  )
}

export default PostData