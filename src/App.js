//import dependencies
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

//return component contents as app
function App() {
    return (
        <header>
            <Header />
        </header>,
        <section className='navigation'>
            <Navigation />
        </section>,
        <section className='project'>
            <Project />
        </section>,
        <footer>
            <Footer />
        </footer>
    )
}

export default App;