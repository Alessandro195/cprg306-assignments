"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page () {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem: any) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="px-20">
            <h1 className="text-2xl font-bold pt-4 pb-1">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
}