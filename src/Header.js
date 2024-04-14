import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Images } from './Images';

function Header() {
    return (
        <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100px', border: '1px solid #545454' }}>
            <Grid style={{ paddingLeft: '120px' }}><img src={Images.HEADER_TREE} alt='Header tree' /></Grid>
            <Grid style={{ paddingLeft: '285px', display: 'flex', flexDirection: 'row', columnGap: '10px' }}>
                <Typography style={{ fontFamily: 'Century Gothic', fontSize: '24px', fontWeight: 300, lineHeight: '28.8px', letterSpacing: '0em', textAlign: 'center', color: '#545454' }}>Sustainable AI Models for Carbon Footprint Forecasting</Typography>
            </Grid>
        </Grid>
    );
}

export default Header;