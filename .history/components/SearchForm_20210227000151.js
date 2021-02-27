import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function SearchForm(props) {
  return (
    <form
      className="bg-grey-bg p-6 w-96 rounded-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8">
        <label className="block font-semibold mb-3">ID</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="Employee ID"
          name="id"
          //   ref={register({
          //     required: "ID is Requierd",
          //     minLength: { value: 2, message: "Minimum firstname is 2 char" }, //^[1-9][0-9]?$|^100$
          //   })}
          ref={register({
            required: "ID is Requierd & accept only digit from 1 to 100",
            pattern: {
              value: /^[1-9][0-9]?$|^100$/,
              message: "accept only digit from 1 to 100",
            },
          })}
        />
        {errors.id && (
          <p className="ml-10 text-xs text-error">{errors.id.message}</p>
        )}
      </div>
      <div className="mb-8">
        <label className="block font-semibold mb-3">Name</label>
        <input
          type="text"
          className="w-80 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
          placeholder="First Name"
          name="Name"
          ref={register({
            required: "First Name is Requierd",
            minLength: { value: 2, message: "Minimum firstname is 2 char" },
          })}
        />
        {errors.Name && (
          <p className="ml-10 text-xs text-error">{errors.Name.message}</p>
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

      <div className="mb-8">
        <label className="block mb-3 font-bold">skills</label>
      </div>

      {fields.map((item, index) => {
        return (
          <div key={item.id} className="mb-5 flex items-center">
            {/* w-96 */}
            <input
              ref={register()}
              name={`controlItems[${index}].name`}
              defaultValue={item.langName}
              className="w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            />
            <select
              ref={register()}
              name={`controlItems[${index}].type`}
              defaultValue={item.grad}
              className="ml-2"
            >
              <option value="">Select ...</option>
              <option value="Good">Good</option>
              <option value="VGood">VGood</option>
              <option value="Excellent">Excellent</option>
            </select>
            <input
              ref={register()}
              name={`controlItems[${index}].amount`}
              type="number"
              defaultValue={item.amount}
              className="w-16 border-grey-shd5 hover:border-grey-shd2 focus:outline-focus-border focus:outline-none focus:placeholder-dark focus:border-dark border rounded-md px-4 py-2.5 text-grey-sh01"
            />
            <button
              type="button"
              className="mr-2 focus:outline-none"
              onClick={() => remove(index)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11H17V13H7V11Z" fill="#5B6366" />
                <path
                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                  fill="#5B6366"
                />
              </svg>
            </button>
          </div>
        );
      })}

      <div className="flex items-center">
        <svg
          onClick={() => append({})}
          className="mr-2 cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#00A8E8" />
          <path
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
            fill="#00A8E8"
          />
        </svg>
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
