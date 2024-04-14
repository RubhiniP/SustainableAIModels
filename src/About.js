import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Images } from './Images';

function About() {
    return(
        <Grid container style={{ display: 'flex', flexDirection: 'row' }}>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
           <Grid item style={{ width: '900px', height: '110px', paddingTop: '184px', paddingLeft: '93px' }}>
                <Typography style={{ color: '#545454', fontFamily: 'Century Gothic', fontSize: '64px', fontWeight: '700', lineHeight: '110px', letterSpacing: '0em', textAlign: 'left' }}>
                    Come, know our product!
                </Typography>
            </Grid>
            <Grid item style={{ paddingTop: '155px', paddingLeft: '100px', width: '900px' }}>
                <Typography style={{ color: '#545454', fontFamily: 'Century Gothic', fontSize: '16px', fontWeight: '400', lineHeight: '19.2px', letterSpacing: '0em', textAlign: 'left', justifyContent: 'justify' }}>
                Our project introduces a unique framework aimed at tackling the pressing issues of AI's energy consumption and carbon emissions. By prioritizing both model performance and carbon footprints, our approach enables AI practitioners to make eco-conscious decisions throughout the AI lifecycle. This comprehensive framework comprises essential modules such as Carbon Footprint Forecasting, a Selection Framework, and Dashboard Development.
                </Typography>

                <Typography style={{ color: '#545454', fontFamily: 'Century Gothic', fontSize: '16px', fontWeight: '400', lineHeight: '19.2px', letterSpacing: '0em', textAlign: 'left', marginTop: '20px' }}>
                Among the models assessed, the BI-LSTM architecture emerged as the most accurate, boasting minimal MSE (0.0373), RMSE (0.193), and MAPE (0.97%). The urgency of our endeavor is underscored by alarming statistics: 520 lbs of CO2 emitted during Generative Pre-trained Transformer (GPT-3) development, Google's ambitious 2030 emissions goal, and a staggering 626,000 lbs of CO2 generated from training a single AI model. By aligning AI progress with global climate efforts, our framework represents a significant stride towards fostering a sustainable digital landscape.
                </Typography>

                <Typography style={{ color: '#545454', fontFamily: 'Century Gothic', fontSize: '16px', fontWeight: '400', lineHeight: '19.2px', letterSpacing: '0em', textAlign: 'left', marginTop: '20px' }}>
                <span style={{ color: 'red', fontWeight: 'bold' }}>Be aware, wake up! Our Earth is sick. </span>Let’s work towards cooling our planet and embrace environmentally conscious choices in every possible way! 
                </Typography>
            </Grid>
           </div>
           <Grid item style={{ paddingTop: '184px', paddingLeft: '200px' }}>
           <img src={Images.TREE_ABOUT} alt='Tree about' />
           </Grid>
        </Grid>
    )
}

export default About;