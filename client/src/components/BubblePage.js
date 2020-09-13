import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../axiosWithAuth ';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchData } from '../api/fetchData';
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    fetchData().then(data => {
      console.log(data);
      setColorList(data);
    }).catch(err => console.log('get err', err));
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
