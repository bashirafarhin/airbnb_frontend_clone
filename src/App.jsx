import { useState } from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import './index.css';
import PlaceType from './components/PlaceType/PlaceType';
import {list} from "../src/assets/cards-list";
import Cards from './components/Cards';


function App() {
  const [selectedPalace,setSelectedPalace]=useState(0);
  return (
    <>
    <div>
    <Header/>
    {console.log(selectedPalace)}
    <PlaceType selectedPalace={ selectedPalace } setSelectedPalace={ setSelectedPalace } />
    <Cards list={list[selectedPalace]} />
    {/* { selectedPalace==0 ? <Cards list={list} /> : <Cards list={list2} />} */}
    </div>
    </>
  );
}

export default App;
