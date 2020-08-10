import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "../components/vocab/card";

export default function Vocab() {
  const router = useRouter();
  const [vocabs, setVocabs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`/api/card/${localStorage.getItem("username")}`).then(res => {
      setVocabs(res.data);
    });
  };

  const deleteCard = id => {
    axios
      .delete(`/api/card/${localStorage.getItem("username")}/${id}`)
      .then(res => {
        fetchData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const list = vocabs.map((item, index) => {
    return (
      <div
        className="column is-12"
        style={{ display: "flex", justifyContent: "center" }}
        key={index}
      >
        <Card item={item} deleteCard={deleteCard} />
      </div>
    );
  });
  return (
    <div className="has-background-primary" style={{ minHeight: "110vh" }}>
      <div className="columns is-multiline" style={{ paddingTop: 50 }}>
        {list}
      </div>
      <div className="columns" style={{ paddingTop: 30 }}>
        <div className="column has-text-centered">
          <button
            className="button is-warning hvr-pop"
            onClick={() => router.push("/vocab/add")}
          >
            Add Vocab
          </button>
        </div>
      </div>
    </div>
  );
}
