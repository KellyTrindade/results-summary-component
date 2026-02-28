const Button = (props) => {
    return (
        <div className="bg-dark-gray-blue p-4 mt-8 mb-4 rounded-full text-white font-bold text-sm hover:bg-linear-to-b hover:from-slate-blue hover:to-light-royal-blue transition">
            <a className="block text-lg" href="#">{props.text}</a>
        </div>
    )
}

export default Button