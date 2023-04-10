import React from 'react';

//render nav
function Navigation() {
    //page change functions
    const loadAboutMe = () => {
        //hide non-selected sections
        document.getElementById('sectionAboutMe').classList.remove('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
        //show current section as selected
        document.getElementById('navButtonAboutMe').classList.add('navButtonSelected');
        document.getElementById('navButtonPortfolio').classList.remove('navButtonSelected');
        document.getElementById('navButtonContact').classList.remove('navButtonSelected');
        document.getElementById('navButtonResume').classList.remove('navButtonSelected');
    }
    const loadPortfolio = () => {
        //hide non-selected sections
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.remove('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
        //show current section as selected
        document.getElementById('navButtonAboutMe').classList.remove('navButtonSelected');
        document.getElementById('navButtonPortfolio').classList.add('navButtonSelected');
        document.getElementById('navButtonContact').classList.remove('navButtonSelected');
        document.getElementById('navButtonResume').classList.remove('navButtonSelected');
    }
    const loadContact = () => {
        //hide non-selected sections
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.remove('d-none');
        document.getElementById('sectionResume').classList.add('d-none');
        //show current section as selected
        document.getElementById('navButtonAboutMe').classList.remove('navButtonSelected');
        document.getElementById('navButtonPortfolio').classList.remove('navButtonSelected');
        document.getElementById('navButtonContact').classList.add('navButtonSelected');
        document.getElementById('navButtonResume').classList.remove('navButtonSelected');
    }
    const loadResume = () => {
        //hide non-selected sections
        document.getElementById('sectionAboutMe').classList.add('d-none');
        document.getElementById('sectionPortfolio').classList.add('d-none');
        document.getElementById('sectionContact').classList.add('d-none');
        document.getElementById('sectionResume').classList.remove('d-none');
        //show current section as selected
        document.getElementById('navButtonAboutMe').classList.remove('navButtonSelected');
        document.getElementById('navButtonPortfolio').classList.remove('navButtonSelected');
        document.getElementById('navButtonContact').classList.remove('navButtonSelected');
        document.getElementById('navButtonResume').classList.add('navButtonSelected');
    }
    return (
        <section id='sectionNav'>
            <h4 id='navButtonAboutMe' className='navButton navButtonSelected d-inline-block' onClick={() => loadAboutMe()}>About Me</h4>
            <h4 id='navButtonPortfolio' className='navButton d-inline-block' onClick={() => loadPortfolio()}>Portfolio</h4>
            <h4 id='navButtonContact' className='navButton d-inline-block' onClick={() => loadContact()}>Contact</h4>
            <h4 id='navButtonResume' className='navButton d-inline-block' onClick={() => loadResume()}>Resume</h4>
        </section>
    );
}

export default Navigation;