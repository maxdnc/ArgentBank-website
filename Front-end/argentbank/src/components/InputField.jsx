const InputField = ({ label, id, value, onChange, readOnly }) => (
  <div className="flex flex-col items-center justify-center gap-1">
    <label className="font-bold text-white" htmlFor={id}>
      {label}
    </label>
    <input
      type="text"
      id={id}
      className={`w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem] ${
        readOnly ? 'bg-gray-300' : ''
      }`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);
export default InputField;
