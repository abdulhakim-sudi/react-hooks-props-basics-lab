import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  const user = {
    name: 'Hakeem',
    city: 'New York',
    color: 'firebrick',
    bio: 'Full-stack developer passionate about React.',
    links: {
      github: 'https://github.com/abdulhakim-sudi',
      linkedin: 'https://www.linkedin.com/in/abdulhakim-sudi/'
    }
  };

  return (
    <div className="container">
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
