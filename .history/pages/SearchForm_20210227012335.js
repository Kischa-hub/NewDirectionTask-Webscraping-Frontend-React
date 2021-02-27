import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "../config.json";
import SearchItemList from "../components/SearchItemList";
import Logout from "../components/Logout";

function SearchForm(props) {
  const { register, control, handleSubmit, errors } = useForm();

  const [success, setSuccess] = useState(false);
  const [searchList, setsearchList] = useState([]);

  const apiEndPoint = apiUrl;

  const onSubmit = (data) => {
    let _url = apiUrl + "url=" + data.UrlText + "&Keyword=" + data.Keyword;

    console.log("UrlText", data.UrlText);
    console.log("Keyword", data.Keyword);
    console.log("_url", _url);
    axios
      .get(_url)
      .then((response) => {
        setsearchList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setSuccess(true);
  };
  return (
    <form
      className="bg-grey-bg p-6 w-96 rounded-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8">
        <label className="block font-semibold mb-3">URL</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="Site URL"
          name="UrlText"
          ref={register({
            required: "URL ist nötig",
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

      {success && <SearchItemList searchList={searchList} />}

      <label className="ml-10 ">
        <Link href="/">
          <a className=" text-accent">Back to Home</a>
        </Link>
        <Logout />
      </label>
    </form>
  );
}

export default SearchForm;
