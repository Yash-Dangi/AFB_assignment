export default function FormElement({ label, value , onChange}) {
  return (
    <div className="flex gap-4 text-lg mb-2">
      <div className="w-2/5 font-semibold">{label}:</div>
      <div className="w-full">
        <input
          className="px-2 w-full rounded-md border border-gray-300 text-black placeholder:text-gray-500 "
          type="text"
          defaultValue={value}
          onChange= {onChange}
          required
        />
      </div>
    </div>
  );
}
