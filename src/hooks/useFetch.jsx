import { useState, useEffect } from "react";
import axios from "axios";

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         setLoading(true)

//         setTimeout(() => {
//             fetch(url)
//                 .then((res) =>  res.json() )
//                 .then((data) =>data ? setLoading(false) & setData(data)  : setLoading(true))
//                 .catch((err) => {err && setLoading(false); setError(true) })
//         }, 1000);



//     }, [url]);
//     return [data, error, loading];
// };
// export default useFetch;

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            axios.get(url)
                .then((res) =>  res.data )
                .then((data) =>data ? setLoading(false) & setData(data)  : setLoading(true))
                .catch((err) => {err && setLoading(false); setError(true) })
        }, 1000);

        

    }, [url]);
    return [data, error, loading];
};
export default useFetch;
