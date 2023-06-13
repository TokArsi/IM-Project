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
    console.log('advertPublic', advertPublic);
    console.log('digitalMarketingCommunication', digitalMarketingCommunication);
    console.log('promotionMarketingCommunication', promotionMarketingCommunication);
    console.log('brandManagement', brandManagement);
    console.log('marketing', marketing);
    return (
    <div className="App">
        <DataContext.Provider value={{
            brandManagement, advertPublic,
            digitalMarketingCommunication, promotionMarketingCommunication,
            marketing, setPromotionMarketingCommunication,
            setAdvertPublic, setBrandManagement,
            setMarketing, setDigitalMarketingCommunication,
        }}>
        <Header/>
        <Content/>
        <Footer/>
        </DataContext.Provider>
    </div>
  );
}
export default App;
