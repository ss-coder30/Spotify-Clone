const TextInput = ({label, placeholder}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input type="text" id={label} placeholder={placeholder} 
            className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500">
                
            </input>
        </div>
    )
}

export default TextInput
