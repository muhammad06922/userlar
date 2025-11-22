import { useEffect, useState } from "react";

function UseFetch({ url }) {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(false);
  const [eror, seterro] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      setispending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setdata(data);
        setispending(false);
      } catch (err) {
        seterro(err.message);
      } finally {
        setispending(false);
      }
    };
    fetchdata();
  }, [url]);
  return { data, ispending, eror };
}

export default UseFetch;
