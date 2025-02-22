import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Mathijs van der Meijde</h1>
            <h2>Creative Developer</h2>
            <br />
            <button onClick={() => navigate('/projects')}>Projects</button>
        </>
    );
}

export default Home;
