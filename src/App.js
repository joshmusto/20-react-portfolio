//import dependencies
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

//full render
function App() {
    return (
        <section>
            <header>
                <Header />
            </header>
            <section className='sectionMain'>
                <section id='sectionAboutMe'>
                    <p>About me page</p>
                </section>
                <section id='sectionPortfolio' className='d-none'>
                    <Project />
                </section>
                <section id='sectionContact' className='d-none'>
                    <p>Contact page</p>
                </section>
                <section id='sectionResume' className='d-none'>
                    <p>Resume page</p>
                </section>
            </section>
            <footer>
                <Footer />
            </footer>
        </section>
    );
}

export default App;