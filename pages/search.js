import { NextPage } from "next";
import { useRouter } from "next/router";
import plants from "../data/plants.json";
import zombies from "../data/zombies.json";
import areas from "../data/areas.json";
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

  // Function: Get [name,type] => [[key,value],[key,value]]
  const dataTags = () => {
    const mapper = {
      plants: plants,
      zombies: zombies,
      areas: areas,
    };

    const res = [];
    Object.keys(mapper[thing_type].data[search_term]).map((key) => {
      res.push([key, mapper[thing_type].data[search_term][key]]);
    });
    return res;
  };

  <DataCard data={dataTags()} />;
};
export default Search;
