"use client";

import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState<any[]>([]);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const loadItems = async () => {
    if (user != null) { 
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

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

  const handleAddItem = async (newItem: any) => {
  if (user != null) {
    await addItem(user.uid, newItem);
    loadItems();
  }
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