
export const generateUrl = (target: string, params: {}) : string=> {

    const keys = Object.keys(params);    
    keys.sort();
    params = keys.map(function(key) {
        // return key + "=" + params[key.toString()].toString();      
        const customKey = (key as keyof typeof params);
        if(params[customKey] != '')
            return key + "=" + params[customKey];        
    }).join("&")
    console.log(params) ;
    return target + "?" + params
}

    
