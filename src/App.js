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
                    Zdesj możno perevesti tekst na russkom jazyke iz
                    kirilliçeskogo alfavita v latinskoje pisjmo sovetskoj epoxi
                    (tri varianta, predlożennyje komissijej latinizacii vo glave s professorom Jakovlevym)
                    i v sovremennyj variant latinicy pod kodovym nazvanijem "Klükva",
                    osnovannym na principax sovetskix prektov.
                    </p>
                    <p>Versija: 0.2.0<br/>Avtor: <a href="http://narlewinsky.online">Nar Lewinsky ➦</a></p>
                </div>
            </div>
            <Board />
        </div>
    );
}

export default App;
