export default function Searchbox() {
  return (
    <div className="flex gap-2 md:flex-row flex-col w-full md:items-center md:justify-center">
      <input
        type="search"
        placeholder="Search for a place..."
        className="bg-gray-900  rounded-xl p-2 text-white "
      />
      <button className="search__button md:bg-purple-500 bg-blue-500 flex-row rounded-xl px-4 py-2 hover:bg-red-500 text-white cursor-pointer">
        Search
      </button>
    </div>
  );
}
