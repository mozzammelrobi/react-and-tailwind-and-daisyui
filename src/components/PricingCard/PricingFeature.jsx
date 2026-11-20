import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
       <p className='flex items-center '> <CircleCheckBig className='text-[5px] mr-2 mt-3' /> {feature}</p>
    );
};

export default PricingFeature;