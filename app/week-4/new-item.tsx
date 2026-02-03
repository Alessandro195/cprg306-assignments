"use client"

import {useState} from "react"
import Item from "../week-3/item"
import Page from "./page"

const NewItem = () => {
    const [name, setName] = useState("")  
    const [quantity, setQuantity] = useState(1)  
    const [category, setCategory] = useState("produce")  
    const [nameTouched, setNameTouched] = useState<boolean>(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setNameTouched(true);
        if (!name || name.length < 2) {
            alert("Enter all necessary info into fields")
            return;
        }
        <Item 
            name = {name}
            quantity = {quantity}
            category = {category}
        />
        console.log(Item)
        alert("Name: " + name + "Quantity: " + quantity + "Category: " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="flex items-center justify-center mt-80">
        <form className="space-y-1">
            <input required className={nameTouched && name == "" ? "border-2 border-red-700" : "border border-black"} onBlur={e => setNameTouched(true)} value={name} onChange={(e) => setName(e.target.value)}></input>
            <input required className="flex border border-black" min={1} max={99} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}></input>
            <select required className="flex border border-black px-8" value={category} onChange={(e) => setCategory(e.target.value)}>
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
            <button className="border border-black disabled:cursor-not-allowed disabled:bg-gray-50" disabled={name == ""} onClick={handleSubmit}>Submit</button>
        </form>
        <p className="text-red-500">{nameTouched && name == "" ? `Form is submitted: Under the name ${name}` : null}</p>
        </div>
    );
}

export default NewItem;