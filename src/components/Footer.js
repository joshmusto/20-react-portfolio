import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

function Footer() {
    return (
        <section>
            <a href='https://github.com/joshmusto'><img src={githubLogo} alt='alt text' className='logoHyperlink'/></a>
            <a href='https://www.linkedin.com/in/josh-musto-a10186206/'><img src={linkedinLogo} alt='alt text' className='logoHyperlink'/></a>
        </section>
    );
}

export default Footer;