import { useState, useEffect } from "react";
import getGift from "../services/getGift";

const useGif = ({ gifId }) => {
  const [gif, setGif] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const gf = await getGift({ gifId });
        setGif(gf);

        if (Object.entries(gf).length === 0) setIsError(true);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
    };
    getData();
    setIsLoading(false);
  }, [gifId]);

  return { gif, isLoading, isError };
};

export default useGif;
