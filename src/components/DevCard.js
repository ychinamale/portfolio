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