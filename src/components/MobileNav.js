import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    }
}));

export function MobileNav({ handleClick }) {
    const classes = useStyles();

    return (
        <React.Fragment >
        <AppBar position="fixed" style={{ background: 'black', color: 'lightcyan' }} className={classes.appBar}>
            <Toolbar>
                <IconButton href='#' edge="start" color="inherit">
                    <HomeOutlinedIcon />
                </IconButton>

                <div className={classes.grow} />

                <IconButton onClick={ ()=>handleClick([ true, false, false, false ]) } edge="start" color="inherit">
                    <FaceOutlinedIcon />
                </IconButton>

                <div className={classes.grow} />

                <IconButton onClick={ ()=>handleClick([ false, true, false, false ]) } edge="start" color="inherit">
                    <DevicesOutlinedIcon />
                </IconButton>

                <div className={classes.grow} />

                <IconButton onClick={ ()=>handleClick([ false, false, true, false ]) } color="inherit">
                    <WorkOutlineIcon />
                </IconButton>

                <div className={classes.grow} />

                <IconButton onClick={ ()=>handleClick([ false, false, false, true ]) } edge="end" color="inherit">
                    <AlternateEmailOutlinedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    );
}

MobileNav.propTypes = {
    handleClick: PropTypes.func.isRequired
}