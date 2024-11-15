import { useRoutes } from "react-router-dom";
import Nav from "./components/navigation-bar/Nav";
import routes from "./routes";
// import LiveBg from "./components/background-live/LiveBg";

export default function App() {
    const router = useRoutes(routes);

    return (
        <>
            <Nav />
            {/* <LiveBg /> */}
            {router}
        </>
    )
}