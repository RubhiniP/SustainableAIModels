import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';

const styles = {
    select: {
        display: 'flex',
        alignItems: 'center',
        width: '330px',
        height: '47px',
        borderRadius: '20px',
        border: '1px solid #545454',
        background: '#79BD22',
        cursor: 'pointer',
        justifyContent: 'center',
    },
};

function Search({ emissions }) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const bestModelPredictor = () => {
        if (emissions) {
            setSnackbarMessage(`Carbon emissions: ${emissions} kilograms of CO2`);
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div style={{ position: 'absolute', top: '538px', left: '1030px', alignContent: 'center', alignItems: 'center' }}>
            <div onClick={bestModelPredictor} style={styles.select}>
                <div style={{ fontFamily: 'Century Gothic', color: 'white', fontSize: '16px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', height: '19px' }}>Search</div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </div>
    );
}

export default Search;
