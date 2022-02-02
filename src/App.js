import React,{useState} from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {UserDate} from './Data'

function App() {

  const [userDate,setUserDate] = useState({
    labels: UserDate.map((data)=> data.year),
    datasets:[{
      label:"Users Gained",
      data: UserDate.map((data)=>data.userGain),
      backgroundColor:["#de7171","#32a89b","#8332a8","#ad841a"],
      borderColor: "Black",
      borderWidth:2,
    }]
  });

  return (
    <div className="App">
      <div style={{width:700}}>
      <BarChart chartData={userDate}/>
      </div>
      <div style={{width:700}}>
      <LineChart chartData={userDate}/>
      </div>
      <div style={{width:700}}>
      <PieChart chartData={userDate}/>
      </div>
    </div>
  );
}

export default App;
