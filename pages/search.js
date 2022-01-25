import { useRouter } from "next/router";
import plants from "../data/plants.json";
import zombies from "../data/zombies.json";
import areas from "../data/areas.json";
import DataCard from "../components/DataCard";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const router = useRouter();
  const {
    query: { search_term, need_url, thing_type },
  } = router;

  const props = {
    search_term,
    need_url,
    thing_type,
  };

  const dataTags = () => {
    const mapper = {
      plants: plants,
      zombies: zombies,
      areas: areas,
    };
    var data_type = thing_type;
    var term = search_term;
    var urls = need_url;
    if (
      typeof thing_type === "undefined" ||
      typeof search_term === "undefined" ||
      typeof need_url === "undefined"
    ) {
      data_type = "areas";
      term = "ancient egypt";
      urls = "/assets/areas/Ancient Egypt.png";
    }
    const res = [];
    Object.keys(mapper[data_type].data[term]).map((key) => {
      res.push([key, mapper[data_type].data[term][key]]);
    });
    return res;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <SearchBar />
        <DataCard data={dataTags()} />
      </div>
    </>
  );
};

export default Search;
