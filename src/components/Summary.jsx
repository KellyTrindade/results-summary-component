import Category from "./Category"
import Button from "./Button"

import categories from "../data/data.json"

const Summary = () => {
    return (
        <div className="sm:w-sm sm:rounded-full p-8 sm:px-8 sm:py-4 bg-white text-center">
            <h3 className="text-2xl sm:text-xl sm:my-5 font-bold text-left">Resumo</h3>
            <ul>
                {
                    categories.map( item => (
                            <li key={item.category}>
                                <Category
                                    category={item.category}
                                    score={item.score}
                                    icon={item.icon}
                                    color={item.color}
                                />
                            </li>
                        ) 
                    )
                }
            </ul>
            <Button 
                text="Continuar"
            />
        </div>
    )
}

export default Summary