import React, { useState } from 'react';
import { Grid, Typography, Snackbar, Dialog, DialogTitle, Button } from '@material-ui/core';
import { Images } from './Images';
import ButtonComponent from './Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';

const homeStyles = makeStyles((theme) => ({
  selectRoot: {
    display: 'flex',
          alignItems: 'center',
          width: '330px',
          height: '47px',
          borderRadius: '20px',
          border: '1px solid #545454',
          background: '#FFFFFF',
          cursor: 'pointer', fontFamily: 'Century Gothic', color: '#545454', fontSize: '16px', fontWeight: '400', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', paddingLeft: '19px',
  },
  root: {
    textAlign: 'center',
    fontFamily: 'Century Gothic',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0em',
    padding: '8px 0px 8px',
    display: 'flex',
    alignItems: 'center',
    width: '330px',
    height: '32px',
    borderRadius: '20px',
    border: '1px solid #545454',
    background: '#FFFFFF',
    marginTop: '14px',
    alignContent: 'center',
  },
  textField: {
    border: 'none',
    boxShadow: 'none',
    borderRadius: 0,
    textAlign: 'center',
    fontFamily: 'Century Gothic',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0em',
    padding: '10px 0px 22px',
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    background: '#FFFFFF',
    marginTop: '14px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginLeft: '15px',
    color: 'rgb(84, 84, 84)'
  },
  outerContainer: {
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
    alignItems: 'center',
  },
  dialogTitleRoot: {
    padding: 0,
  },
  textStyle: {
    fontFamily: 'Century Gothic', color: 'white', fontSize: '16px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', height: '19px' 
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
  },
  yesButton: {
    fontFamily: 'Century Gothic', color: 'white', fontSize: '16px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', height: '19px' 
  },
}));

const searchStyles = makeStyles((theme) => ({
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
  selectRoot: {
    display: 'flex',
    flexDirection: 'column',
          alignItems: 'center',
          width: 'auto',
          height: '60px',
          borderRadius: '20px',
          border: '1px solid #545454',
          background: '#79BD22',
          cursor: 'pointer', fontFamily: 'Century Gothic', color: 'white', fontSize: '16px', fontWeight: '600', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', paddingLeft: '19px', paddingRight: '19px', paddingTop: '19px'
  },
}));

const HardwareData = {
  "A100 PCle 40/80GB": 172,
  "A100 SXM4 80GB": 269,
  "AGX Xavier": 25,
  "AMD EPYC 7763": 196,
  "AMD RX480": 98,
  "GTX 1080": 120,
  "GTX 1080 Ti": 170,
  "GTX 750": 170,
  "GTX TITAN X": 170,
  "Intel Xeon E5-2630v4": 60,
  "Intel Xeon E5-2699": 98,
  "Intel Xeon Gold 5220": 88,
  "Intel Xeon Gold 6148": 98,
  "Quardo K6000": 160,
  "Quardo P6000": 170,
  "RTX 2080 Ti": 170,
  "RTX 3080 TI": 250,
  "RTX 3090": 250,
  "RTX 8000": 180,
  "RTX A4000": 98,
  "RTX A5000": 160,
  "RTX A6000": 210,
  "T4": 50,
  "TITAN X Pascal": 170,
  "TPUv3 Chip": 190,
  "Tesla K40c": 160,
  "Tesla K80": 210,
  "Tesla M40 24GB": 170,
  "Tesla P100": 170,
  "Tesla P40": 170,
  "Tesla V100-PCIE-16GB": 210,
  "Tesla V100-SXM2-16GB": 170,
  "Tesla V100-PCIE-32GB": 210,
  "Titan RTX": 200,
  "Titan V": 170,
  "Titan Xp": 170,
};

const CarbonIntensity = 820;
function calculateCarbonEmissions(powerConsumption, timeHours) {
  const powerConsumptionKw = powerConsumption / 1000;
  const energyConsumptionKwh = powerConsumptionKw * timeHours;
  const carbonEmissionsG = energyConsumptionKwh * CarbonIntensity;
  return (carbonEmissionsG / 1000).toFixed(2);
}

function HomeComponent() {
  const [selectedHardware, setSelectedHardware] = useState(null);
  const [timeHours, setTimeHours] = useState(null);
  const [emissions, setEmissions] = useState(null);
  const [datasetLoaded, setDatasetLoaded] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarMessage2, setSnackbarMessage2] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const homeClasses = homeStyles();
  const searchClasses = searchStyles();

  const handleSelectChange = (event) => {
    setSelectedHardware(event.target.value);
  };

  const handlePopUpClose = () => {
    setOpen(false);
  }

  const handleTimeChange = (event) => {
    setTimeHours(parseInt(event.target.value) || 0);
  };

  const handleSearch = () => {
    setLoading(true);
    if (selectedHardware && timeHours && datasetLoaded) {
      let Model = 'BI-LSTM';
      let calculatedEmissions = calculateCarbonEmissions(HardwareData[selectedHardware], timeHours);
      axios.get('http://localhost:3000/api/executeFile', {
        params: {
          emissions: calculatedEmissions
        }
      }).then(response => {
        console.log("####fast", response.data.Emissions)
        calculatedEmissions = response.data.Emissions;
        setEmissions(response.data.Emissions);
        setSnackbarMessage(`Best Sustainable Model: ${Model}`);
        setSnackbarMessage2(`Carbon emissions: ${response.data.Emissions.toFixed(4)} kilograms of CO2`)
        // setSnackbarOpen(true);
        setOpen(true);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        console.log("something went wrong", error)
      })
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '873px', width: '2000px', border: '2px solid #545454' }}>
        <img src={Images.RIGHT_LEAVES} alt='Right leaves' width="434px" height="870px" />
      </Grid>
      <Grid item style={{ height: '110px', paddingTop: '340px', paddingLeft: '230px', alignItems: 'center', display: 'flex', flexDirection: 'column', position: 'absolute' }}>
        <Typography style={{ fontFamily: 'Century Gothic', fontSize: '92px', fontWeight: 700, lineHeight: '110px', letterSpacing: '0.05em', textAlign: 'left', color: '#545454' }}>Carbon</Typography>
        <Typography style={{ fontFamily: 'Century Gothic', fontSize: '24px', fontWeight: 400, lineHeight: '28.8px', letterSpacing: '0em', textAlign: 'left', color: '#545454' }}>efficient AI models</Typography>
      </Grid>
      <Grid item style={{ height: '528.09px', paddingTop: '162px', paddingLeft: '840px', alignItems: 'center', display: 'flex', flexDirection: 'column', position: 'absolute' }}>
        <img src={Images.AI_BRAIN} alt='AI brain' />
      </Grid>
      <Grid item style={{ position: 'absolute', top: '477px', left: '670px', alignContent: 'center', alignItems: 'center' }}>
        <div>
          <select onChange={handleSelectChange} className={homeClasses.selectRoot}>
            <option value="">Select Hardware</option>
            {Object.keys(HardwareData).map((hardwareName) => (
              <option key={hardwareName} value={hardwareName}>
                {hardwareName}
              </option>
            ))}
          </select>
        </div>
        <div className={homeClasses.root}>
          <InputBase
            placeholder="Time in Hours"
            className={homeClasses.textField}
            onChange={handleTimeChange}
            inputProps={{ maxLength: 10 }}
          />
        </div>
      </Grid>
      <Grid item>
        <ButtonComponent datasetLoaded={datasetLoaded} setDatasetLoaded={setDatasetLoaded} />
      </Grid>
      <Grid item onClick={handleSearch} >
        <div style={{ position: 'absolute', top: '538px', left: '1030px', alignContent: 'center', alignItems: 'center' }}>
          <div className={searchClasses.select}>
            <div style={{ fontFamily: 'Century Gothic', color: 'white', fontSize: '16px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', height: '19px' }}>Compute</div>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={snackbarOpen}
            autoHideDuration={10000}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
          />
        </div>
      </Grid>
      <Dialog open={open}>
      <Grid className={homeStyles.outerContainer} style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 4px 0px #00000040', background: '#545454' }}>
        <img src={Images.POP_UP} alt="Pop up" style={{ width: '500px', height: '500px' }} />
        <DialogTitle className={homeStyles.dialogTitleRoot}>
        <Typography style={{ fontFamily: 'Century Gothic', fontSize: '20px', fontWeight: 300, lineHeight: '28.8px', letterSpacing: '0em', textAlign: 'center', color: 'white' }}>{snackbarMessage}</Typography>
        <Typography style={{ fontFamily: 'Century Gothic', fontSize: '20px', fontWeight: 300, lineHeight: '28.8px', letterSpacing: '0em', textAlign: 'center', color: 'white' }}>{snackbarMessage2}</Typography>
        </DialogTitle>
        <Grid className={homeStyles.buttonContainer}>
      <div className={searchClasses.select} style={{ marginBottom: '45px', marginTop: '25px' }}>
            <div onClick={handlePopUpClose} style={{ fontFamily: 'Century Gothic' ,color: 'white', fontSize: '16px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', height: '19px' }}>Back To Search</div>
          </div>
        </Grid>
      </Grid>
    </Dialog>
      <Grid item>
      {/* { emissions && (
        <div style={{ position: 'absolute', top: '600px', left: '860px', alignContent: 'center', alignItems: 'center' }}>
        <div>
          <Typography className={searchClasses.selectRoot}>
              Best Model: BI-LSTM
              <div>
              Carbon Emissions: {emissions} kilograms of CO2
              </div>
          </Typography>
        </div>
    </div>
      )} */}
      </Grid>
    </>
  )
}

export default HomeComponent;