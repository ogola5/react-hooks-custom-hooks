import { useEffect, useState } from "react";

// take in the url
function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  // rename `datas` to a more generic `datas`
  const [data, setdata] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setdata(data);
        setIsLoaded(true);
      });
  }, [url]);
  // the url is now a dependency
  // we want to use the side effect whenever the url changes

  // return an *object* with the datas and isLoaded state
  return {
    data ,isLoaded,
   };
}

export default useQuery;
