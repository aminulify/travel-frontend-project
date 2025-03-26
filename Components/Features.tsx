import Image from 'next/image';
import img1 from '../public/camp.svg';
import img2 from '../public/phones.png';
import { FEATURES } from '@/constants';
import bgImg from '../public/feature-bg.png';

const Features = () => {
    return (
        <div className='my-10 max-w-[1100px] md:mx-auto mx-10 relative'>
            <header className='flex justify-center'>
                <div>
                    <Image src={img1} alt='camp image icon' />
                    <h1 className='md:text-4xl text-3xl font-bold text-green-900'>Our Features</h1>
                </div>
            </header>
            <main className='grid md:grid-cols-3 grid-cols-1 items-center'>
                <div className='flex justify-center col-span-1'>
                    <Image src={img2} alt='left side image'  className='md:w-[500px] w-[300px] z-0 rotate-35'/>

                    {/* bg-image  */}
                    <Image src={bgImg} alt='left side image'  className='absolute -z-10 md:-mt-24'/>
                </div>

                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:pl-38'>
                    {
                        FEATURES.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <Image src={item.icon} alt='icon' width={40} height={40} className='p-3 bg-green-500 rounded-full' />
                                    <h3 className='mt-2 font-semibold text-lg text-green-900'>{item.title}</h3>
                                    <p className='text-sm text-slate-600'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Features;