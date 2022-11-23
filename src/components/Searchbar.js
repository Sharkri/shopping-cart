import "../styles/Searchbar.css";

export default function Searchbar({ onChange, onClose, query }) {
  return (
    <div className="searchbar-container">
      <div className="search-bar">
        <input
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search products"
          autoComplete="off"
          value={query}
          onChange={(event) => onChange(event.target.value)}
        />
        <button className="query-search">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <button aria-label="close" onClick={onClose} className="close-searchbar">
        <i className="fa-solid fa-close" />
      </button>
    </div>
  );
}
