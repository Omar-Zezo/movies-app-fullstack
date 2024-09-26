import React, { useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "../components/Slider";

const DetailsPage = () => {
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState("");

  // get item id 
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setItemId(id);
      console.log(item)
    }
  }, [id]);

  // get item data 
  const getData = async () => {
    // get item details
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US`
      )
      .then((data) => {
        setItem(data.data);
      });
  };

  useEffect(() => {
    if (itemId) {
      getData();
    }
  }, [itemId]);

  useEffect(() => {
    if (item) {
      console.log(item);
    }
  }, [item]);

  return (
    <div className="page landing">
      <Slider data={[item]} internal={true}/>
    </div>
  );
};

export default DetailsPage;
