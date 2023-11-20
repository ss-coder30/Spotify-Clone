const PasswordInput = ({label, placeholder, value, setvalue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2">
            <label htmlFor={label} className="font-semibold mt-5">
                {label}
            </label>
            <input type="password" id={label} placeholder={placeholder} 
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                value = {value}
                onChange = {(e) => setvalue(e.target.value)}>           
            </input>
        </div>
    )
}

export default PasswordInput;
