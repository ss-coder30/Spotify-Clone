const TextInput = ({label, placeholder, className, value, setvalue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 my-4">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input type="text" id={label} placeholder={placeholder} 
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500" value = {value}
                onChange = {(e) => setvalue(e.target.value)}>
            </input>
        </div>
    )
}

export default TextInput
