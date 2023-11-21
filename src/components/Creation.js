import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Creation({ creation }) {
    const  {favorites, addCreation, deleteCreation} = useContext(FavoritesContext);
    console.log(favorites)
    return (
        <>
        <div className='Creacion_card'>
            <div className="costado-der">
                <label className="ui-like">  
                {favorites.find((fav) => fav.id === creation.id) ? (
                <input type="checkbox" defaultChecked onClick={()=> deleteCreation(creation)}/>
                ):(
                    <input type="checkbox" onClick={()=> addCreation(creation)}/>
                )}     
                <div className="like">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                    <g className="svg" id="SVGRepo_iconCarrier">
                        <path  d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" ></path>
                    </g>
                    </svg>
                </div>
                </label>
            </div>
            <Link to={creation.link}  className="po_item">
                <img src={creation.img} alt="" />
                <div className="content">
                    <p>{creation.description}</p>
                    <button to={creation.link}>view project</button>
                </div>
            </Link>
        </div>
        </>
    )
}

Creation.propTypes = {
    creation: PropTypes.object,
};