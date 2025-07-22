import { SearchBar } from "./SearchBar";

export function AppBar() {
    return <div className="flex justify-around text-white pt-2">
        <div className="text-md inline-flex items-center">Youtube</div>
        <SearchBar />
        <div>
            <button  className="bg-slate-600 py-2 px-3 inline-flex items-center  rounded-2xl ">Sign In</button>
        </div>
    </div>
}