import React, { useState, useEffect } from "react";
import Slide from 'react-reveal/Slide';
import { Line } from "react-chartjs-2";


function Lifetime() {

  const [weightVital, setWeightVital] = useState(true);
  const [temperatureVital, setTemperatureVital] = useState(false);
  const [pulseRateVital, setPulseRateVital] = useState(false);
  const [activityLevelVital, setActivityLevelVital] = useState(false);
  const [bmVital, setBmVital] = useState(false);
  
 
  const toggleWeightVital = () => {
    setWeightVital(true);
    setTemperatureVital(false);
    setPulseRateVital(false);
    setActivityLevelVital(false);
    setBmVital(false);

    setLifetime(true);
    setLastMonth(false);
    setLastWeek(false);

    setLifetimeTemp(false);
    setLastMonthTemp(false);
    setLastWeekTemp(false);

    setLifetimePulse(false);
    setLastMonthPulse(false);
    setLastWeekPulse(false);

    setLifetimeActivity(false);
    setLastMonthActivity(false);
    setLastWeekActivity(false);

    setLifetimeBM(false);
    setLastMonthBM(false);
    setLastWeekBM(false);

}

const toggleTemperatureVital = () => {
  setWeightVital(false);
  setTemperatureVital(true);
  setPulseRateVital(false);
  setActivityLevelVital(false);
  setBmVital(false);

  setLifetime(false);
  setLastMonth(false);
  setLastWeek(false);

  setLifetimeTemp(true);
  setLastMonthTemp(false);
  setLastWeekTemp(false);

  setLifetimePulse(false);
  setLastMonthPulse(false);
  setLastWeekPulse(false);

  setLifetimeActivity(false);
  setLastMonthActivity(false);
  setLastWeekActivity(false);

  setLifetimeBM(false);
  setLastMonthBM(false);
  setLastWeekBM(false);
}


const togglePulseRateVital = () => {
  setWeightVital(false);
  setTemperatureVital(false);
  setPulseRateVital(true);
  setActivityLevelVital(false);
  setBmVital(false);

  setLifetime(false);
  setLastMonth(false);
  setLastWeek(false);

  setLifetimeTemp(false);
  setLastMonthTemp(false);
  setLastWeekTemp(false);

  setLifetimePulse(true);
  setLastMonthPulse(false);
  setLastWeekPulse(false);

  setLifetimeActivity(true);
  setLastMonthActivity(false);
  setLastWeekActivity(false);

  setLifetimeBM(false);
  setLastMonthBM(false);
  setLastWeekBM(false);
}

const toggleActivityLevelVital = () => {
  setWeightVital(true);
  setTemperatureVital(false);
  setPulseRateVital(false);
  setActivityLevelVital(true);
  setBmVital(false);

  setLifetime(true);
  setLastMonth(false);
  setLastWeek(false);

  setLifetimeTemp(false);
  setLastMonthTemp(false);
  setLastWeekTemp(false);

  setLifetimePulse(false);
  setLastMonthPulse(false);
  setLastWeekPulse(false);

  setLifetimeActivity(false);
  setLastMonthActivity(false);
  setLastWeekActivity(false);

  setLifetimeBM(false);
  setLastMonthBM(false);
  setLastWeekBM(false);
}

const toggleBmVital = () => {
  setWeightVital(false);
  setTemperatureVital(false);
  setPulseRateVital(false);
  setActivityLevelVital(false);
  setBmVital(true);

  setLifetime(false);
  setLastMonth(false);
  setLastWeek(false);

  setLifetimeTemp(false);
  setLastMonthTemp(false);
  setLastWeekTemp(false);

  setLifetimePulse(false);
  setLastMonthPulse(false);
  setLastWeekPulse(false);

  setLifetimeActivity(false);
  setLastMonthActivity(false);
  setLastWeekActivity(false);

  setLifetimeBM(true);
  setLastMonthBM(false);
  setLastWeekBM(false);
}

 // Weight vitals
  
  const [lifetime, setLifetime] = useState(false);
  const [lastMonth, setLastMonth] = useState(false);
  const [lastWeek, setLastWeek] = useState(false);
  
  const toggleLifetime = () => {
    setLifetime(true);
    setLastMonth(false);
    setLastWeek(false);

}

const toggleLastMonth = () => {
  setLifetime(false);
  setLastMonth(true);
  setLastWeek(false);

}

const toggleLastWeek = () => {
  setLifetime(false);
  setLastMonth(false);
  setLastWeek(true);

}
 
  
const datalifeTime = {
  labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
  datasets: [
    {
      label: "Kailo's weight",
      data: [4, 5, 5, 6, 5, 6],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,0.2)"
    },
    {
      label: "Average weight upper boundary",
      data: [5, 5, 5, 5, 5, 5],
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Average weight Lower boundary",
      data: [4, 4, 4, 4, 4, 4],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const dataLastMonth = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14","Day 15",
  "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23",
  "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",],
  datasets: [
    {
      label: "Kailo's weight",
      data: [5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5, 5, 6, 7, 8, 8, 7, 6, 5, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,0.2)"
    },
    {
      label: "Average weight upper boundary",
      data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Average weight Lower boundary",
      data: [4, 4, 4, 4, 4, 4],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

   
const dataLastWeek = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  datasets: [
    {
      label: "Kailo's weight",
      data: [5, 5, 5, 5, 5, 5, 5],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,0.2)"
    }
  ]
};

// End of Weight graphs

// Temperature vitals
  
const [lifetimeTemp, setLifetimeTemp] = useState(false);
const [lastMonthTemp, setLastMonthTemp] = useState(false);
const [lastWeekTemp, setLastWeekTemp] = useState(false);

const toggleLifetimeTemp = () => {
  setLifetimeTemp(true);
  setLastMonthTemp(false);
  setLastWeekTemp(false);

}

const toggleLastMonthTemp = () => {
setLifetimeTemp(false);
setLastMonthTemp(true);
setLastWeekTemp(false);

}

const toggleLastWeekTemp = () => {
setLifetimeTemp(false);
setLastMonthTemp(false);
setLastWeekTemp(true);

}


const datalifeTimeTemp = {
labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
datasets: [
  {
    label: "Kailo's weight",
    data: [4, 5, 5, 6, 5, 6],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  },
  {
    label: "Average weight upper boundary",
    data: [5, 5, 5, 5, 5, 5],
    fill: false,
    borderColor: "#742774"
  },
  {
    label: "Average weight Lower boundary",
    data: [4, 4, 4, 4, 4, 4],
    fill: false,
    borderColor: "#742774"
  }
]
};

const dataLastMonthTemp = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14","Day 15",
"Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23",
"Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",],
datasets: [
  {
    label: "Kailo's weight",
    data: [5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5, 5, 6, 7, 8, 8, 7, 6, 5, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  },
  {
    label: "Average weight upper boundary",
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    fill: false,
    borderColor: "#742774"
  },
  {
    label: "Average weight Lower boundary",
    data: [4, 4, 4, 4, 4, 4],
    fill: false,
    borderColor: "#742774"
  }
]
};

 
const dataLastWeekTemp = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
datasets: [
  {
    label: "Kailo's weight",
    data: [5, 5, 5, 5, 5, 5, 5],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  }
]
};


// End of Temperature graphs

// Pulse vitals
  
const [lifetimePulse, setLifetimePulse] = useState(false);
const [lastMonthPulse, setLastMonthPulse] = useState(false);
const [lastWeekPulse, setLastWeekPulse] = useState(false);

const toggleLifetimePulse = () => {
  setLifetimePulse(true);
  setLastMonthPulse(false);
  setLastWeekPulse(false);

}

const toggleLastMonthPulse = () => {
setLifetimePulse(false);
setLastMonthPulse(true);
setLastWeekPulse(false);

}

const toggleLastWeekPulse = () => {
setLifetimePulse(false);
setLastMonthPulse(false);
setLastWeekPulse(true);

}


const datalifeTimePulse = {
labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
datasets: [
  {
    label: "Kailo's weight",
    data: [4, 5, 5, 6, 5, 6],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  },
  {
    label: "Average weight upper boundary",
    data: [5, 5, 5, 5, 5, 5],
    fill: false,
    borderColor: "#742774"
  },
  {
    label: "Average weight Lower boundary",
    data: [4, 4, 4, 4, 4, 4],
    fill: false,
    borderColor: "#742774"
  }
]
};

const dataLastMonthPulse = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14","Day 15",
"Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23",
"Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",],
datasets: [
  {
    label: "Kailo's weight",
    data: [5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5, 5, 6, 7, 8, 8, 7, 6, 5, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  },
  {
    label: "Average weight upper boundary",
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    fill: false,
    borderColor: "#742774"
  },
  {
    label: "Average weight Lower boundary",
    data: [4, 4, 4, 4, 4, 4],
    fill: false,
    borderColor: "#742774"
  }
]
};

 
const dataLastWeekPulse = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
datasets: [
  {
    label: "Kailo's weight",
    data: [5, 5, 5, 5, 5, 5, 5],
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,0.2)"
  }
]
};

// End of Pulse Rate graphs


 // Activity Level vitals
  
 const [lifetimeActivity, setLifetimeActivity] = useState(false);
 const [lastMonthActivity, setLastMonthActivity] = useState(false);
 const [lastWeekActivity, setLastWeekActivity] = useState(false);
 
 const toggleLifetimeActivity = () => {
   setLifetimeActivity(true);
   setLastMonthActivity(false);
   setLastWeekActivity(false);

}

const toggleLastMonthActivity = () => {
 setLifetimeActivity(false);
 setLastMonthActivity(true);
 setLastWeekActivity(false);

}

const toggleLastWeekActivity = () => {
 setLifetimeActivity(false);
 setLastMonthActivity(false);
 setLastWeekActivity(true);

}

 
const datalifeTimeActivity = {
 labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
 datasets: [
   {
     label: "Kailo's weight",
     data: [4, 5, 5, 6, 5, 6],
     fill: true,
     backgroundColor: "rgba(75,192,192,0.2)",
     borderColor: "rgba(75,192,192,0.2)"
   },
   {
     label: "Average weight upper boundary",
     data: [5, 5, 5, 5, 5, 5],
     fill: false,
     borderColor: "#742774"
   },
   {
     label: "Average weight Lower boundary",
     data: [4, 4, 4, 4, 4, 4],
     fill: false,
     borderColor: "#742774"
   }
 ]
};

const dataLastMonthActivity = {
 labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14","Day 15",
 "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23",
 "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",],
 datasets: [
   {
     label: "Kailo's weight",
     data: [5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5, 5, 6, 7, 8, 8, 7, 6, 5, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5],
     fill: true,
     backgroundColor: "rgba(75,192,192,0.2)",
     borderColor: "rgba(75,192,192,0.2)"
   },
   {
     label: "Average weight upper boundary",
     data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
     fill: false,
     borderColor: "#742774"
   },
   {
     label: "Average weight Lower boundary",
     data: [4, 4, 4, 4, 4, 4],
     fill: false,
     borderColor: "#742774"
   }
 ]
};

  
const dataLastWeekActivity = {
 labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
 datasets: [
   {
     label: "Kailo's weight",
     data: [5, 5, 5, 5, 5, 5, 5],
     fill: true,
     backgroundColor: "rgba(75,192,192,0.2)",
     borderColor: "rgba(75,192,192,0.2)"
   }
 ]
};

// End of Weight graphs

// BM vitals
 
const [lifetimeBM, setLifetimeBM] = useState(false);
const [lastMonthBM, setLastMonthBM] = useState(false);
const [lastWeekBM, setLastWeekBM] = useState(false);

const toggleLifetimeBM = () => {
 setLifetimeBM(true);
 setLastMonthBM(false);
 setLastWeekBM(false);

}

const toggleLastMonthBM = () => {
setLifetimeBM(false);
setLastMonthBM(true);
setLastWeekBM(false);

}

const toggleLastWeekBM = () => {
setLifetimeBM(false);
setLastMonthBM(false);
setLastWeekBM(true);

}


const datalifeTimeBM = {
labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
datasets: [
 {
   label: "Kailo's weight",
   data: [4, 5, 5, 6, 5, 6],
   fill: true,
   backgroundColor: "rgba(75,192,192,0.2)",
   borderColor: "rgba(75,192,192,0.2)"
 },
 {
   label: "Average weight upper boundary",
   data: [5, 5, 5, 5, 5, 5],
   fill: false,
   borderColor: "#742774"
 },
 {
   label: "Average weight Lower boundary",
   data: [4, 4, 4, 4, 4, 4],
   fill: false,
   borderColor: "#742774"
 }
]
};

const dataLastMonthBM = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14","Day 15",
"Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23",
"Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",],
datasets: [
 {
   label: "Kailo's weight",
   data: [5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5, 5, 6, 7, 8, 8, 7, 6, 5, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 6, 5],
   fill: true,
   backgroundColor: "rgba(75,192,192,0.2)",
   borderColor: "rgba(75,192,192,0.2)"
 },
 {
   label: "Average weight upper boundary",
   data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
   fill: false,
   borderColor: "#742774"
 },
 {
   label: "Average weight Lower boundary",
   data: [4, 4, 4, 4, 4, 4],
   fill: false,
   borderColor: "#742774"
 }
]
};


const dataLastWeekBM = {
labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
datasets: [
 {
   label: "Kailo's weight",
   data: [5, 5, 5, 5, 5, 5, 5],
   fill: true,
   backgroundColor: "rgba(75,192,192,0.2)",
   borderColor: "rgba(75,192,192,0.2)"
 }
]
};

// End of BM graphs


return (
  <>

  <Slide left>
  <button className="button4paulo" onClick={toggleWeightVital}>Weight</button>
  <button  className="button4paulo" onClick={toggleTemperatureVital}>Temperature</button>
  <button  className="button4paulo" onClick={togglePulseRateVital}>Pulse Rate</button>
  <button  className="button4paulo" onClick={toggleActivityLevelVital}>Activity Level</button>
  <button  className="button4paulo" onClick={toggleBmVital}>Bowel Movements</button>
  </Slide>

  { weightVital ? 
  
  <div> 
    
  <button  className="button4paulo" onClick={toggleLifetime}>6 Months</button>
  <button  className="button4paulo" onClick={toggleLastMonth}>1 Month</button>
  <button  className="button4paulo" onClick={toggleLastWeek}>1 Week</button>

  {lifetime ? <div className="App">
      <Line data={datalifeTime} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastMonth ? <div className="App">
      <Line data={dataLastMonth} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastWeek ? <div className="App">
      <Line data={dataLastWeek} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    </div> 
    : ""}

  { temperatureVital ? 
  <div> 
  <button  className="button4paulo" onClick={toggleLifetimeTemp}>6 Months</button>
  <button  className="button4paulo" onClick={toggleLastMonthTemp}>1 Month</button>
  <button  className="button4paulo" onClick={toggleLastWeekTemp}>1 Week</button>


  {lifetimeTemp ? <div className="App">
      <Line data={datalifeTimeTemp} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastMonthTemp ? <div className="App">
      <Line data={dataLastMonthTemp} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastWeekTemp ? <div className="App">
      <Line data={dataLastWeekTemp} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    </div> 
    : ""}

{ pulseRateVital ? 
  <div> 
  <button  className="button4paulo" onClick={toggleLifetimePulse}>6 Months</button>
  <button  className="button4paulo" onClick={toggleLastMonthPulse}>1 Month</button>
  <button  className="button4paulo" onClick={toggleLastWeekPulse}>1 Week</button>
  {lifetimePulse ? <div className="App">
      <Line data={datalifeTimePulse} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastMonthPulse ? <div className="App">
      <Line data={dataLastMonthPulse} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastWeekPulse ? <div className="App">
      <Line data={dataLastWeekPulse} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    </div> 
    : ""}

{ activityLevelVital ? 
  <div> 
  <button  className="button4paulo" onClick={toggleLifetimeActivity}>6 Months</button>
  <button  className="button4paulo" onClick={toggleLastMonthActivity}>1 Month</button>
  <button  className="button4paulo" onClick={toggleLastWeekActivity}>1 Week</button>

  {lifetimeActivity ? <div className="App">
      <Line data={datalifeTimeActivity} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastMonthActivity ? <div className="App">
      <Line data={dataLastMonthActivity} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastWeekActivity ? <div className="App">
      <Line data={dataLastWeekActivity} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    </div> 
    : ""}

{ bmVital ? 
  <div> 
  <button  className="button4paulo" onClick={toggleLifetimeBM}>6 Months</button>
  <button  className="button4paulo" onClick={toggleLastMonthBM}>1 Month</button>
  <button  className="button4paulo"  onClick={toggleLastWeekBM}>1 Week</button>
  {lifetimeBM ? <div className="App">
      <Line data={datalifeTimeBM} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastMonthBM ? <div className="App">
      <Line data={dataLastMonthBM} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    {lastWeekBM ? <div className="App">
      <Line data={dataLastWeekBM} options={{ maintainAspectRatio: true }} />
    </div> : "" } 
    </div> 
    : ""}

    </>
  );
}

export default Lifetime;
