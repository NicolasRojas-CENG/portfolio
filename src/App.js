import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import './App.css'

function App() {
    const [categories] = useState([
        {
        name: 'About',
        description: `${About}`},
        { name: 'Portfolio', description: `${Portfolio}` },
        { name: 'Contact', description: `${ContactForm}`},
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <>
            <header>
                <Navbar
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></Navbar>
            </header>
            <main>
                <Portfolio currentCategory={currentCategory}></Portfolio>
            </main>
        </>
    );
}

export default App;