import "../styles/Searchbar.css";

export default function Searchbar({
  onChange = () => {},
  onClose,
  onSubmit,
  query,
}) {
  return (
    <form
      className="searchbar-container"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(query);
      }}
    >
      <div className="search-bar">
        <input
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search products"
          autoComplete="off"
          value={query}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
          required
        />

        <button
          className="query-search"
          type="submit"
          aria-label="submit search"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>

      <button
        aria-label="close"
        onClick={onClose}
        className="close-searchbar"
        type="button"
      >
        <i className="fa-solid fa-close" />
      </button>
    </form>
  );
}
