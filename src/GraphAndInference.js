import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Images } from './Images';

function GraphAndInference() {
    const styles = {
        boxStyle: {
            position: 'relative',
            width: '830px',
            height: '430px',
            padding: '8px 16px',
            borderRadius: '40px',
            gap: '8px',
            color: 'white',
            background: 'white',
            boxShadow: '0px 4px 4px 0px #00000040',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        inferenceStyle: {
            position: 'relative',
            width: '340px',
            height: '430px',
            padding: '8px 16px',
            borderRadius: '40px',
            gap: '8px',
            color: 'white',
            background: 'white',
            boxShadow: '0px 4px 4px 0px #00000040',
            display: 'flex',
            flexDirection: 'column',
        },
        textStyle: {
            position: 'relative',
            width: '77px',
            height: '19px',
            paddingTop: '37px',
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
            left: '146px',
            fontFamily: 'Century Gothic',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '28.8px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#39772E',
            zIndex: 2,
        },
        inferenceHeading: {
            fontFamily: 'Century Gothic',
            fontSize: '38px',
            fontWeight: 400,
            lineHeight: '46px',
            letterSpacing: '0',
            textAlign: 'left',
            width: '199px',
            height: '46px',
            paddingTop: '38px',
            paddingLeft: '71px',
            color: '#545454'
        },
        inferenceText: {
            fontFamily: 'Century Gothic',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '0',
            textAlign: 'left',
            width: '290px',
            height: '180px',
            paddingTop: '30px',
            paddingLeft: '25px',
            color: '#545454',
        }
    };

    return (
        <Grid container style={{ paddingLeft: '100px', paddingTop: '30px' }}>
            <div style={styles.boxStyle}>
                <img src={Images.GRAPH} alt='Graph' />
            </div>
            <div style={{ paddingLeft: '45px' }}>
                <div style={styles.inferenceStyle}>
                    <Typography style={styles.inferenceHeading}>INFERENCE</Typography>
                    <Typography style={styles.inferenceText}>The graph signifies the accuracy of Bidirectional-Long Short Term Memory Model. It predicts the future carbon emissions of a country between 2025 and 2030. By observing the carbon emissions trend, we can assess whether emissions levels are increasing, decreasing, or remaining constant, enabling governments to enact more effective environmental regulations. Additionally, it allows us to evaluate the effectiveness of new technologies or regulations in reducing emissions. A decrease in pollution indicates progress in environmental conservation efforts, while an increase signals the need for adjustments to safeguard the environment.</Typography>
                </div>
            </div>
        </Grid>
    );
}

export default GraphAndInference;
