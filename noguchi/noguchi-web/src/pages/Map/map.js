import React from 'react';
/* import Legend from './legend' */
import { Map, Marker,TileLayer,Popup} from 'react-leaflet';
import Boundary from '../../controls/boundary/boundary';
import 'leaflet/dist/leaflet.css';
import {Paper} from '@material-ui/core'
import Choropleth from 'react-leaflet-choropleth'
import africa from './../../controls/boundary/africa.geo.json'
import axios from 'axios'
class Mappings extends React.Component {
state={
      lat: 7.946527,
      lng: -1.023194,
      zoom: 6,
      json:africa
    }
   async componentDidMount(){
    await axios.get('http://localhost:1337/communities')
    .then(
      res =>{
        if(res.data){
          /* setDiseases(res.data) */
      }} )
    .catch((error) => {
      console.log(error);
    })
    }
  
  render() {
    const style = {
      fillColor: '#F28F3B',
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.5
  };


  
    const data=[
      {
        region:'Nima',
        position:[5.580433,-0.198810]
    
      },
      {
        region:'Central Region',
        position:[5.121850,-1.271830]
    
      },
      {
        region:'Ashanti Region',
        position:[6.799270,-1.447160]
    
      },
      {
        region:'Northern Region',
        position:[9.407840,-0.842240]
    
      },
    
    ]
    
    const position = [this.state.lat, this.state.lng];
    return (
 
      <Map center={position}  zoom={this.state.zoom} maxBounds={[[11.222,-3.274],[4.456,1.230]]} maxZoom={18}  >
{/*          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        /> */}
        {/* {data.map(dat => <Marker onmouseover={()=>{this.setState({activeMarker:dat})}} key={dat.region} position={dat.position}/>)}
        {this.state.activeMarker && (
        <Popup
         position={this.state.activeMarker.position}
         onClose={()=>{this.setState({activeMarker:null})}}
        >
          <div>
            <h2>{this.state.activeMarker.region}</h2>
          </div>
        </Popup>)} */}
          {/*<Legend/>*/}
          {/*
          <Legend></Legend>
          <Layers></Layers> */}
          {data.map(dat => <Marker  onmouseover={()=>{this.setState({activeMarker:dat})}} key={dat.region} position={dat.position}/>)}
          {this.state.activeMarker && (
            <Popup
            position={this.state.activeMarker.position}
            onClose={()=>{this.setState({activeMarker:null})}}
            >
              <div>
                <h2>{this.state.activeMarker.region}</h2>
              </div>
            </Popup>)}
          <Boundary style={{position:'absolute',zIndex:-10}} jason={this.state.json} ></Boundary>
{/*           <Choropleth
            data={custom}
            valueProperty={(feature) => feature.properties.value}
            //visible={(feature) => feature.id !== active.id}
            scale={['white', 'red']}
            steps={7}
            mode='q'
            style={style}
            onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.name)}
            ref={(el) => this.choropleth = el.leafletElement}
          /> */}

      </Map>
      
   

    );
  }
}
export default Mappings;