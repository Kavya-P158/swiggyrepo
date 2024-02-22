import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h3>The page you are looking for is not found!</h3>
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}