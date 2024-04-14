import React from 'react';
import { Grid } from '@material-ui/core';
import HomeComponent from './HomeComponent';
import About from './About';
import ModalGraph from './ModalGraph';
import Accuracy from './Accuracy';
import GraphAndInference from './GraphAndInference';

function Home() {
    // Define values for each metric
    const accuracyValues = {
        MSE: 0.03,
        RMSE: 0.19,
        MAPE: 3.19,
        'Carbon Emissions (in grams)': 0.12,
        MAE: 0.04,
        Others: 8
    };

    const accuracyValues1 = ['MSE', 'RMSE', 'MAPE'];
    const accuracyValues2 = ['Carbon Emissions (in grams)', 'MAE', 'Others'];

    return (
        <Grid container style={{ background: '#F5FAFA' }}>
            <HomeComponent />
            <About />
            <Grid>
                <ModalGraph />
                <Grid style={{ position: 'absolute', top: '1678px', left: '630px' }}>
                    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                        {accuracyValues1.map(metric => (
                            // Pass value corresponding to each metric
                            <Accuracy metric={metric} value={accuracyValues[metric]} />
                        ))}
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                        {accuracyValues2.map(metric => (
                            // Pass value corresponding to each metric
                            <Accuracy metric={metric} value={accuracyValues[metric]} />
                        ))}
                    </Grid>
                </Grid>
                <GraphAndInference />
            </Grid>
        </Grid>
    )
}

export default Home;
