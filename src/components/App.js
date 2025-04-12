import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
    const user = {
        name: 'Liza',
        city: 'New York',
        color: 'firebrick',
        bio: 'I am a web developer!',
        github: 'https://github.com/liza',
        linkedin: 'https://www.linkedin.com/in/liza',
    };

    return (
        <div>
            <NavBar />
            <Home name={user.name} city={user.city} color={user.color} />
            <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
        </div>
    );
}

export default App;
