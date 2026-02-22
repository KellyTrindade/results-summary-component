const Button = (props) => {
    return (
        <div className="bg-dark-gray-blue py-3 mt-8 mb-4 rounded-full text-white font-bold text-sm">
            <button>{props.text}</button>
        </div>
    )
}

export default Button