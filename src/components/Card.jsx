import Result from "./Result"
import Summary from "./Summary"

const Card = () => {
    return (
        <div className="h-full flex flex-col justify-between shadow-2xl shadow-light-lavender/80 bg-white rounded-2xl">
            <Result />
            <Summary />
        </div>
    )
}

export default Card