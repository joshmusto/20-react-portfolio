import React from 'react';

//render nav
function Navigation() {
    //page change functions
    const loadAboutMe = () => {
        document.getElementById('sectionAboutMe').classList.remove('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
    }
    const loadPortfolio = () => {
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.remove('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
    }
    const loadContact = () => {
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.remove('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
    }
    const loadResume = () => {
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.remove('d-none');
    }
    return (
        <section id='sectionNav'>
            <h4 className='navButton d-inline-block' onClick={() => loadAboutMe()}>About Me</h4>
            <h4 className='navButton d-inline-block' onClick={() => loadPortfolio()}>Portfolio</h4>
            <h4 className='navButton d-inline-block' onClick={() => loadContact()}>Contact</h4>
            <h4 className='navButton d-inline-block' onClick={() => loadResume()}>Resume</h4>
        </section>
    );
}

export default Navigation;