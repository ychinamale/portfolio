import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  floatMenu: {
      '& Button' : {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          color: '#363636',
          padding: '7px',
          margin: '0'
      },
      '& :not(:last-child)' : {
        borderRightColor: '#cfcfcf'
      }
  }
}));

export function DesktopNav({ handleClick }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" style={{ background: '#FFF' }} variant="text" aria-label="text primary button group"  className={classes.floatMenu}>
                <Button onClick={ ()=>handleClick([ true, false, false, false ]) }> <FaceOutlinedIcon /> _INTRO</Button>
                <Button onClick={ ()=>handleClick([ false, true, false, false ]) }> <DevicesOutlinedIcon /> _SKILLS</Button>
                <Button onClick={ ()=>handleClick([ false, false, true, false ]) }> <WorkOutlineIcon /> _WORK</Button>
                <Button onClick={ ()=>handleClick([ false, false, false, true ]) }> <AlternateEmailOutlinedIcon /> _CONTACTS</Button>
            </ButtonGroup>
        </div>
    );
}

DesktopNav.propTypes = {
  handleClick: PropTypes.func.isRequired
}