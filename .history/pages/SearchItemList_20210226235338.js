import React, { useState, useEffect } from "react";
import SearchItem from "../components/SearchItem";
import { apiUrl } from "../config.json";
import Link from "next/link";
import axios from "axios";

function SearchItemList(props) {
  const apiEndPoint = apiUrl;
  const [searchList, setsearchList] = useState([]);
  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then((response) => {
        //console.log(response);
        setsearchList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div>
        {searchList.map((item) => (
          <>
            <SearchItem key={item.id} item={item} />
          </>
        ))}
      </div>
    </>
  );
}

export default SearchItemList;
