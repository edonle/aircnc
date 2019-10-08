import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Dashboard() {

    const[spots, setSpots] = useState([]);

    //Hook que executa apenas uma vez. Haja visto que o segundo parametro, [] está vazio.
    useEffect(() => {

        //Não é permitido usar async no Hook useEffect
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {
                    spots.map(spot => (
                        <li key={spot._id }>
                            <header></header>
                            <strong>{spot.company}</strong>
                            <span>{spot.price}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}