import React from 'react';
/* import Legend from './legend' */
import { Map, Marker,TileLayer,Popup} from 'react-leaflet';
import Boundary from '../../controls/boundary/boundary';
/* import Layers from './newTon'
import Choro from './choro' */



class Mappings extends React.Component {
state={
      lat: 7.946527,
      lng: -1.023194,
      zoom: 7,
    }
  
  render() {
    
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
          <Boundary></Boundary>
          
      </Map>
      
   

    );
  }
}
export default Mappings;