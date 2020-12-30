import { MapControl, withLeaflet } from "react-leaflet";
import React from 'react';
import L from "leaflet";
import 'leaflet-choropleth'
import 'leaflet-boundary-canvas'
import custom from './ghanaGeo.json'
import africa from './africa.geo.json'
import asia from './asiaGeo.json'
const lists=[
  {
    name:'ghana',
    bounds:custom
  },
  {
    name:'all',
    bounds:africa
  }
]
var osm;

class Boundary extends MapControl{
    createLeafletElement(props) {

      
    };
   
    componentDidMount() {
        const {map}=this.props.leaflet
             osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              boundary: custom,
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            }); 
           map.addLayer(osm)
/*             var ghLayer = L.geoJSON(custom);
            map.fitBounds(ghLayer.getBounds()); */

}
componentDidUpdate() {

  var selected=JSON.parse(localStorage.getItem('currentContinent'))
  console.log(selected[0].geoJSON)
  
    const {map}=this.props.leaflet
    map.removeLayer(osm)
         osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          boundary: selected[0].geoJSON,
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        }); 
        map.addLayer(osm)
/*             var ghLayer = L.geoJSON(custom);
        map.fitBounds(ghLayer.getBounds()); */

}

}
export default withLeaflet(Boundary)