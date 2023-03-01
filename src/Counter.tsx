import { FunctionComponent, PropsWithChildren } from "react"

type Props = PropsWithChildren <{
    start?: number
}>

export const Counter: FunctionComponent<Props> = ({start = 0, children}) => {
    return (<div>
        <h2>Counter</h2>
        <p>{children}</p>
        <p>current {start}</p>
        <button>increment</button>
    </div>)
}