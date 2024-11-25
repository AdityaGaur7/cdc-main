import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Loading } from "./loding";
import { Navbar } from "./Header";

export function AppLayout(){

    const navigation =useNavigation();
    if(navigation.state==="loading") return <Loading/>

    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}