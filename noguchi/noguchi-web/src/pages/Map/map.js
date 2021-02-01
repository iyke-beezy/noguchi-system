import React from 'react';
import L from 'leaflet';
import {useMap, MapContainer, Marker,TileLayer,Popup} from 'react-leaflet';
/* import Boundary from '../../controls/boundary/boundary';
 */import 'leaflet/dist/leaflet.css';
import { Paper} from '@material-ui/core'
import Choropleth from 'react-leaflet-choropleth'
import africa from './../../controls/boundary/africa.geo.json'
import axios from 'axios'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Drawer,List,Button} from 'antd';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}







export class Mapp extends React.Component {
  state={
        lat:7.946527,
        lng: -1.023194,
        zoom: 3,
        json:africa,
        open:false,
        activeMarker:{}
      }
  
      
      
    
      
    render() {
      console.log(this.props.markers)
      const style = {
        fillColor: '#F28F3B',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
    const changeCenter=()=>{
      this.setState(() => ({
        lat:51.505, 
        
        lng:-0.09
      }));
      console.log(this.state.lat,this.state.lng)
    }
      

      return (
      
        <MapContainer center={this.props.center.lat && this.props.center.long?[this.props.center.lat, this.props.center.long]:[this.state.lat, this.state.lng]}  zoom={this.state.zoom} scrollWheelZoom={false} >
          <ChangeView center={this.props.center.lat && this.props.center.long?[this.props.center.lat, this.props.center.long]:[this.state.lat, this.state.lng]}  zoom={this.state.zoom} /> 
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          /> 
          {
          this.props.markers.map(marker => 
          <Marker   key={marker.id} position={[marker.community.location.lat, marker.community.location.long]}>
               <Drawer
                title="Details"
                placement="right"
                width="40%"
                closable={true}
                onClose={() => this.setState(() => ({
                  open:false
                }))}
                visible={this.state.open}
              >
            <div style={{zIndex:100000000000,display:'flex',flexDirection:'column',alignItems:'flex-start'}}  >
            <h1 style={{textAlign:'left'}}>Recorded for {marker.community.Community}</h1>
            <span style={{textAlign:'left'}}>{marker.published_at}</span>
            
            <List
            size="large"
            style={{width:'100%'}}
            dataSource={marker.answers.slice(0,6)}
            renderItem={mark => <List.Item >
            <h3 style={{textAlign:'left'}}>{mark.question.Keyword}:<span style={{textAlign:'left',color:'grey'}}>{mark.answer}</span></h3>
            </List.Item>} 
          />
    
              <Button block size='large' onClick={()=>{
                localStorage.setItem('expandedCommunity',marker.community.id)
                localStorage.setItem('selectedYear',marker.ActualSurveyDate)
                window.location.href='/details'
              }}  >See More</Button>
        </div>
        
      </Drawer>
            <Popup>
              <h3>{marker.community.Community}</h3>
              <Button variant='outlined' onClick={() => this.setState(() => ({open:true}))} >View Details</Button>
            </Popup>
          </Marker>)
          }
       
        </MapContainer>
       
     
  
      );
    }
  }