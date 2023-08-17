// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import { useState } from 'react';
import PostData from './Components/PostData';
import RetrieveData from './Components/RetrieveData';
import axios from "axios";


function App() {

  const [travels, setTravels] = useState([]);

  useEffect(()=>{
    fetchTravel()
  },[])

  async function fetchTravel(){
    try {
      const res = await fetch(`https://rn-101-mock4.onrender.com/travel/get`);
      if(res.ok){
        const data = await res.json()
        console.log(data)
        setTravels(data)
      }else{
        console.log('Error in fetching travel plans')
      }
    } catch (error) {
      return error;
    }
  }

  const handleAddPlan = (newPlan) => {
    console.log(newPlan)
    setTravels([...travels,newPlan])
  }

  const handleDeletePlan = async(planID) =>{
    try {
      await axios.delete(`https://rn-101-mock4.onrender.com/travel/delete/${planID}`);
      alert("Travel Plan deleted")
      window.location.reload()
    } catch (error) {
      return error;
    }
  }

  const handleFilterChange = async(selectedDestination)=>{
    try {
      const res = await axios.get(`https://rn-101-mock4.onrender.com/travel/filter/${selectedDestination}`)
      console.log(res)
      setTravels(res.data)
      
    } catch (error) {
      console.log("Error in filtering destination")
    }
  }

  const handleSortChange = async(selectedOrder)=>{
    try {
      const res = await axios.get(`https://rn-101-mock4.onrender.com/travel/sort/${selectedOrder}`)
      console.log(res.data)
      setTravels(res.data)
    } catch (error) {
      console.log("Error in sorting data");
    }
  }

  return (
    <div className="App">
      <h2 id='title'>Travel Planning App</h2>
      <PostData onAddPlan={handleAddPlan} />
      <RetrieveData travels={travels} onDeletePlan={handleDeletePlan} onFilterDestination={handleFilterChange}
      onSortTravel={handleSortChange} />
    </div>
  );
}

export default App;
