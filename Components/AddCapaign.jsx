import Link from "next/link";
import React from "react";

const AddCapaign = ({ createCampaign }) => {
  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-white rounded-lg shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6">
          Campaign
        </h3>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Campaign Title"
              />
            </div>
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Campaign Description
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Campaign Description"
              />
            </div>
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Target Amount
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Campaign target amount"
              />
            </div>
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Deadline
              </label>
              <input
                class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="date"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                class="mt-2 w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Campaign
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCapaign;
