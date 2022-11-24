export default function OpenSearchbar({ onSearchbarOpen }) {
  return (
    <button
      aria-label="open searchbar"
      onClick={onSearchbarOpen}
      className="open-searchbar"
    >
      <i className="fa-solid fa-magnifying-glass" />
    </button>
  );
}
