import React from 'react';
import screenshot1 from '../assets/screenshotNoCrudeFood.png';
import screenshot2 from '../assets/screenshotWeatherDashboard.PNG';
import screenshot3 from '../assets/screenshotDailyPlanner.png';
import screenshot4 from '../assets/screenshotPWATextEditor.PNG';
import screenshot5 from '../assets/screenshotSocialMediaAPI.png';
import screenshot6 from '../assets/screenshotCodingQuiz.PNG';
import githubLogo from '../assets/githubLogo.png';

function Project() {
    const projects = [
        { title: 'No Crude Food', image: screenshot1, link: 'https://young-mountain-95021.herokuapp.com/', repo: 'https://github.com/AlexWiederman/No_Crude_Food' },
        { title: 'Weather Dashboard', image: screenshot2, link: 'https://joshmusto.github.io/06-weather-dashboard/', repo: 'https://github.com/joshmusto/06-weather-dashboard' },
        { title: 'Schedule Application', image: screenshot3, link: 'https://joshmusto.github.io/05-daily-planner/', repo: 'https://github.com/joshmusto/05-daily-planner' },
        { title: 'PWA Text Editor', image: screenshot4, link: 'https://aqueous-meadow-77400.herokuapp.com/', repo: 'https://github.com/joshmusto/19-PWA-text-editor' },
        { title: 'Social Media API', image: screenshot5, link: 'https://github.com/joshmusto/18-social-network-api', repo: 'https://github.com/joshmusto/18-social-network-api' },
        { title: 'Coding Quiz', image: screenshot6, link: 'https://joshmusto.github.io/04-code-quiz/', repo: 'https://github.com/joshmusto/04-code-quiz' },
    ];

    return (
        <section>
            {projects.map(project => (
                <section className='sectionPortfolioItem'>
                    <h3>{project.title}</h3>
                    <a href={project.link}><img src={project.image} alt='alt text' className='portfolioImage'/></a>
                    <a href={project.repo}><img src={githubLogo} alt='alt text' className='logoHyperlink'/></a>
                </section>
            ))}
        </section>
    )
}

export default Project;