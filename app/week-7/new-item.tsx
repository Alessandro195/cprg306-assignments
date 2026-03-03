"use client";

import { useState } from "react";
import Item from "./item";
import Page from "./page";

const NewItem = ({ onAddItem }: { onAddItem: any }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNameTouched(true);
    if (!name || name.length < 2) {
      return;
    }

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="flex rounded-sm justify-center mt-6 mb-pb-2 bg-gray-600 p-2 rounded-sm">
      <form className="space-y-1">
        <input
          required
          className={` text-white
            ${nameTouched && name == ""
              ? "border-2 border-red-700"
              : "border border-white"
          }`}
          onBlur={(e) => setNameTouched(true)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          required
          className="flex border border-white"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        ></input>
        <select
          required
          className=" flex border border-white px-8 "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
        <button
          className="border border-black disabled:cursor-not-allowed border-white"
          disabled={name == ""}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <p className="text-red-500">
        {nameTouched && name == ""
          ? `Form is submitted: Under the name ${name}`
          : null}
      </p>
    </div>
  );
};

export default NewItem;
