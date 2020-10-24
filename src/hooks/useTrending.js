import { useState, useEffect } from "react";
import getTrending from "../services/getTrending";

const useTrending = () => {
  const [trendingGif, setTrendingGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const trending = await getTrending({ limit: 20 });
        setTrendingGif(trending);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setIsLoading(false);
  }, []);

  return { isLoading, trendingGif };
};

export default useTrending;
