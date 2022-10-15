import React from 'react'

import logo from '../assets/jord.jpg'
import logo2 from '../assets/balenciaga.jpg'
import logo3 from '../assets/bote.jpg'
import logo4 from '../assets/nike.jpg'
import logo5 from '../assets/air.jpg'
const Card = () => {
    const name1 ='AIR-jordan'
    const prix1 = 35000
    const name2 ='Balenciaga'
    const prix2 = 10000
    const name3 ='bote'
    const prix3 =20000
    const name4 ='nike'
    const prix4 =25000
    const name5 ='air'
    const prix5 =20000
    return (
        <div className='row'>

        <div className='card'>
          <img className='card-img' src={logo} alt=''/>
          <h2 className='card-name'>{name1}</h2>
          <p className='card-price'>{prix1} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>
        

        <div className='card'>
          <img className='card-img' src={logo2} alt=''/>
          <h2 className='card-name'>{name2}</h2>
          <p className='card-price'>{prix2} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={logo3} alt=''/>
          <h2 className='card-name'>{name3}</h2>
          <p className='card-price'>{prix3} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={logo4} alt=''/>
          <h2 className='card-name'>{name4}</h2>
          <p className='card-price'>{prix4} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={logo5} alt=''/>
          <h2 className='card-name'>{name5}</h2>
          <p className='card-price'>{prix5} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

</div>
    )
}



export default Card