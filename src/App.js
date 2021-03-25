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
                    <h1>PEREVOD NA RUSSKUJU LATINICU</h1>
                    <p>Perevodi legko russkij tekst s kirillicy na sovremennyj projekt latinicy, osnovannyj na rezuljtatax raboty komissii po razrabotke projekta o latinizacii russkogo alfavita vo glave s professorom N. F. Jakovlevym.</p>
                </div>
            </div>
            <Board />
        </div>
    );
}

export default App;
