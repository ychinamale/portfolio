import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

import { SkillCharts } from './SkillCharts';

const useStyles = makeStyles(()=>({
    content: {
        display: 'flex',
        flexDirection: 'column',
        '& article': {
            minHeight: '100vh',
            minWidth: '100%',
            display: 'flex',
            alignItems: 'center'
        }
    },
    skillFrame : {
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    chartContainer: {
        display: 'flex',
        flexWrap: 'wrap'
        //background: 'lightpink'
    }
}));


const chartData = [
    { title: "JavaScript - 7", thickness: 20, color: "#660066", skillLevel: 70 },
    { title: "Python - 7", thickness: 20, color: "#660066", skillLevel: 70 },
    { title: "Bash - 6", thickness: 20, color: "#660066", skillLevel: 60 },
    { title: "CSS - 5", thickness: 20, color: "#be29ec", skillLevel: 50 },
    { title: "SQL - 5", thickness: 20, color: "#be29ec", skillLevel: 50 },
];

const toolsData = [
    { title: "ReactJs - 6", thickness: 20, color: "#660066", skillLevel: 60 },
    { title: "NodeJs - 5", thickness: 20, color: "#be29ec", skillLevel: 50 },
    { title: "GraphQL - 4", thickness: 20, color: "#d896ff", skillLevel: 40 },
    { title: "Django - 3", thickness: 20, color: "#d896ff", skillLevel: 30 },
    { title: "Docker - 3", thickness: 20, color: "#d896ff", skillLevel: 30 },
    
];

const chartOptions = {
    opacity: 0.7,  minWidth: '240px', maxWidth: '420px', borderColor: '#FFF'
};

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
                        <div className={classes.skillFrame}>
                            <div>
                                <h2 id='skills'>Proficiency Chart</h2><br/>
                            </div>
                            <div className={classes.chartContainer}>
                                <ScrollIntoViewIfNeeded active={boolSkills}>
                                <SkillCharts
                                    data={chartData}
                                    options={chartOptions}
                                />
                                </ScrollIntoViewIfNeeded>
                                <SkillCharts
                                    data={toolsData}
                                    options={chartOptions}
                                />
                            </div>
                        </div>
                </article>
            

            
            <article>
                <ScrollIntoViewIfNeeded active={boolWork}>
                <h2 id='work'>Projects I have worked on </h2><br/>

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