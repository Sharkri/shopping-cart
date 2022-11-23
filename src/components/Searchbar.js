import "../styles/Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar-container">
      <div className="search-bar">
        <input
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search products"
          autoComplete="off"
        />
        <button className="query-search">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
}
