import React from "react";
import { useSelector } from "react-redux";
const Results = ()=>{
    const results = useSelector((state) => state.results);
    return(
        <div>
            {results.map((result)=>(<div key ={result.pageid} style={{margin:'10px 0'}}>
                <h3>{result.title}</h3>
                <p dangerouslySetInnerHTML={{__html:result.snippet}}></p>
                <a href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                target="_blank" rel="noopener norefferer">read more</a>
            </div>))}
        </div>
    );
};
export default Results;