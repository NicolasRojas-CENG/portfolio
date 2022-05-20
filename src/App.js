import Header from './components/Header'
import Nav from './components/Navbar';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <ContactForm />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
      };

      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <section id='section'>
                <Header></Header>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </section>
            <main>
                {renderPage()}
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;