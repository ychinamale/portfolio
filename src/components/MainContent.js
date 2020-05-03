import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const useStyles = makeStyles(()=>({
    content: {
        display: 'flex',
        flexDirection: 'column',
        '& article': {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            border: 'solid 1px red'
        }
    },

}));

export function MainContent ({ boolAbout, boolSkills, boolWork, boolContacts }) {

    const classes = useStyles();

    return (
        <div className={classes.content} >
            
                <article>
                    <ScrollIntoViewIfNeeded active={boolAbout}>
                    <h2 id='about'>About Me</h2><br/>
                    
                    <section>Hi. I am Yamikani of the house of Chinamale, first of his name.<br/>
                    An alumnus of Wits University, studier of Computer Science, 2017 Scholar of the Mandela Rhodes Foundation.<br/> Husband to queen V, father to young master Kai, and a child of Elohim.<br/><br/>

                    Ehem. What I meant to say is that I am an IT professional.<br/>
                    I enjoy writing programs in JavaScript and Python.<br/> I am enamoured with JS frameworks at the moment.<br/><br/>
                    Scroll to know more.<br/>
                    </section>
                    </ScrollIntoViewIfNeeded> 
                </article>
            

            
                <article>
                    <ScrollIntoViewIfNeeded active={boolSkills}>
                    <h2 id='skills'>My Skills </h2><br/>
                    
                    <section>
                        Scripting
                        <ul>
                            <li>Bash</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>NoSQL</li>
                            <li>SQL</li>
                        </ul>
                        <br/><br/>
                        
                        Frameworks &amp; Tools
                        <ul>
                            <li>Figma</li>
                            <li>Git</li>
                            <li>GraphQL</li>
                            <li>Jira</li>
                            <li>NodeJs</li>
                            <li>ReactJs</li>
                        </ul>

                    </section>
                    </ScrollIntoViewIfNeeded>
                </article>
            

            
            <article>
                <ScrollIntoViewIfNeeded active={boolWork}>
                <h2 id='work'>What I have worked on </h2><br/>

                <p>What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                </p>
                </ScrollIntoViewIfNeeded>
            </article>
            


            
            <article>
                <ScrollIntoViewIfNeeded active={boolContacts}>
                <h2 id='contacts'>How to reach me </h2><br/>
                

                <p>What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                </p>
                </ScrollIntoViewIfNeeded>
            </article>
            
        </div>
    );
}

MainContent.propTypes = {
    boolAbout: PropTypes.bool.isRequired,
    boolSkills: PropTypes.bool.isRequired,
    boolWork: PropTypes.bool.isRequired,
    boolContacts: PropTypes.bool.isRequired
};