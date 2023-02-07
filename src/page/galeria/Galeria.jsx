import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import { getItem } from "../../hook/useFetch.js";
import "./Galeria.css";

export async function loader() {
  const items = getItem();
  return items;
}

export default function Galeria({}) {
  const items = useLoaderData();
  console.log(items);

  return (
    <>
      <div className="Galery-Container">
        {items.map((el) => (
          <Card el={el} key={el.id} />
        ))}
      </div>
    </>
  );
}
