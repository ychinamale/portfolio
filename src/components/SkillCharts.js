import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import PropTypes from 'prop-types';


function getSkillBar (barData, opacity) {

    const { thickness, color } = barData;

    return withStyles({
        root: {
            height: thickness,
            backgroundColor: lighten(color, opacity),
        },
        bar: {
            borderRadius: 0,
            backgroundColor: color,
        },
    })(LinearProgress);
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "5px 5px 5px 20px"
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


export function SkillCharts ({ data, options }) {

    const { opacity, minWidth, maxWidth, borderColor } = options;

    const classes = useStyles();

    return (
        <div className={classes.root} style={{ minWidth: minWidth}}>
            { data.map((barData)=>{
                const ThisBar = getSkillBar(barData, opacity);

                return (
                    <div key={barData.title} className={classes.root}>
                        {barData.title}
                        <ThisBar
                            className={classes.margin}
                            variant="determinate"
                            value={barData.skillLevel}
                        />
                    </div>
                )
            })}

            
        </div>
    );
}

SkillCharts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string,
        thickness: PropTypes.number,
        color: PropTypes.string,
        skillLevel: PropTypes.number
    })).isRequired,
    options: PropTypes.shape({
        opacity: PropTypes.number,
        minWidth: PropTypes.string,
        maxWidth: PropTypes.string,
        borderColor: PropTypes.string
    }).isRequired
};



/*

const BorderLinearProgress = withStyles({
    root: {
        height: 20,
        backgroundColor: lighten('#ff6c5c', 0.6),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '400px',
        border: 'solid 1px black'
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

*/