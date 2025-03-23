import Image from 'next/image';
import React from 'react';
import { FiUser } from 'react-icons/fi';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant?: 'btn-green-600';
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
    return (
        <button className="px-6 py-2 bg-black text-white rounded-full flex items-center gap-1 cursor-pointer hover:bg-green-600 font-[400] duration-300 transition-all" type={type}>
            {icon && <Image src={icon} alt={title} width={24} height={24} /> }
            <label className='whitespace-nowrap'>{title}</label>

        </button>
    );
};

export default Button;