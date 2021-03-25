import React from 'react';
// import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import './home.scss'

export const Home = () => {
    return (
        <div>
            <section class="home">
                <span className="top-name ">
                    Khasa's protfolio
                </span>
                
                <div className="top-title">
                    Bring more leads for your <strong>business fast</strong>
                </div>
                
                <div className="top-background"/>
                <img className="top-profile" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWQ8_ebd0l4f3MRBXGzT5TrVfPwCNvmDq2w&usqp=CAU"}/>
                <div className="top-nav justify-between flex-row ph-7 mt-6">
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>

            </section>
        </div>
    )
}