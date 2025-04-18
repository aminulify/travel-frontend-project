'use client'
import Image from 'next/image';
import img1 from '../public/camp.svg';
import img2 from '../public/boat.png';
import img3 from '../public/meter.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Guide = () => {

    useEffect(()=>{
            AOS.init({});
        },[])
    
    return (
        <div className='md:max-w-[1100px] mx-10 md:mx-auto my-5'>
            <aside className=' grid md:grid-cols-2 grid-cols-1 my-5 items-center' data-aos="fade-up-right">
                <div className='md:w-[300px]'>
                    <Image src={img1} alt='camp vector icon'/>
                    <p className='text-slate-600'>WE ARE HERE FOR YOU</p>
                    <h1 className='md:text-4xl text-3xl font-bold text-green-900'>Guide you to easy path</h1>
                </div>
                <div>
                    <p data-aos="fade-up-right" className='text-sm text-slate-600 mt-2'>Travel opens the door to new experiences, cultures, and unforgettable memories. Whether exploring ancient landmarks, relaxing on tropical beaches, or hiking through breathtaking mountains etc.</p>
                </div>
            </aside>
            <aside className='relative mt-5 '  data-aos="fade-up-right">
                <Image src={img2} alt='header image' className='rounded-2xl h-[220px] md:h-full bg-cover bg-center'/>

                <div className='absolute top-3 left-3 md:top-10 md:left-10 p-4 bg-[#ffffffd9] backdrop-blur-5xl rounded-2xl flex gap-2'>
                    <div>
                        <Image src={img3} width={20} alt='meter img' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='text-slate-500 text-sm'>Destination</p>
                            <h2 className='font-semibold text-green-900'>Aguas Callentes</h2>
                        </div>
                        <div>
                            <p className='text-slate-500 text-sm'>Start Track</p>
                            <h2 className='font-semibold text-green-900'>Wonoejo Psasuran</h2>
                        </div>
                    </div>

                </div>
            </aside>
        </div>
    );
};

export default Guide;