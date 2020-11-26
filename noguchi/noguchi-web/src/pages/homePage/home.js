import { Button } from 'antd'
import React ,{useState} from 'react'
import Mappings from '../Map/map'
import './home.css'
const Home=()=>{
    const [hidden,setHidden]=useState(true)

    return(
        <div class="parent">
        <header >Header</header>
        <div class="left-side" contenteditable>Left Sidebar</div>
        <main  contenteditable> <Mappings/></main>
        <div class="right-side" contenteditable hidden={hidden} >Right Sidebar</div>
        <footer >
            <Button onClick={()=>setHidden(!hidden)}>
                Click To Show
            </Button>
        </footer>
      </div>
    );
    
}
    export default Home;