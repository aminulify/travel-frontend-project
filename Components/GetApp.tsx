'use client'
import Image from 'next/image';
import img1 from '../public/camp.svg';
import img2 from '../public/android.svg';
import img3 from '../public/apple.svg';
import Link from 'next/link';
import img4 from '../public/phones.png';
import img5 from '../public/feature-bg.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GetApp = () => {

     useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className='max-w-[1100px] md:h-[400] md:overflow-hidden md:mx-auto mx-10 relative'>
            <main className=' bg-green-900 rounded-2xl md:px-16 px-10'>
                
                <Image src={img5} alt='image' className='mix-blend-multiply absolute right-0 md:top-0 top-[200px]' />

                <section className='grid md:grid-cols-2 grid-cols-1 gap-10 z-50'>
        
                    <aside className='md:mt-10 pt-10 z-20' data-aos="fade-up-right">
                        <Image src={img1} alt='icon' />
                        <h2 className='font-bold text-4xl text-white'>Get For Free Now!</h2>
                        <p className='text-white mb-5'>Available ios and android, download now!</p>

                        <div className='z-0 flex flex-col gap-3 w-[200px] md:mx-0 mx-auto'>
                            <Link href={'/'} className='flex gap-2 bg-white text-green-600 w-full rounded-full py-2 justify-center'><Image src={img3} alt='image' /> Download App</Link>
                            <Link href={'/'} className='flex gap-2 bg-black w-full rounded-full py-2 text-white justify-center'><Image src={img2} alt='image' /> Download App</Link>
                        </div>
                    </aside>
                    <aside className='pb-10 md:pb-0' data-aos="fade-up-left">
                        <Image src={img4} alt='image' className='w-[70%] mx-auto' />
                    </aside>

                </section>
            </main>
            
        </div>
    );
};

export default GetApp;