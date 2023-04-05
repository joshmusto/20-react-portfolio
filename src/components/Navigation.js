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
        <nav id='sectionNav' classList=''>
            <h4 classList='navButton' onClick={() => loadAboutMe()}>About Me</h4>
            <h4 classList='navButton' onClick={() => loadPortfolio()}>Portfolio</h4>
            <h4 classList='navButton' onClick={() => loadContact()}>Contact</h4>
            <h4 classList='navButton' onClick={() => loadResume()}>Resume</h4>
        </nav>
    );
}

export default Navigation;