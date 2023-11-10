import { Icon } from '@iconify/react';

const IconText = ({iconName, displayText, active}) => {
    return (
        <div className="flex items-center justify-start cursor-pointer">
            <div className='px-3 py-5'>
                <Icon 
                    icon={iconName} 
                    fontSize={25} 
                    color={active ? "white" : "gray"}
                />
            </div>

            <div className={`${active ? "text-white" : "text-gray-400"} font-semibold hover:text-white`}>
                {displayText}
            </div>
        </div>
    )
}

export default IconText;