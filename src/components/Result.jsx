import data from "../data/data.json"

const getAverageScore = () => {
    let averageScore = 0

    data.map(item => {
        averageScore += item.score
    } )

    return ( Math.round( averageScore / data.length ) )
}

const Result = () => {
    return (
        <div className="h-105 sm:h-full sm:w-80 p-8 bg-linear-to-b from-slate-blue to-light-royal-blue flex flex-col items-center text-center rounded-b-3xl sm:rounded-3xl">
            <h3 className="text-2xl sm:text-lg font-bold text-left text-light-lavender">Seu Resultado</h3>
            <div className="rounded-full bg-linear-to-b from-violet-blue to-persian-blue py-10 px-12 mt-6 max-w-fit">
                <h1 className="text-white font-bold text-6xl">{getAverageScore()}</h1>
                <span className="text-light-lavender">de 100</span>
            </div>
            <div className="p-6">
                <h2 className="font-bold text-white text-3xl sm:text-xl mb-3">Bom</h2>
                <span className="text-light-lavender text-lg sm:text-base">Sua pontuação está acima de 65% das pessoas que realizaram estes testes.</span>
            </div>
        </div>
    )
}

export default Result