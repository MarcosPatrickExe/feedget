
import { Widget } from './components/widget';

interface ButtonProps {
   text?: string // '?' define um atributo com valor opcional 
}

function Botao ( propriedades : ButtonProps ){
     return (
        <div>
            <button className="bg-[#8257e6] px-4 h-10 rounded">
              {propriedades.text ?? 'default'}
            </button> 
        </div>
      );
}

function Botao2 ( {text} : ButtonProps ){
     return <button className="cor-botao">{text ?? 'botao default'}</button>
}


function App() {
    //const [count, setCount] = useState(0)

    return (
      <div>
           <Widget />
      </div>
       /* <div className="flex gap-2">
            <h1> Hellow world!!</h1>
            <Botao text="botao 1" />
            <Botao text="botao 2" />
            <Botao2 /> 
        
          </div>
       */
    )
}

export default App;