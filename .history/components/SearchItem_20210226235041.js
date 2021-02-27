import React from "react";

function SearchItem({ item }) {
  return (
    <div className="flex-col pt-6 w-96 rounded-md mx-auto justify-center align-middle mb-4">
      <div classname="flex-row">
        <label className="font-semibold ml-2">ID:</label>

        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {item.id}
        </label>

        <label for="Name" className="font-semibold  ml-2">
          Date:
        </label>
        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {item.date}
        </label>

        <label for="Name" className="font-semibold  ml-2">
          URL:
        </label>
        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {item.url}
        </label>

        <label for="Name" className="font-semibold  ml-2">
          keyword:
        </label>
        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {item.keyword}
        </label>

        <label for="Name" className="font-semibold  ml-2">
          count:
        </label>
        <label className="w-4 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01">
          {item.count}
        </label>
      </div>
    </div>
  );
}

export default SearchItem;
