import React from 'react';
// import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import './home.scss'
import { Skills } from '../skills/skills';

export const Home = () => {
    return (
        <div>
            <section class="home">
                <span className="top-name ph-3 mt-6 font-ubuntu bold ml-6 fs-20">
                    Khasa's protfolio
                </span>
                
                <div className="top-title ml-6 fs-54 ph-6 mr-7 font-ubuntu lh-76">
                    Hello, welcome to my web it is <strong>Khasa's PROTFOLIO</strong>
                    <div className="font-ubuntu lh-30 fs-20 ml-6 mt-5 c-gray pa-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt.
                    </div>
                </div>
                
                <div className="top-background"/>
                <img className="top-profile" src={"https://th.bing.com/th/id/OIP.ZzK9QmxgtHFysccpbohqYAHaHa?pid=ImgDet&rs=1"}/>
                <div className="top-nav justify-between flex-row ph-7 mt-6 font-ubuntu fs-16 ">
                    <a href="#about" className="c-default bye-underline">About</a>
                    <a href="#skills" className="c-default bye-underline">Skills</a>
                    <a href="#projects" className="c-default bye-underline ">Projects</a>
                    <a href="#contact" className="c-default bye-underline">Contact</a>
                </div>

            </section>
            <section>
                <Skills />
            </section>
        </div>
    )
}