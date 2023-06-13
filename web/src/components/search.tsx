import Fuse from "fuse.js";
import { useState } from "react";
// Configs fuse.js
// https://fusejs.io/api/options.html

const options = {
  keys: ["data.title", "data.description", "slug", "data.tags"],
  isCaseSensitive: false,
  minMatchCharLength: 3,
  threshold: 0.5,
};

type SearchListProps = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    tags?: string[];
  };
  render: unknown;
}[];

export interface SearchProps {
  searchList: SearchListProps;
}

const Search = ({ searchList }: SearchProps) => {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);
  //console.log(searchList);

  // Set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center gap-2">
          <input
            className="w-full rounded-lg border-2 border-border bg-input p-2 text-text-2"
            type="text"
            value={query}
            onChange={handleOnSearch}
            placeholder="Search the Docs..."
          />
        </div>
        {query.length > 1 && (
          <p className="my-2 text-lg text-text-2">
            Found {posts.length} {posts.length === 1 ? "result" : "results"}{" "}
            for&nbsp;&rsquo;{query}&rsquo;
          </p>
        )}
        <div className="small-scrollbar my-2 max-h-64 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {posts &&
              posts.map((post, index) => (
                <li className="rounded-xl bg-surface-2 p-4" key={index}>
                  {/* eslint-disable-next-line react/jsx-key */}
                  <a href={`/docs/${post.slug}`}>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-text-3">{post.data.title}</p>
                      <p className="text-md text-text-5">
                        {post.data.description}
                      </p>
                      <div className="ml-2 flex gap-2">
                        {/* eslint-disable-next-line react/no-array-index-key */}
                        {Array.isArray(post.data.tags) && (
                          <div className="ml-2 flex flex-wrap gap-2">
                            <p>🏷️</p>
                            {post.data.tags.map((tag, tagIndex) => (
                              <p
                                key={tagIndex}
                                className="rounded-md bg-surface-3 p-1 text-xs text-text-5"
                              >
                                {tag}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
