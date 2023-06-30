import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>oopsss!!!</h1>
            <h1> something went wrong</h1>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}

export default Error;