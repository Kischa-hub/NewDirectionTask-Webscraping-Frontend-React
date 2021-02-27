import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

function SearchItemList({ searchList }) {
  return (
    <>
      <div className="w-full mx-auto items-center justify-center text-center ">
        {searchList.map((item) => (
          <>
            <SearchItem key={item.Id} item={item} />
          </>
        ))}
      </div>
    </>
  );
}

export default SearchItemList;
