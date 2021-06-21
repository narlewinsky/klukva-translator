import "./App.css";
import logo from './media/logo.svg';
import Board from './Board';

function App() {
    return (
        <div className="App">
            <div className="Background" />
            <img className="Logo" src={logo} alt="logo" />
            <div className="Header">
                <div className="Header-Content">
                    <h1>PEREVOD NA LATINICU EPOXI RUSSKOGO AVANGARDA</h1>
                    <p>
                    Zdesj mozhno perevesti tekst na russkom jazyke s kirillicy v varianty latinskogo pisjma sovetstkoj epoxi
                    (tri versii, predlozhennyje komissijej po latinizacii vo glave s professorom Jakovlevym), a takzhe v
                    sovremennuju adaptaciju etix projektov pod kodovymi nazvanijami "klükva" i "modern" (to zhe samoje, no bez digrafov/trigrafov).
                    </p>
                    <p>versija: 0.3.0;<br/>avtor: <a href="http://narlewinsky.online">nar levinskij</a></p>
                </div>
            </div>
            <Board />
        </div>
    );
}

export default App;
