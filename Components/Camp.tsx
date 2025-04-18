'use client'
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface CampProps{
    backgroundImage: string,
    title: string,
    subtitle: string,
    peopleJoined: string,
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) =>{

    useEffect(()=>{
                AOS.init();
            },[])

    return(
        <div className={` h-full w-full min-w-[400px] md:min-w-[900px] bg-cover bg-no-repeat rounded-2xl ${backgroundImage}`}>
            <div className="flex justify-left items-center my-5 mx-5  gap-4">
                <div className="rounded-full bg-green-500 p-4">
                <Image
                    src="/folded-map.svg"
                    alt="map"
                    width={28}
                    height={28}
                />
                </div>
                <div className="flex flex-col">
                <h4 className=" text-white font-semibold">{title}</h4>
                <p className="text-sm text-slate-50">{subtitle}</p>
                </div>
            </div>

            <div className="flex items-center mt-48 mx-5 gap-3">
                <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url) => (
                    <Image 
                    className="h-10 w-10 rounded-full"
                    src={url}
                    key={url}
                    alt="person"
                    width={52}
                    height={52}
                    />
                ))}
                </span>
                <p className="font-medium text-white">{peopleJoined}</p>
            </div>
      </div>
    )
}

const Camp = () => {
    return (
        <section className='relative my-5 md:w-[1100px] md:mx-auto'>
            <div className='flex h-[340px] w-full gap-8 lg:h-[400px]' data-aos="fade-left">
                <CampSite 
                    backgroundImage="bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
                <CampSite 
                    backgroundImage="bg-img-2"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
            </div>
            <div className="mx-10">
            <aside data-aos="fade-up" className="md:absolute right-[250px] top-[230px] w-full md:w-[500px] p-5 rounded-xl bg-green-500 text-white mt-8 shadow-xl shadow-green-200">
                <h2 className="md:text-xl text-lg mb-1"><span className="font-semibold">Feeling Lost</span> And No Knowing The Way?</h2>
                <p className="text-slate-50 text-sm">Travel opens the door to new experiences, cultures, and unforgettable memories. Whether exploring ancient landmarks, relaxing on tropical beaches.</p>
            </aside>
            </div>
        </section>
    );
};

export default Camp;