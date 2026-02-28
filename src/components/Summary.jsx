import Category from "./Category"
import Button from "./Button"

import categories from "../data/data.json"

const Summary = () => {
    return (
        <div className="py-4 px-8 bg-white text-center">
            <h3 className="text-2xl font-bold text-left">Resumo</h3>
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