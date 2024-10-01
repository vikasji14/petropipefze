import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default styles
import baker from '../../image/baker.png'
import mooney from '../../image/mooney.png'
import panam from '../../image/panam.png'
import general from '../../image/general.png'
import conoso from '../../image/conso.png'

const Partners = () => {

    const responsive = {
        superLarge: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div>
            <p className='font-bold text-xl pt-6'>PARTNERS</p>
            <div className='flex text-black justify-center text-3xl font-bold'>CHANELS PARTNERS</div>
            <div>
                <div className='p-6 '>
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                        <div className='flex justify-center'>
                            <img src={baker} alt="Baker Logo" className="h-24" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={mooney} alt="Mooney Logo" className="h-24" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={panam} alt="Panam Logo" className="h-24" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={general} alt="General Logo" className="h-24" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={conoso} alt="Conoso Logo" className="h-24" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Partners