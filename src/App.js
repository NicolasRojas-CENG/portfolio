import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <body>
                <About></About>
                <Portfolio></Portfolio>
            </body>
        </>
    );
}

export default App;
