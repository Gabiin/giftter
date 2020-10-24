import { useState, useEffect, useCallback } from "react";
import getTrending from "../services/getTrending";

const useTrending = () => {
  const [trendingGif, setTrendingGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTrendingGifs = useCallback(async () => {
    setIsLoading(true);
    try {
      const trending = await getTrending({ limit: 20 });
      setTrendingGif(trending);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [setTrendingGif]);

  useEffect(() => {
    getTrendingGifs();
  }, [getTrendingGifs]);

  return { isLoading, trendingGif };
};

export default useTrending;
