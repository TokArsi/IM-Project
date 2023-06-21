import React from "react";
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {DesktopView, MobileView} from "./components/DesktopView";

const App = () => {
    const isDesktop = useMediaQuery('(min-width: 1200px)' );
    return (
    <div className="App">
        {isDesktop ? <DesktopView/> : <MobileView/>}
    </div>
  );
}
export default App;
