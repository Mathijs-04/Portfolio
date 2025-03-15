import React from 'react';
import { Carousel } from '@material-tailwind/react';

const CarouselComponent = ({ images }) => {
    return (
        <Carousel className="rounded-xl mb-6">
            {images.map((image, index) => (
                <div key={index} className="relative h-full w-full">
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
