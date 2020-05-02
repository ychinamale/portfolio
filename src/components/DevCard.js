import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';


const useStyles = makeStyles(()=> ({
    devcard__frame: {
        display: 'flex',
        flexDirection: 'column'
    },
    image__frame: {
        padding: '30px'
    },
    profile__image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '50%'
    },
    profile__frame: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 0 20px 0'
    },
    profile__name: {},
    profile__title: {},
    profile__details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}));


export function DevCard () {

    const classes = useStyles();

    return (

        <div className={classes.devcard__frame} >
            <div className={classes.image__frame} >
                <img className={classes.profile__image} src="./images/profile.jpg" alt="Yamikani Chinamale"/>
            </div>
            <div className={classes.profile__frame} >
                <div className={classes.profile__name}>Yamikani Chinamale</div>
                <div className={classes.profile__title}>Programmer</div>
                <div className={classes.profile__details}>
                    <LaptopMacOutlinedIcon />
                    <pre> NodeJs | ReactJs | Unix </pre>
                    <LaptopMacOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

/*
 // OLD STYLING
     profile : {
        fontFamily: 'Nunito',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        maxWidth:'100%',
        padding: '12px 0 20px 0',
        margin: '0 0px 10px 0'
    },
    frame : {
        padding: "10px 20px",
        maxWidth: "350px"
    },
    frame__image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: '50%',
        objectFit: 'cover'
    },
    profile__name: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    profile__title: {
        marginBottom: '10px',
        fontSize: '1.2em'
    },
    profile__details: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1em'
    },
*/