/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);
  return (
    <div>
      <Table data={data}></Table>
    </div>
  );
};

export default Home;
