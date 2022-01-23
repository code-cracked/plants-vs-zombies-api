import { NextPage } from "next";
import { useRouter } from "next/router";
const Search: NextPage = () => {
  const router = useRouter();
  const {
    query: { search_term, need_url },
  } = router;
  const props = {
    search_term,
    need_url,
  };
  console.log(props.search_term);
  console.log(props.need_url);
  return <h1>{props.search_term}</h1>;
};
export default Search;
