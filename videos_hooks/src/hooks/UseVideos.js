import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = ({defaultSearchTerm}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const results = await youtube.get("/search", { params: { q: term } });
      setVideos(results.data.items);
    } catch (err) {
      console.log(err);
    }
  };

//   return {videos, onSubmitSearch}; JS convention
  return [videos, search]; // react convention
};

export default useVideos;

