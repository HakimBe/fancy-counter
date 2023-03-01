import { FunctionComponent, PropsWithChildren, useState } from "react"

type Props = PropsWithChildren <{
    start?: number
}>

export const Counter: FunctionComponent<Props> = ({start = 0, children}) => {
    const [n, setN] = useState<number>(start)
    const incr = () => setN(n => n + 1)

    return (<div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Counter</h2>
        <p>{children}</p>
        <div className="bg-yellow-500 rounded-full p-6 shadow-lg">
            <p className="text-5xl font-bold text-gray-900">
                {n}
            </p>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={incr}>pop</button>
    </div>)
}