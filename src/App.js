import { useRoutes } from "react-router-dom";
import Nav from "./components/navigation-bar/Nav";
import routes from "./routes";
import LiveBg from "./components/background-live/LiveBg";
// import { useEffect } from "react";

export default function App() {
    const router = useRoutes(routes);

    // useEffect(() => {
    //     fetch("https://randomuser.me/api").then(resp => {
    //         console.log(resp);
    //     })
    //         .catch(err => {
    //             console.log("%c" + err, "background-color:rgb(127,98,32,0.5)");
    //         })
    // }, [])
    return (
        <>
            <Nav />
            <LiveBg />
            {router}
        </>
    )
}