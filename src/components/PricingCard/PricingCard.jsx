import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;
    return (
        <div className='flex flex-col border bg-blue-600 rounded-2xl p-4'>

            {/* card header */}
            <div>
                <h1>{name}</h1>
                <p>price:  {price}</p>
            </div>
            {/* body */}
            <div className=' border mt-10 flex-1'>
                <div className='flex flex-col'>
                    <p className='text-black'>{description}</p>
                    {
                        features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                    }

                </div>
            </div>
            <div className='flex-1'>
                <button className='btn  w-full  '>subcribe</button>
            </div>
        </div>
    );
};

export default PricingCard;