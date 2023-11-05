const PasswordInput = ({label, placeholder}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2">
            <label for={label} className="font-semibold mt-5">
                {label}
            </label>
            <input type="password" id={label} placeholder={placeholder} 
            className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500">
                
            </input>
        </div>
    )
}

export default PasswordInput;