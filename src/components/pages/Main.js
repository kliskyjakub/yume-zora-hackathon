import {Routes, Route, Navigate} from "react-router-dom";
import styles from "./Main.module.css";
import Docs from "./Docs";
import Roadmap from "./Roadmap";
import Home from "./Home";
import Team from "./Team";
import Dashboard from "./Dashboard";
import Detail from "./Detail";
import WalletButton from "../walletButton/WalletButton"

const Main = () => {
    return (
        <div className={styles["main_wrapper"]}>
            <WalletButton/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/docs" element={<Docs/>}/>
                <Route path="/roadmap" element={<Roadmap/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}></Route>
            </Routes>
        </div>
    );
};

export default Main;