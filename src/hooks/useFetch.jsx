import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            fetch(url)
                .then((res) =>  res.json() )
                .then((data) =>data ? setLoading(false) & setData(data)  : setLoading(true))
                .catch((err) => {err && setLoading(false); setError(true) })
        }, 1000);



    }, [url]);
    return [data, error, loading];
};
export default useFetch;


// import { useState, useEffect } from "react";
// const useFetch = (url) => {
//       const [data, setData] = useState(null);
//       useEffect(() => {
//           fetch(url)
//           .then((res) => {res.json()})
//           .then((data) =>{ setData(data)})
//           .catch((err) =>{ console.log(err)});

//       }, [url]);
//       return [data];
// };
// export default useFetch;