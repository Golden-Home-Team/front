import {MainPage} from "./common/page/MainPage";
import {Route, Routes, useLocation, useNavigate, useNavigation} from "react-router-dom";
import {RoutePath} from "./RoutePath";
import {SignUpPage} from "./domains/auth/pages/SignUpPage";
import {Resize} from "./component/Resize";
import {LoginPage} from "./domains/auth/pages/LoginPage";
import {FacilityListPage} from "./domains/facility/pages/FacilityListPage";


function App() {
    return (
        <>
            <Resize/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path={RoutePath.main} element={<MainPage/>}/>
                <Route path={RoutePath.signUp} element={<SignUpPage/>}/>
                <Route path={RoutePath.login} element={<LoginPage/>}/>
                <Route path={RoutePath.facilityList} element={<FacilityListPage/>}/>
            </Routes>
        </>
    )
}

export default App
