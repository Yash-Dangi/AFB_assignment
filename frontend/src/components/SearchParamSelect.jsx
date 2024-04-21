export default function SearchParamSelect({ onChange }) {
    return (
      <div className="flex p-2 w-64 justify-center item-center">
        <select
          onChange={onChange}
          defaultValue="PinCode"
          id="countries"
          className="text-center text-lg w-full bg-gray-500 outline-none border border-gray-300 text-white text-sm rounded-lg   w-full p-2"
        >
          {/* <option>Choose a country</option> */}
          <option value="PinCode">Pincode</option>
          <option value="Circle Name"> Circle Name</option>
          <option value="District">District</option>
          <option value="Division Name">Division Name</option>
          <option value="Office Name">Office Name</option>
          <option value="Region Name">Region Name</option>
          <option value="StateName">State</option>
        </select>
      </div>
    );
  }
