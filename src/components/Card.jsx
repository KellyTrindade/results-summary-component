import Result from "./Result"
import Summary from "./Summary"

const Card = () => {
    return (
        <div className="h-full sm:h-fit sm:w-fit flex flex-col sm:flex-row justify-between shadow-2xl shadow-light-lavender/80 bg-white sm:rounded-3xl">
            <Result />
            <Summary />
        </div>
    )
}

export default Card