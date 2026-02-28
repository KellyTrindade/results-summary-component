const Category = (props) => {
    const iconURL = new URL(props.icon, import.meta.url).href

    return (
        <div className="rounded-xl text-lg sm:text-base p-5 sm:p-3 my-4 font-bold flex items-center justify-between" style={{backgroundColor: `color-mix(in hsl, var(${props.color}), transparent 90%)`}}>
            <div className="flex gap-3" style={{color: `var(${props.color})`}}>
                <img 
                    src={iconURL} 
                    alt={`Ícone da categoria: ${props.category}`} 
                    />
                <span>{props.category}</span>
            </div>
            <div>
                <span className="text-gray-400">
                    <span className="text-dark-gray-blue">{props.score}</span> / 100
                </span>
            </div>
        </div>
    )
}

export default Category