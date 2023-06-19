import React, {useState} from "react";
import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import DataContext from "./contexts/DataContext";

const App = () => {
    const [advertPublic, setAdvertPublic] = useState(false);
    const [digitalMarketingCommunication, setDigitalMarketingCommunication] = useState(false);
    const [promotionMarketingCommunication, setPromotionMarketingCommunication] = useState(false);
    const [brandManagement, setBrandManagement] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [isStarActive, setIsStarActive] = useState({});
    const [starName, setStarName] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
    <div className="App">
        {isFullscreen ? (
                <DataContext.Provider value={{
                    brandManagement, advertPublic,
                    digitalMarketingCommunication, promotionMarketingCommunication,
                    marketing, setPromotionMarketingCommunication,
                    setAdvertPublic, setBrandManagement,
                    setMarketing, setDigitalMarketingCommunication,
                    isStarActive, setIsStarActive,
                    starName, setStarName,
                    isFullscreen, setIsFullscreen
                }}>
                    <div className="container">
                        <Content/>
                    </div>
                </DataContext.Provider>
        )
            :  (<DataContext.Provider value={{
            brandManagement, advertPublic,
            digitalMarketingCommunication, promotionMarketingCommunication,
            marketing, setPromotionMarketingCommunication,
            setAdvertPublic, setBrandManagement,
            setMarketing, setDigitalMarketingCommunication,
            isStarActive, setIsStarActive,
            starName, setStarName,
            isFullscreen, setIsFullscreen
        }}>
            <div className="container">
                <Header/>
                <Content/>
            </div>
            <Footer/>
        </DataContext.Provider>)}

    </div>
  );
}
export default App;
