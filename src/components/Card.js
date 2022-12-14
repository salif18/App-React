import React from 'react'

import image1 from '../img/jord.jpg'
import image2 from '../img/balenciaga.jpg'
import image3 from '../img/bote.jpg'
import image4 from '../img/nike.jpg'
import image5 from '../img/air.jpg'
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
          <img className='card-img' src={image1} alt=''/>
          <h2 className='card-name'>{name1}</h2>
          <p className='card-price'>{prix1} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>
   

        <div className='card'>
          <img className='card-img' src={image2} alt=''/>
          <h2 className='card-name'>{name2}</h2>
          <p className='card-price'>{prix2} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={image3} alt=''/>
          <h2 className='card-name'>{name3}</h2>
          <p className='card-price'>{prix3} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={image4} alt=''/>
          <h2 className='card-name'>{name4}</h2>
          <p className='card-price'>{prix4} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

        <div className='card'>
          <img className='card-img' src={image5} alt=''/>
          <h2 className='card-name'>{name5}</h2>
          <p className='card-price'>{prix5} Fcfa</p>
          <button className='card-add'>Ajouter</button>
        </div>

</div>
    )
}



export default Card