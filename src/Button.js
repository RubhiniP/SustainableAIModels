import React, { useState } from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { Images } from './Images';

const styles = {
    select: {
        display: 'flex',
        alignItems: 'center',
        width: '330px',
        height: '47px',
        borderRadius: '20px',
        border: '1px solid #545454',
        background: '#FFFFFF',
        cursor: 'pointer',
    },
    uploaded: {
        background: '#b9b9b9',
    },
};

function ButtonComponent({ datasetLoaded, setDatasetLoaded }) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('emission')) {
            setDatasetLoaded(true);
            setSnackbarOpen(true);
        } else {
            setDatasetLoaded(false);
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div style={{ position: 'absolute', top: '477px', left: '1030px', alignContent: 'center', alignItems: 'center' }}>
            <div style={{ ...styles.select, ...(datasetLoaded && styles.uploaded) }}>
                <label htmlFor="file-upload" style={{ fontFamily: 'Century Gothic', color: '#545454', fontSize: '16px', fontWeight: '400', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', width: '200px', height: '19px', paddingLeft: '19px', cursor: 'pointer' }}>{datasetLoaded ? 'Dataset loaded!' : 'Upload your dataset'}<img src={Images.UPLOAD_YOUR_DATASET} alt='Upload your dataset' style={{ paddingLeft: datasetLoaded ? '141px' : '110px', position: 'absolute' }} />
                <input id="file-upload" type="file" accept=".csv" onChange={handleFileUpload} style={{ display: 'none' }} />
                </label>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
            >
                {datasetLoaded ? (
                    <SnackbarContent message="File uploaded successfully!" />
                ) : (
                    <SnackbarContent message="File cannot be accepted." />
                )}
            </Snackbar>
        </div>
    );
};

export default ButtonComponent;
