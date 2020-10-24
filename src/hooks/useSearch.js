import { useState, useEffect } from "react";
import getSearch from "../services/getSearch";

const INIT_PAGE = 0;

const useSearch = ({ keyword }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(INIT_PAGE);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const { search, totalCount } = await getSearch({
          keyword: keywordToUse,
        });
        setSearchResult(search);

        // save keyword in local storage
        localStorage.setItem("lastKeyword", keyword);

        if (search.length === totalCount) setHasMore(false);
        else setHasMore(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setIsLoading(false);
  }, [setSearchResult, keyword, keywordToUse]);

  useEffect(() => {
    if (page === INIT_PAGE) return;

    setIsLoading(true);
    const getData = async () => {
      try {
        const { search, totalCount } = await getSearch({
          keyword: keywordToUse,
          page,
        });

        setSearchResult((prevResults) => prevResults.concat(search));

        if (search.length === totalCount) setHasMore(false);
        else setHasMore(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setIsLoading(false);
  }, [page, setSearchResult, keywordToUse]);

  return { searchResult, isLoading, hasMore, setPage };
};

export default useSearch;
