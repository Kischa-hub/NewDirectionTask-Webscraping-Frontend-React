import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "../config.json";
import SearchItemList from "./SearchItemList";

function SearchForm(props) {
  const { register, control, handleSubmit, errors } = useForm();

  const [success, setSuccess] = useState(false);
  const [searchList, setsearchList] = useState([]);

  const apiEndPoint = apiUrl;

  const onSubmit = (data) => {
    //console.table(data);
    //console.log("mydata", data);
    let _url = apiUrl + "url=" + data.UrlText + "&Keyword=" + data.Keyword;
    axios
      .get(_url)
      .then((response) => {
        //console.log(response);
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
            required: "URL is Requierd",
          })}
        />
        {errors.UrlText && (
          <p className="ml-10 text-xs text-error">{errors.UrlText.message}</p>
        )}
      </div>
      <div className="mb-8">
        <label className="block font-semibold mb-3">Keyword</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="Keyword"
          name="Keyword"
          ref={register({
            required: "Keyword is Requierd",
          })}
        />
        {errors.Keyword && (
          <p className="ml-10 text-xs text-error">{errors.Keyword.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-3 mr-5 focus:outline-none bg-warning px-8 py-2 text-white font-semibold rounded-full"
        >
          Submit
        </button>
      </div>

      {success && <SearchItemList searchList={searchList} />}

      <label className="ml-10 ">
        <Link href="/">
          <a className=" text-accent">Back to Home</a>
        </Link>
      </label>
    </form>
  );
}

export default SearchForm;
