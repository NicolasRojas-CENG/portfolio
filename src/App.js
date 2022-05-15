import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Navbar';
import About from './components/About';
//import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
        <section id='section'>
            <Header></Header>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </section>
      <main>
        {!contactSelected ? (
          <>

            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;