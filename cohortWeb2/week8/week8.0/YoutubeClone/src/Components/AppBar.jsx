import { SearchBar } from "./SearchBar";

export function AppBar() {
    return <div className="flex justify-between text-white">
        <div>Yt Logo</div>
        <SearchBar />
        <div>Sign IN</div>
    </div>
}