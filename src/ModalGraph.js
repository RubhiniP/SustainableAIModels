import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Images } from './Images';

function ModalGraph() {
    const styles = {
        container: {
            width: '530px',
            height: '250px',
            borderRadius: '40px',
            background: 'linear-gradient(to right, rgba(255, 232, 23, 0.6), rgba(121, 189, 34, 0.7), rgba(57, 119, 46, 0.7))',
            display: 'flex',
            justifyContent: 'center',
        },
        textContainer: {
            width: '285px',
            height: '48px',
            paddingTop: '49px',
        },
        text: {
            fontFamily: 'Century Gothic, sans-serif',
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'white',
            paddingLeft: '15px',
        },
        boxStyle: {
            position: 'absolute',
            width: '250px',
            height: '80px',
            padding: '8px 16px',
            borderRadius: '20px',
            gap: '8px',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            alignItems: 'center',
            display: 'flex',
        },
    };

    return (
        <Grid container alignItems="center" style={{ paddingLeft: '100px', paddingTop: '100px' }}>
            <div style={styles.container}>
                <div style={{ paddingTop: '49px' }}>
                    <img src={Images.CARBON_EMISSIONS_MACHINE} alt='Carbon Emissions Machine' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ ...styles.textContainer, ...styles.text }}>BI - LSTM</div>
                    <div style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                        <div style={styles.boxStyle}>
                            <Typography style={{ fontFamily: 'Century Gothic', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0em', textAlign: 'left' }}>Bidirectional LSTM is chosen for carbon footprint forecasting due to its exceptional accuracy in predicting time-series data, crucial for modeling and forecasting emissions trends.</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    );
}

export default ModalGraph;
