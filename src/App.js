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
                    Zdesj możno perevesti tekst na russkom jazyke iz kirillicy v varianty latinskogo pisjma sovetstkoj epoxi
                    (tri versii, predlożennyje komissijej po latinizacii vo glave s professorom Jakovlevym), a także v
                    sovremennuju adaptaciju etix projektov pod kodovym nazvanijem "Klükva".
                    </p>
                    <p>Versija: 0.2.0<br/>Avtor: <a href="http://narlewinsky.online">Nar Lewinsky ➦</a></p>
                </div>
            </div>
            <Board />
        </div>
    );
}

export default App;
