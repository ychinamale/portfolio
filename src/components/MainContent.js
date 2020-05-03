import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const useStyles = makeStyles(()=>({
    content: {
        '& article': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            position: 'relative',
            top: '-50px'
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
                    

                    <p>######## THE NEXT STEP IS FOR YOU TO MOVE ALL CSS FROM index.css into useStyles() #######. What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                        
                    Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><br/>
                    </p>
                    </ScrollIntoViewIfNeeded> 
                </article>
            

            
                <article>
                    <ScrollIntoViewIfNeeded active={boolSkills}>
                    <h2 id='skills'>My Skills </h2><br/>
                    

                    <p>What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                        
                    Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><br/>
                    </p>
                    </ScrollIntoViewIfNeeded>
                </article>
            

            
            <article>
                <ScrollIntoViewIfNeeded active={boolWork}>
                <h2 id='work'>What I have worked on </h2><br/>

                <p>What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                    
                Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><br/>
                </p>
                </ScrollIntoViewIfNeeded>
            </article>
            


            
                <article>
                    <ScrollIntoViewIfNeeded active={boolContacts}>
                    <h2 id='contacts'>How to reach me </h2><br/>
                    

                    <p>What is ipsum lorem? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
                        
                    Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><br/>
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