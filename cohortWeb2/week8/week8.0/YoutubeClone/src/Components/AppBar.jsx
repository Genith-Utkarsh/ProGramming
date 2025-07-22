import { SearchBar } from "./SearchBar";

export function AppBar() {
    return <div className="flex justify-around text-white pt-2">
        <div className="text-md inline-flex items-center">Youtube</div>
        <SearchBar />
        <div>Sign IN</div>
    </div>
}