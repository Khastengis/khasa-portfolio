import React from 'react';
// import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import './skills.scss'
import backend from './../../images/back-end.svg'
import frontend from './../../images/front-end.svg'

export const Skills = () => {
    return (
        <div className="mt-7 skills-container">
            <span className="font-ubuntu bold fs-31 justify-center flex">
                    What Khasa can do?
            </span>
            <section class="skills mt-6 ml-6 mr-6">    
                <div className="column1 flex-col ml-1 mr-3">
                    <img className="justify-center flex h-7 w-7  self-center" src={frontend}/>
                    <p className="font-ubuntu justify-center flex bold fs-24">Front-end Developer</p>    
                    <p className="font-ubuntu justify-center flex lh-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="font-ubuntu justify-center flex c-purple">Langueges I speak:</p>
                    <p className="font-ubuntu justify-center flex lh-28">HTML, CSS, Sass, ReactJS, Materialize, CSS-Grid</p>
                </div>
                <div className="column2 ml-3 mr-1 flex-col justify-center items-center text-center">
                    <img className="justify-center flex h-7 w-7 self-center" src={backend}/>
                    <p className="justify-center flex bold font-ubuntu fs-24">Back-end Developer</p>
                    <p className="font-ubuntu justify-center flex lh-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="font-ubuntu justify-center flex c-purple">Langueges I speak:</p>
                    <p className="font-ubuntu justify-center flex lh-28">JavaScript, C++, C, Python, NodeJS, Firebase, NPM</p>
                </div>
            </section>
        </div>
    )
}