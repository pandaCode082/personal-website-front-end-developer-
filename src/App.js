import { useRoutes } from "react-router"
import routes from "./routes"

export default function App() {
    const router = useRoutes(routes)
    return (
        <>
            {router}
        </>
    )
}