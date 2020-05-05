import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

import { MobileNav } from './components/MobileNav';
import { DesktopNav } from './components/DesktopNav';
import { DevCard } from './components/DevCard';
import { MainContent } from './components/MainContent';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/core/styles';

// hardcoding devCard to be in the middle 
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var topSpace = vh/2 - 292;
////////////////////////////////

const useStyles = makeStyles(()=> ({
    container: {
        display: 'flex'
    },
    container__mobile: {
        flexDirection: 'column'
    },
    container__desktop: {
        flexDirection: 'row'
    },
    rightPane: {},
    leftPane: {},
    leftPane__frame: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        position: 'relative',
        top: '-30px'
    },
    rightPane__mobile: {
        padding: '30px 15px 100px 15px'
    },
    rightPane__desktop: {
        padding: '40px 40px 50px 15px'
    },
    leftPane__mobile: {
        maxWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
    },
    leftPane__desktop: {
        minWidth: '450px',
        maxWidth: '450px',
        padding: '0 30px 0 0'
    },
    isSticky: {
        position: 'fixed',
        minWidth: '420px',
        maxWidth: '420px',
        top: `${topSpace}px`,// top: '120px',
        left: '40px'
    },
    isNotSticky: {
        maxWidth: '620px'
    }

}));


function App () {
    /*
        Teachable point.
        MainContent has child components that change behaviour based on state X
        DesktopNav has buttons that change said state (X)
        MainContent and DesktopNav are sibling components
        Therefore, without the use of context, we would have to:
            - create state X in parent component (App)
            - create a handlerFunction that can change state X
            - pass handlerFunction to DesktopNav so it can affect the state X
            - pass state X as props to MainContent and therefore link DesktopNav and MainContent
    */
    const [isAboutActive, setAboutActive] = useState(false);
    const [isSkillsActive, setSkillsActive] = useState(false);
    const [isWorksActive, setWorksActive] = useState(false);
    const [isContactsActive, setContactsActive] = useState(false);

    useEffect(()=>{
        resetAllStates(); // make buttons re-clickable after scrolling
    }, [isAboutActive, isSkillsActive, isWorksActive, isContactsActive])

    function resetAllStates () {
        setAboutActive(false);
        setSkillsActive(false);
        setWorksActive(false);
        setContactsActive(false);
    }

    function handleButtonClick ([boolAbout, boolSkills, boolWork, boolContacts]) {
        setAboutActive(boolAbout);
        setSkillsActive(boolSkills);
        setWorksActive(boolWork);
        setContactsActive(boolContacts);
    }

    const classes = useStyles();

    const desktopOnly = useMediaQuery('(min-width:1000px)');
    const mobileOnly = useMediaQuery('(max-width:999px)');

    return (
        <React.Fragment>
            <div className={ `${classes.container} ${ desktopOnly ? classes.container__desktop : classes.container__mobile }` }>
                <div className={ `${classes.leftPane} ${ desktopOnly ? classes.leftPane__desktop : classes.leftPane__mobile }` }>
                    <div className={ `${classes.leftPane__frame} ${ desktopOnly ? classes.isSticky : classes.isNotSticky }` } >
                        { mobileOnly && <MobileNav handleClick={ (boolArray)=> handleButtonClick(boolArray) } /> }
                        { desktopOnly && <DesktopNav handleClick={ (boolArray)=> handleButtonClick(boolArray) } /> }
                        < DevCard />
                    </div>
                </div>
                <div className={ `${classes.rightPane} ${ desktopOnly ? classes.rightPane__desktop : classes.rightPane__mobile }` } >
                    <MainContent 
                        boolAbout={isAboutActive}
                        boolSkills={isSkillsActive}
                        boolWork={isWorksActive}
                        boolContacts={isContactsActive}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render( <App />, document.querySelector('#app') );
