import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";
const SearchBar = () =>{
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const handleSearch = ()=>{
        if(query) {
            dispatch(fetchResults(query));
            setQuery("");
        }
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={handleSearch} style={{marginRight :'10px'}}>search</button>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search" onKeyDown={(e)=>{if(e.key==='Enter'){handleSearch();}}} style={{padding:"8px", width:'300px'}}></input>
        </div>
    );
};
export default SearchBar;