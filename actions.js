export const FETCH_RESULTS = 'FETCH_RESULTS';
export const fetchResults = (query) =>{
    return async (dispatch) =>{
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`);
        const data = await response.json();
        dispatch({type:FETCH_RESULTS,
            payload: data.query.search
        });
    };
};