import { Carousel, IconButton } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CarouselComponent = ({ images }) => {
    return (
        <Carousel
            className="rounded-xl mb-6"
            loop={true}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 bg-slate-800/90 hover:bg-slate-800 text-white rounded-full border border-gray-400/50 hover:border-blue-400 transition-all duration-300 p-2"
                    style={{ fontFamily: 'Panchang, sans-serif' }}
                >
                    <ChevronLeftIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 right-4 -translate-y-2/4 bg-slate-800/90 hover:bg-slate-800 text-white rounded-full border border-gray-400/50 hover:border-blue-400 transition-all duration-300 p-2"
                    style={{ fontFamily: 'Panchang, sans-serif' }}
                >
                    <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            )}
        >
            {images.map((image, index) => (
                <div key={index} className="relative h-full w-full">
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-full w-full object-cover rounded-lg"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
