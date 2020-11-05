import { MapControl, withLeaflet } from "react-leaflet";
import React from 'react';
import L from "leaflet";
import 'leaflet-choropleth'
import 'leaflet-boundary-canvas'
import custom from './customs.geo.json'
import africa from './africa.geo.json'

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

class Boundary extends MapControl{
    createLeafletElement(props) {};
    
    componentDidMount() {

      var selected=localStorage.getItem('country')
      var mapBoundary=  lists.filter(function(list){
        return list.name==selected
      });
      console.log(mapBoundary)
        const {map}=this.props.leaflet
            var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              boundary: custom,
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            }); 
           osm.addTo(map)
/*             var ghLayer = L.geoJSON(custom);
            map.fitBounds(ghLayer.getBounds()); */
          

}
}
export default withLeaflet(Boundary)