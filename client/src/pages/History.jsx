import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../axios';

const History = () =>{
    const [histories, setHistories] = useState([]);
    const fetchData = async () => {
        try{
            const res = await axios.get('/history');
            setHistories(res.data.data);
        } catch(error){

        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    const del = async (id) =>{
        await axios.delete(`/history/${id}`);
        fetchData();
    }
    return (
        <div style={{color:'black'}}>
            {histories.map(h=>{
                return <div 
                    style={{padding:'30px', marginTop:'10px', backgroundColor:'whitesmoke'}} 
                    onClick={()=>del(h.id)}
                    >
                    {h.card_id}
                </div>
            })}
        </div>
    );
}

export default History;