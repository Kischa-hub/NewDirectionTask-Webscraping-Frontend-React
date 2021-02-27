import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "../config.json";
import SearchItemList from "../components/SearchItemList";
import Logout from "../components/Logout";

function SearchForm(props) {
  const { register, control, handleSubmit, errors } = useForm();

  const [success, setSuccess] = useState(false);
  const [searchList, setsearchList] = useState([{}]);

  const apiEndPoint = apiUrl;

  const onSubmit = (data) => {
    let addUrl = apiUrl + "?url=" + data.UrlText + "&Keyword=" + data.Keyword;
    //preventDefault();
    axios
      .get(addUrl)
      .then((response) => {
        //setsearchList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //debug
    console.log("UrlText", data.UrlText);
    console.log("Keyword", data.Keyword);
    console.log("addUrl", addUrl);
    //console.log("allUrl", allUrl);
    console.log("searchList", searchList);

    // setSuccess(true);
  };

  useEffect(() => {
    let allUrl = apiUrl + "items";
    axios
      .get(allUrl)
      .then((response) => {
        setsearchList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, searchList);

  return (
    <div className="w-full">
      <form
        className="bg-grey-bg p-6 w-96 rounded-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <img src="/nd_RZ_LOGO.png" alt="New Direction" className="h-4 ml-1" />
          <h1 className="text-6xl font-bold text-error">
            Software, die begeistert!
          </h1>
        </div>

        <div className="mb-8">
          <label className="block font-semibold mb-3">URL</label>
          <input
            type="text"
            className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            placeholder="Site URL"
            name="UrlText"
            ref={register({
              required: "URL ist nötig",
              pattern: {
                value: /^(http(s):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                //value: / ^(http(s):\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,

                message: "Es ist ein falches URL Format ",
              },
            })}
          />
          {errors.UrlText && (
            <p className="ml-10 text-xs text-error">{errors.UrlText.message}</p>
          )}
        </div>
        <div className="mb-8">
          <label className="block font-semibold mb-3">Ausdruck</label>
          <input
            type="text"
            className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            placeholder="Ausdruck"
            name="Keyword"
            ref={register({
              required: "Ausdruck ist nötig",
            })}
          />
          {errors.Keyword && (
            <p className="ml-10 text-xs text-error">{errors.Keyword.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-3 mr-5 focus:outline-none bg-error px-8 py-2 text-white font-semibold rounded-full"
          >
            Suche
          </button>
        </div>

        <Logout />
      </form>
      {/* {success && <SearchItemList searchList={searchList} />} */}
      <SearchItemList searchList={searchList} />
    </div>
  );
}

export default SearchForm;
