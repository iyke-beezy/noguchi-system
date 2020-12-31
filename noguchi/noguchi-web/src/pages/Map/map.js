import React from 'react';
/* import Legend from './legend' */
import { Map, Marker,TileLayer,Popup} from 'react-leaflet';
import Boundary from '../../controls/boundary/boundary';
import 'leaflet/dist/leaflet.css';
import {Paper} from '@material-ui/core'
/* import Layers from './newTon'
import Choro from './choro' */
import custom from '../../controls/boundary/ghanaGeo.json'
import Choropleth from 'react-leaflet-choropleth'


class Mappings extends React.Component {
state={
      lat: 7.946527,
      lng: -1.023194,
      zoom: 6,
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
        region:'Greater Accra',
        position:[5.802250,0.058200]
    
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
 
      <Map center={position} zoom={this.state.zoom} maxBounds={[[11.222,-3.274],[4.456,1.230]]} maxZoom={18}  >
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
          <Boundary style={{position:'absolute',zIndex:-10}} ></Boundary>
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