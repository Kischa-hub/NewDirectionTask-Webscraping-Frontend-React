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
            <SearchItem key={item.id} emp={item} />
          </>
        ))}
      </div>
      <div className="flex-row  p-6 w-96 rounded-md mx-auto justify-center align-middle">
        <label className="ml-10 ">
          <Link href="/">
            <a className=" text-accent">Back to Home</a>
          </Link>
        </label>

        <label className="ml-10 ">
          <Link href="/addEmplyee">
            <a className=" text-accent">Add Employee</a>
          </Link>
        </label>
      </div>
    </>
  );
}

export default SearchItemList;
