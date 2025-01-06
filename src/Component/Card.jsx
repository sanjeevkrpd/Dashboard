import React from 'react'
import { MdBarChart } from 'react-icons/md'
import './Card.css'
const Card = ({icon , heading ,money , wt , ht}) => {
  return (
    <div className='maincard' style={{width: wt ,  minHeight: ht}}>

            <div className='icon'> {icon} </div>
            <div className='info'>
                <h4>{heading}</h4>
                <h2>{money}</h2>


            </div>

    </div>
  )
}

export default Card