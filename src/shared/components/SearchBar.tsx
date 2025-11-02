import { type FC, useState, useEffect } from "react";

interface Props {
  placeholder?: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar: FC<Props> = ({
  placeholder = "Buscar...",
  onSearchChange,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearchChange(query);
  }, [query, onSearchChange]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* <button onClick={() => onSearchChange(query)}>Buscar</button> */}
    </div>
  );
};
