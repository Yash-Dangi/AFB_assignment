export default function SearchBar({ onChange }) {
    return (
      <div className="w-full p-2  flex justify-center item-center">
        <div className="w-full">
          <input
            onChange={onChange}
            type="text"
            className="p-2 border border-2  outline-none text-gray-500 foucs:outline-none w-full h-10 rounded "
            placeholder="Search pincode,region,state"
          />
        </div>
      </div>
    );
  }