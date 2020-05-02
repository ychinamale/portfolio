import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

import { MobileNav } from './components/MobileNav';
import { DesktopNav } from './components/DesktopNav';
import { DevCard } from './components/DevCard';
import { MainContent } from './components/MainContent';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=> ({
    container: {
        display: 'flex',
        maxWidth: '1000px',
        background: 'grey'
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
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    rightPane__mobile: {
        padding: '30px 15px 100px 15px'
    },
    rightPane__desktop: {
        padding: '40px 20px 50px 15px'
    },
    leftPane__mobile: {
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftPane__desktop: {
        minWidth: '440px',
        maxWidth: '440px',
        padding: '0 10px'
    },
    isSticky: {
        position: 'fixed',
        minWidth: '420px',
        maxWidth: '420px',
        top: '40px',
        left: '20px'
    },
    isNotSticky: {
        maxWidth: '620px'
    }

}));


function App () {

    const classes = useStyles();

    const desktopOnly = useMediaQuery('(min-width:1000px)');
    const mobileOnly = useMediaQuery('(max-width:999px)');

    return (
        <React.Fragment>
            <div className={ `${classes.container} ${ desktopOnly ? classes.container__desktop : classes.container__mobile }` }>
                <div className={ `${classes.leftPane} ${ desktopOnly ? classes.leftPane__desktop : classes.leftPane__mobile }` }>
                    <div className={ `${classes.leftPane__frame} ${ desktopOnly ? classes.isSticky : classes.isNotSticky }` } >
                        { mobileOnly && <MobileNav /> }
                        { desktopOnly && <DesktopNav /> }
                        < DevCard />
                    </div>
                </div>
                <div className={ `${classes.rightPane} ${ desktopOnly ? classes.rightPane__desktop : classes.rightPane__mobile }` } >
                    <MainContent />
                </div>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render( <App />, document.querySelector('#app') );
