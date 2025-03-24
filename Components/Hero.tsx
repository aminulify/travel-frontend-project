import Image from 'next/image';
import React from 'react';
import campImg from "../public/camp.svg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Button from './Button';
import RightSideHeroImg from "../public/hero.png";
import { MdClose } from "react-icons/md";
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='md:max-w-[1100px] md:mx-auto mx-10'>
            <div className='md:flex flex-between gap-10 items-center md:mt-0 mt-5'>

                <aside className='leftAos'>
                    <div className='relative z-20'>
                        <Image src={campImg} alt='camp vector image' width={50} className='absolute left-[-5px] top-[0px] w-10 lg:w-[50px]' />
                        <h1 className='pt-12 text-4xl font-bold text-green-900'>Putuk Truno Camp Area</h1>
                        <p className='text-sm text-slate-600 mt-2'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.</p>
                        <div className='flex gap-1 text-xl mt-2 items-center'>
                            <MdOutlineStarPurple500 className='text-yellow-400'/>
                            <MdOutlineStarPurple500 className='text-yellow-400'/>
                            <MdOutlineStarPurple500 className='text-yellow-400'/>
                            <MdOutlineStarPurple500 className='text-yellow-400'/>
                            <MdOutlineStarPurple500 className='text-yellow-400'/>
                            <span className='text-sm font-medium'>198K <Link href={'https://aminulify.com'} className='underline cursor-pointer'>Good Reviews</Link></span>
                        </div>
                    </div>

                    <div className='mt-10 flex md:flex-row flex-col items-center md:gap-0 gap-5 mb-5 md:mb-0'>
                        <Link href={'https://www.linkedin.com/in/aminulify/'} className='sm-w-full'>
                            <Button type='button' title='Download App' variant='btn-green'  />
                        </Link>
                        <Link href={'https://www.facebook.com/aminulify'} className='sm-w-full'>
                            <Button type='button' title='How we work?' variant='btn-transparent' icon='/play.svg' />
                        </Link>
                    </div>
                </aside>

                <aside className='relative rightAos'>
                    <div className='pt-[-100px]'>
                        <Image src={RightSideHeroImg} className='w-[1400px] fadeRight' alt='right side image' />

                        <div className='absolute md:top-16 top-4 md:left-10 bg-black backdrop-blur-2xl text-white md:p-5 p-3 rounded-xl shadow-green-300 shadow-2xl'>
                            <MdClose className='text-white absolute right-5 md:top-4 top-3'/>
                            <p className='text-[12px] md:text-sm text-slate-300'>Location</p>
                            <p className='text-[12px] md:text-sm font-medium mb-3'>Dhaka, Bangladesh</p>

                            <aside className='flex gap-5'>
                                <div>
                                    <p className='text-[12px] md:text-sm text-slate-300'>Distance</p>
                                    <p className='text-[12px] md:text-sm font-medium '>173.28 ml</p>
                                </div>
                                <div>
                                    <p className='text-[12px] md:text-sm text-slate-300'>Elevation</p>
                                    <p className='text-[12px] md:text-sm font-medium '>2.040 Km</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </aside>
            </div>
            
        </div>
    );
};

export default Hero;