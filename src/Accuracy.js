import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function Accuracy({ metric, value }) {
    const styles = {
        boxStyle: {
            position: 'relative',
            width: '190px',
            height: '90px',
            padding: '8px 16px',
            borderRadius: '40px',
            gap: '8px',
            color: 'white',
            background: 'white',
            boxShadow: '0px 4px 4px 0px #00000040',
            display: 'flex',
            flexDirection: 'row',
        },
        textStyle: {
            position: 'relative',
            width: '77px',
            height: '19px',
            paddingTop: metric === 'Carbon Emissions (in grams)' ? '16px' : '37px',
            paddingLeft: '15px',
            fontFamily: 'Century Gothic',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '19px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'black',
        },
        innerEllipseStyle: {
            position: 'absolute',
            width: '51px',
            height: '51px',
            top: '28px',
            left: '134px',
            borderRadius: '50%',
            backgroundColor: 'white',
            zIndex: '1',
        },
        outerEllipseStyle: {
            position: 'absolute',
            width: '73px',
            height: '73px',
            top: '17px',
            left: '123px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, rgba(255, 232, 23, 0.6), rgba(121, 189, 34, 0.7), rgba(57, 119, 46, 0.7))',
        },
        levelStyle: {
            position: 'absolute',
            width: '27px',
            height: '29px',
            top: '40px',
            left: '138px',
            fontFamily: 'Century Gothic',
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: '28.8px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#39772E',
            zIndex: 2,
        },
    };

    return (
        <Grid container style={{ paddingLeft: '30px', paddingTop: '30px' }}>
            {
                metric !== 'Others' ? (
                    <div style={styles.boxStyle}>
                <Typography style={styles.textStyle}>{metric}</Typography>
                <div>
                    <div style={styles.outerEllipseStyle}></div>
                    <div style={styles.innerEllipseStyle}></div>
                </div>
                <Typography style={styles.levelStyle}>{value}</Typography>
            </div>
                ) : <></>
            }
            
        </Grid>
    );
}

export default Accuracy;
