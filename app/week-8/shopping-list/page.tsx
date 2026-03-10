"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const handleItemSelect = (item: any) => {
  let cleanedName = item.name
    .split(",")[0]
    .trim()
    .toLowerCase();

    cleanedName = cleanedName.replace(/[^a-z\s]/g, "").trim();

    if (cleanedName.endsWith("s")) {
      cleanedName = cleanedName.slice(0, -1);
    }

    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem: any) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  if (!user) {
    return <p className="text-center mt-10">Please log in to view the shopping list.</p>;
  }

  return (
    <main className="px-20 text-center flex flex-col">
      <h1 className="text-2xl font-bold pt-4 pb-1">Shopping List</h1>
      <div className="flex gap-10 justify-center">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}