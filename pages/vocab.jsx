import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";
import axios from "axios";
import Card from "../components/vocab/card";

export default function Vocab() {
  const { username } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });
  const fetchData = () => {
    axios.get(`/api/card/${username}`).then(res => {
      setData(res.data);
    });
  };

  const list = data.map((item, index) => {
    return (
      <div className="column is-6" key={index}>
        <Card word={item.word} />
      </div>
    );
  });
  return (
    <div className="hero is-primary is-fullheight">
      <div className="columns is-centered">{list}</div>
    </div>
  );
}
