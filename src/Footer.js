import React from 'react';
import { Box } from '@material-ui/core';

function Footer() {
    return(
        <Box container style={{ height: '70px', marginTop: '200px', top: '900px', paddingTop: '52px', background: 'rgb(85 141 75)',color: 'rgb(219, 219, 219)', fontFamily: 'Century Gothic',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: '0.075em' }}>Project by: <span style={{ fontWeight: 'bold' }}>Rubhini, Shivaramakrishnan, Dhyanesh</span></Box>
    )
}

export default Footer;