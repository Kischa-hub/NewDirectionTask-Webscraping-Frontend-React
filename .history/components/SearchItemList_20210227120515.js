import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

function SearchItemList({ searchList }) {
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
