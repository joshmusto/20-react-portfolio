import React, { useState } from 'react';

function Project() {
    const projects = [
        { title: 'project 1', link: 'aaa', repo: 'bbb' },
        { title: 'project 2', link: 'aaa', repo: 'bbb' },
        { title: 'project 3', link: 'aaa', repo: 'bbb' },
        { title: 'project 4', link: 'aaa', repo: 'bbb' },
        { title: 'project 5', link: 'aaa', repo: 'bbb' },
        { title: 'project 6', link: 'aaa', repo: 'bbb' },
    ];

    return (
        <section>
            {projects.map(project => (
                <section>
                    <p>{project.title}</p>
                    <p>{project.link}</p>
                    <p>{project.repo}</p>
                </section>
            ))}
        </section>
    )
}

export default Project;