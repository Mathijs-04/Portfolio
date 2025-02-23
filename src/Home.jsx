import {useNavigate} from 'react-router';
import Typewriter from 'typewriter-effect';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 text-white">
                <h1 className="text-4xl panchang-font ">Mathijs van der Meijde</h1>
                <div id="typewriter" className="mt-4 text-white">
                    <Typewriter
                        options={{
                            loop: true,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString('String <strong>1</strong>')
                                .pauseFor(300)
                                .deleteChars(8)
                                .typeString('String <strong>2</strong>')
                                .pauseFor(300)
                                .deleteChars(8)
                                .typeString('String <strong>3</strong>')
                                .pauseFor(300)
                                .deleteChars(8)
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </div>
                <br/>
                <h1 className="font-panchang font-extralight text-3xl">Extralight Panchang</h1>
                <p className="font-body text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                </p>

                <h1 className="font-panchang font-light text-3xl">Light Panchang</h1>
                <p className="font-body text-base mb-4">
                    Curabitur nec leo nec risus ultrices luctus non non justo.
                </p>

                <h1 className="font-panchang font-normal text-3xl">Regular Panchang</h1>
                <p className="font-body text-base mb-4">
                    Donec posuere, libero sed elementum scelerisque, est ex mattis augue, at dictum turpis enim eget
                    ligula.
                </p>

                <h1 className="font-panchang font-medium text-3xl">Medium Panchang</h1>
                <p className="font-body text-base mb-4">
                    Quisque vehicula ipsum eget turpis auctor, sed ultricies mi bibendum.
                </p>

                <h1 className="font-panchang font-semibold text-3xl">Semibold Panchang</h1>
                <p className="font-body text-base mb-4">
                    Suspendisse potenti. Nam lacinia ligula in orci cursus volutpat.
                </p>

                <h1 className="font-panchang font-bold text-3xl">Bold Panchang</h1>
                <p className="font-body text-base mb-4">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>

                <h1 className="font-panchang font-extrabold text-3xl">Extrabold Panchang</h1>
                <p className="font-body text-base mb-4">
                    Fusce euismod dui non orci vehicula, non scelerisque nisi volutpat.
                </p>
                <br/>
                <button
                    onClick={() => navigate('/projects')}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Projects
                </button>
            </div>
        </div>
    );
}

export default Home;
