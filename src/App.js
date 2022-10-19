import './App.css';
import Header from './components/generalComponents/header/header'
import Profile from "./components/contantComponents/profile/Profile";
import SideBar from "./components/generalComponents/sideBar/sideBar";
import Dialogs from "./components/contantComponents/dialogs/dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Music from "./components/contantComponents/music/music";
import News from "./components/contantComponents/news/news";
import Settings from "./components/contantComponents/settings/settings";


function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <div className='header'>
                    <Header/>
                </div>
                <SideBar/>
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
