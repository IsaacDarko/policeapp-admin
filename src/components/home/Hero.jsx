import React from 'react';
import { styles } from '../../style';
import { star, heromobfront, heromobrear} from '../../assets/home';

const Hero = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-1/2`}>

            <div className='position:absolute w-130 h-72 my-40 '>
                <p className="flex-1 font-poppins font-bold ss:text-[4rem] text-[4rem] text-white">
                    Report, Record & Track Incidents Live 
                <p className="flex-1 font-poppins ss:text-[1rem] text-[1rem] text-white"><img src={star} alt="star" />4.8</p> 
                </p>                
                <span>You're Never Alone with a Report </span>
            </div>
                
            
        </div>


        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-1/2`}>
            <div>
                <div className=''>
                    <img src={heromobrear} alt="mobilerear" />
                </div>
                <div className='top-layer-images'>
                    <img src={heromobfront} alt="mobilefront" />
                </div>
                
            </div>
        </div>
    </section>
  )


export default Hero