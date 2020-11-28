/* import { MapControl, withLeaflet,useLeflet } from "react-leaflet";
import React from 'react';
import L from "leaflet";
import 'leaflet-choropleth';
import {Button} from 'antd';
import 'antd/dist/antd.css';
/* import './App.css' 

class Legend extends MapControl {

  
  createLeafletElement(props) {}

  componentDidMount() {
    // get color depending on population density value
    const getColor = d => {
      return d ===0
        ? "#800026"
        : d ===1
        ? "#FEB24C"
        : "#FFEDA0";
    };

    const legend = L.control({ position: "bottomleft" });
    
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = ['Malaria', 'COVID-19', 'Diabetes'];
      let labels = [];
      let from;
      for (let i = 0; i < grades.length; i++) {

        from=grades[i];

        labels.push(

          '<button type="link" class="btn ant-btn" >' +from+'</button>'
           
        );
      }

      div.innerHTML = labels.join("<br><br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend); */

import React from 'react';
import { Card } from 'antd';
import { Paper,Select,MenuItem,Typography } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer,Tooltip,BarChart,Bar} from 'recharts';
import { useTheme } from '@material-ui/core/styles';

function createData(time, cases) {
  return { time, cases };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
]
const data2 = [
  createData('Jan', 0),
  createData('Feb', 1),
  createData('Mar', 3),
  createData('Apr', 4),
  createData('May', 1),
  createData('Jun', 0),
  createData('Jul', 0),
  createData('Aug', 2),
  createData('Sep', 3),
  createData('Oct', 1),
  createData('Nov', 4),
  createData('Dec', 7),
]
const data3 = [
  createData('2010', 0),
  createData('2011', 1),
  createData('2012', 3),
  createData('2013', 4),
  createData('2014', 1),
  createData('2015', 0),
  createData('2016', 0),
  createData('2017', 2),
  createData('2018', 3),
  createData('2019', 1),
  createData('2020', 4),
  createData('2021', 7),
]

export const Plot =(props)=>{
  const theme = useTheme();
  return(
    <div style={{height:'45vh',paddingBottom:20}}>
    <ResponsiveContainer>
              <LineChart
                data={data2}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 16,
                }}
              >
                <XAxis dataKey="time" stroke={theme.palette.text.secondary} padding={{ left: 30, right: 30 }} />
                <Tooltip />
                <YAxis stroke={theme.palette.text.secondary}>
                  <Label
                    angle={270}
                    position="left"
                    style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                  >
                   {props.yname}
                  </Label>
                </YAxis>
                <Line type="monotone" dataKey="cases" stroke={theme.palette.primary.main} dot={false} />
              </LineChart>
      </ResponsiveContainer>  

      </div>
  );

}
export const Plot2 =(props)=>{
  const theme = useTheme();
  return(
    <div style={{height:'45vh',paddingBottom:20}}>
    <ResponsiveContainer>
              <BarChart
                data={data3}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 16,
                }}
              >
                <XAxis dataKey="time" stroke={theme.palette.text.secondary} padding={{ left: 30, right: 30 }} />
                <Tooltip />
                <YAxis stroke={theme.palette.text.secondary}>
                  <Label
                    angle={270}
                    position="left"
                    style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                  >
                   {props.yname}
                  </Label>
                </YAxis>
                <Bar type="monotone" dataKey="cases"  fill="#8884d8" />
              </BarChart>
      </ResponsiveContainer>  

      </div>
  );

}
const Legend =()=>{


  const theme = useTheme();
    const [age, setAge] = React.useState('new');
    const [caseType,setCaseType]=React.useState('New Cases')
    const handleChange = (event) => {
        setAge(event.target.value);
        setCaseType(setCaseTypes(event.target.value))
    };
    const setCaseTypes=(age)=>{
      if(age==='new' ){
        return 'New Cases'
      }
      else if(age==='fatal'){
        return 'Fatal Cases'
      }else{
        return 'Recovered Cases'
      }
    }; 
  
    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column',alignItemns:'center'}}>
            
            <Paper style={{height:'15vh',marginBottom:20}} >
                <span >Legend info goes here</span>
            </Paper>
            <Paper>
                <h3>New and fatal cases</h3>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value={'new'}>New Cases</MenuItem>
                <MenuItem value={'fatal'}>Fatal Cases</MenuItem>
                <MenuItem value={'recovered'}>Recovered Cases</MenuItem>
                </Select>
                <Paper style={{height:'45vh',paddingBottom:20}}>
                <h3 >
                  {caseType}
              </h3>  
              <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 16,
                }}
              >
                <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary}>
                  <Label
                    angle={270}
                    position="left"
                    style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                  >
                    Cases (100)
                  </Label>
                </YAxis>
                <Line type="monotone" dataKey="cases" stroke={theme.palette.primary.main} dot={false} />
              </LineChart>
      </ResponsiveContainer>                 
                </Paper>

            </Paper>
        </div>
    );
}

export default Legend;