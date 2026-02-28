const Button = (props) => {
    return (
        <div className="bg-dark-gray-blue p-4 sm:p-3 mt-8 rounded-full text-white font-bold text-sm hover:bg-linear-to-b hover:from-slate-blue hover:to-light-royal-blue transition">
            <a className="block text-lg sm:text-base" href="#">{props.text}</a>
        </div>
    )
}

export default Button