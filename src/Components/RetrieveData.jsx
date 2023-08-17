import React from 'react';
import { useState } from 'react';
import './styles.css';

function RetrieveData({travels, onDeletePlan, onFilterDestination, onSortTravel}) {
    const [filterDestination, setFilterDestination] = useState('');
    const [sortTravel, setSortTravel] = useState('');

    const handleFilterDestination = (e) =>{
        setFilterDestination(e.target.value);
        onFilterDestination(e.target.value);
    }

    const hanleSortTravel = (e) =>{
        setSortTravel(e.target.value);
        onSortTravel(e.target.value);
    }

  return (
    <div>
        <h2 className='heading2'>Travel Plans</h2>

        <div id='filterSort'>
            <label>Filter by destination:</label>
            <select value={filterDestination} onChange={handleFilterDestination}>
                <option value="All">All</option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
            </select>

            <label>Sort by budget:</label>
            <select value={sortTravel} onChange={hanleSortTravel}>
                <option value="">Sort Plan</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to low</option>
            </select>
        </div>

        <div id='cardBox'>
            {travels.map((el)=>(
                <div key={el._id} className='travel-card'>
                    <h3>{el.name}</h3>
                    <p>Email : {el.email}</p>
                    <p>Destination : {el.destination}</p>
                    <p>Travellers : {el.travellers}</p>
                    <p>Budget : {el.budget}</p>
                    <button onClick={()=>onDeletePlan(el._id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RetrieveData