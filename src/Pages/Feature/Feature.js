import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Feature.css'

const Feature = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <>
             <section className='features top' id='features'>
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>
                    <div >
                       <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                               {
                                    items.map(item=> <Card key={item.id} item={item}/>)
                                } 
                        </div>   
                    </div>
                </div>
             </section>
             
        </>
    );
};

export default Feature;