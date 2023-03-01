import { FunctionComponent, PropsWithChildren, useState } from "react"

type Props = PropsWithChildren <{
    start?: number
}>

export const Counter: FunctionComponent<Props> = ({start = 0, children}) => {
    const [n, setN] = useState<number>(start)
    const incr = () => setN(n => n + 1)

    return (<div>
        <h2>Counter</h2>
        <p>{children}</p>
        <p>current {n}</p>
        <button onClick={incr}>increment</button>
    </div>)
}