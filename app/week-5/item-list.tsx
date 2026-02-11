"use client";
import Item from "./item";
import { useState } from "react";
import Items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const categories: string[] = [];
  Items.forEach((item) => {
    categories.push(item.category);
  });
  const uniqueCategories: string[] = [...new Set(categories)];
  if (sortBy === "name") {
    Items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "categoryList") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
    categories.sort((a, b) => a.localeCompare(b));
  }

  return (
    <div>
      <div className="flex justify-center gap-8 mt-3">
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "name" ? "bg-gray-300" : "bg-green-400"}`}
          onClick={() => setSortBy("name")}
        >
          Sort By Name
        </button>
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "category" ? "bg-gray-300" : "bg-green-400"}`}
          onClick={() => setSortBy("category")}
        >
          Sort By Category
        </button>
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "categoryList" ? "bg-gray-300" : "bg-green-400"}`}
          onClick={() => setSortBy("categoryList")}
        >
          Sort By Category
        </button>
      </div>
      <div>
        {sortBy === "categoryList" ? (
          uniqueCategories.map((uniqueCategory, index) => (
            <div key={index}>
              <h1 className="capitalize m-2">{uniqueCategory}</h1>
              {Items.map((item, index) => (
                item.category === uniqueCategory ? (
                  <div key={index}>
                    <Item
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  </div>
                ) : ("")
              ))}
            </div>
          ))
        ) : (
          Items.map((item, index) => (
            <div key={index}>
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
