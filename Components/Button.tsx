import Image from 'next/image';
import React from 'react';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
    return (
        <button className={`${variant}`} type={type}>
            {icon && <Image src={icon} alt={title} width={24} height={24} /> }
            <label className='cursor-pointer'>{title}</label>

        </button>
    );
};

export default Button;