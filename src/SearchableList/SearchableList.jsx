import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  // storing the current search term
  const lastChange = useRef;
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    // if there is an ongoing timer we clear it and start a new timer
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    // store timer id in the ref
    lastChange.current = setTimeout(() => {
      // need to manually remove the ID
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
