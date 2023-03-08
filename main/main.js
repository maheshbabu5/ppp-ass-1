import { useEffect } from "react";
import axios from "axios";

const Main = () => {
    useEffect(() => {
        axios.get("http://localhost:1337/api/oldschool").then((oldschoolgame) => {

        }).catch(() => {

        }).finally(() => {

        });
        axios.get("http://localhost:1337/api/best").then((bestgame) => {

        }).catch(() => {

        }).finally(() => {

        });

    }, [])
    return (
        <>

        </>
    )
}

export default Main;