import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function SearchForm(props) {
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
      <div className="mb-8">
        <label className="block font-semibold mb-3">Status</label>
        {/* <input
            type="text"
            className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            placeholder="Secound Name"
            name="sName"
            ref={register({
              required: "Secound Name is Requierd",
              minLength: { value: 2, message: "Minimum firstname is 2 char" },
            })}
          /> */}

        <select
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          name="Status"
          ref={register({
            required: "Status is Requierd",
          })}
        >
          <option value="">Select ...</option>
          <option value="ADDED">ADDED</option>
          <option value="IN-CHECK">IN-CHECK</option>
          <option value="APPROVED">APPROVED</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
        {errors.Status && (
          <p className="ml-10 text-xs text-error">{errors.Status.message}</p>
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

      {success && (
        <h1 className="ml-10 text-xs text-success">Form submit successfully</h1>
      )}

      <label className="ml-10 ">
        <Link href="/">
          <a className=" text-accent">Back to Home</a>
        </Link>
      </label>
    </form>
  );
}

export default SearchForm;
