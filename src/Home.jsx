import {useNavigate} from 'react-router';
import Typewriter from 'typewriter-effect';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="gradient-background min-h-screen">
            <div className="bg-gray-900 text-white min-h-screen">
                <br/>
                <h1 className="text-4xl font-bold">Mathijs van der Meijde</h1>
                <div id="typewriter" className="mt-4">
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
