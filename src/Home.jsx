import { useNavigate } from 'react-router';
import Typewriter from 'typewriter-effect';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <br/>
            <h1>Mathijs van der Meijde</h1>
            <div id="typewriter">
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
            <button onClick={() => navigate('/projects')}>Projects</button>
        </>
    );
}

export default Home;
