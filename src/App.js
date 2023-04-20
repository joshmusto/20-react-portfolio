//import dependencies
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import headshot from './assets/headshot.jpg';
import resume from './assets/resume.pdf';

function App() {
    //function to handle contact form submission
    const contactSubmit = (input) => {
        input.preventDefault();

        //future backend for actual submission goes here

        //show thank you
        document.getElementById('sectionContactThanks').classList.remove('d-none');
    }

    //return the full render
    return (
        <section>
            <header>
                <Header />
            </header>
            <section className='sectionMain'>
                <section id='sectionAboutMe'>
                    <section id='aboutMeCard' className='sectionCard'>
                        <img src={headshot} alt='headshot' className='headshot'/>
                        <p>Hey, I'm Josh!
                            <br/>
                            <br/>
                            I'm an animator turned programmer who attended Columbia University's coding bootcamp. I have a passion for problem-solving that drives my motivation to code, and my artistic background gives me insight about design and presentation that not every other programmer has.
                        </p>
                    </section>
                </section>
                <section id='sectionPortfolio' className='d-none'>
                    <Project />
                </section>
                <section id='sectionContact' className='d-none'>
                    <section id='sectionContactThanks' className='sectionCard d-none'>
                        <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
                    </section>
                    <form className='sectionCard' onSubmit={contactSubmit}>
                        <h5>Name</h5>
                        <input
                            type='text'
                            placeholder='Your name here'
                            required='true'
                            className='contactInput'
                        ></input>
                        <h5>Email</h5>
                        <input
                            type='email'
                            placeholder='example@email.com'
                            required='true'
                            className='contactInput'
                        ></input>
                        <h5>Message</h5>
                        <textarea
                            type='text'
                            placeholder=''
                            required='true'
                            className='contactInput contactInputMessage'
                        ></textarea>
                        <input
                            type='submit'
                            value='Send'
                        ></input>
                    </form>
                </section>
                <section id='sectionResume' className='d-none'>
                    <section className='sectionCard sectionCardResume'>
                        <object data={resume} width="100%" height="100%"> </object>
                        <a href={resume} download='resume'>
                            <button id='buttonDownloadResume'>Download as PDF</button>
                        </a>
                    </section>
                </section>
            </section>
            <footer>
                <Footer />
            </footer>
        </section>
    );
}

export default App;