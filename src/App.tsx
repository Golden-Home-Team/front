import {MainPage} from "./page/MainPage";
import {Header} from "./component/organisms/Header";
import {Footer} from "./component/organisms/Footer";
import {Route, Routes} from "react-router-dom";
import {RoutePath} from "./RoutePath";
import {SignUpPage} from "./page/SignUpPage";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path={RoutePath.main} element={<MainPage/>}/>
                <Route path={RoutePath.signUp} element={<SignUpPage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
