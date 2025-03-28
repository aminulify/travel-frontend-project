import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../public/hilink-logo.svg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';

type FooterLink = string;

interface ContactLink {
    label: string,
    value: string
}

interface contactInfo {
    title: string,
    links: ContactLink
}

const Footer = () => {

    return (
        <div className='mt-10'>
            <hr className='text-slate-300' />

            <footer className='max-w-[1100px] py-10 md:mx-auto mx-10 flex justify-between flex-col md:flex-row gap-5 text-slate-800'>
                <Link href={'/'}>
                    <Image src={logo} alt='footer logo' />
                </Link>
                <div>
                    <h4 className='font-medium mb-2'>{FOOTER_LINKS[0].title}</h4>
                    <div>
                        {
                            FOOTER_LINKS[0].links.map((item:FooterLink, index:number)=>(
                                <p key={index} className='underline text-sm mb-1'>{item}</p>
                            ))
                        }
                 
                    </div> 
                </div>

                <div>
                    <h4 className='font-medium mb-2'>{FOOTER_CONTACT_INFO.title}</h4>
                        <div>
                            {FOOTER_CONTACT_INFO.links.map((item: ContactLink, index: number) => (
                            <div key={index} className="flex gap-1">
                            <p className="text-sm">{item.label} :</p>
                            <p className="underline text-sm">{item.value}</p>
                            </div>
                         ))}
                    
                        </div> 
                </div>

                <div>
                    <h4 className='font-medium mb-2'>{FOOTER_LINKS[1].title}</h4>
                            <div>
                                {
                                    FOOTER_LINKS[1].links.map((item:string, index:number)=>(
                                        <p key={index} className='underline text-sm mb-1'>{item}</p>
                                    ))
                                }
                        
                            </div> 
                </div>
                <div>
                <h4 className='font-medium mb-2'>{SOCIALS.title}</h4>
                        <div className='flex'>
                            {SOCIALS.links.map((item: string, index: number) => (
                           
                             <Link href={'/'} className='px-1'><Image src={item} alt='icon' width={20} height={20} key={index} /></Link>
                            
                         ))}
                    
                        </div> 
                </div>
            </footer>

            <hr className='text-slate-300' />
            <p className='text-center text-sm py-2'>&copy; Hilink Reserved For 2025</p>
        </div>
    );
};

export default Footer;