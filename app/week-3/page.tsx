import ItemList from "./item-list";

export default function Page () {
    return (
        <main className="px-20">
            <h1 className="text-2xl font-bold pt-4 pb-1">Shopping List</h1>
            <ItemList />
        </main>
    )
}