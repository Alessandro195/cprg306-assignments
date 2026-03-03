"use client";

import Item from "../week-6/item";
import { useState } from "react";

export default function ItemList({ items }: { items: any }) {
  const [sortBy, setSortBy] = useState("name");
  let itemsCopy = [...items];
  if (sortBy === "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category" || sortBy === "categoryList") {
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  }

  const categories: string[] = itemsCopy.map((item) => item.category);
  const uniqueCategories: string[] = [...new Set(categories)].sort((a, b) =>
    a.localeCompare(b),
  );

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
          Sort By Category & Name
        </button>
      </div>
      <div>
        {sortBy === "categoryList"
          ? uniqueCategories.map((uniqueCategory, index) => (
              <div key={index}>
                <h1 className="capitalize m-2">{uniqueCategory}</h1>
                {itemsCopy.map((item, index) =>
                  item.category === uniqueCategory ? (
                    <div key={index}>
                      <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    </div>
                  ) : (
                    ""
                  ),
                )}
              </div>
            ))
          : itemsCopy.map((item, index) => (
              <div key={index}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
