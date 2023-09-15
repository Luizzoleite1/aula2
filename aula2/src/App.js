import OlaMundo from './components/olaMundo';
import BomDia from './components/frases';
import DigaMeuNome from './components/digaMeuNome';
import './App.css'


function App() {
  return (
    <div className = 'container'>
    <h1>Olá mundo</h1>
    <DigaMeuNome nome = ' Luiz' profissao="Garoto de programa, JS" 
    idade="16" sonho="Ser rico" />
  
    <OlaMundo />
    <BomDia />
    </div>
  );

}

export default App;
