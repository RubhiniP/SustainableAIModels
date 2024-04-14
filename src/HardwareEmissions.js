import React, { useState } from 'react';

let emissions;

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
const TimeHours = 100;

function calculateCarbonEmissions(powerConsumption) {
  const powerConsumptionKw = powerConsumption / 1000;
  const energyConsumptionKwh = powerConsumptionKw * TimeHours;
  const carbonEmissionsG = energyConsumptionKwh * CarbonIntensity;
  return (carbonEmissionsG / 1000).toFixed(2);
}

function HardwareEmissions() {
  const [selectedHardware, setSelectedHardware] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedHardware(event.target.value);
    emissions = calculateCarbonEmissions(HardwareData[selectedHardware]);
  };

  return (
    <div style={{ position: 'absolute', top: '477px', left: '670px', alignContent: 'center', alignItems: 'center' }}>
        <div>
          <select onChange={handleSelectChange} style={{ display: 'flex',
        alignItems: 'center',
        width: '330px',
        height: '47px',
        borderRadius: '20px',
        border: '1px solid #545454',
        background: '#FFFFFF',
        cursor: 'pointer', fontFamily: 'Century Gothic', color: '#545454', fontSize: '16px', fontWeight: '400', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', paddingLeft: '19px' }}>
            <option value="" style={{ fontFamily: 'Century Gothic', color: '#545454', fontSize: '16px', fontWeight: '400', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', width: '200px', height: '19px', paddingLeft: '19px' }}>Select Hardware</option>
            {Object.keys(HardwareData).map((hardwareName) => (
              <option key={hardwareName} value={hardwareName} style={{ fontFamily: 'Century Gothic', color: '#545454', fontSize: '16px', fontWeight: '400', lineHeight: '19px', letterSpacing: '0em', textAlign: 'left', width: '200px', height: '19px', paddingLeft: '19px' }}>
                {hardwareName}
              </option>
            ))}
          </select>
      </div> 
    </div>
  );
}

export default HardwareEmissions;
