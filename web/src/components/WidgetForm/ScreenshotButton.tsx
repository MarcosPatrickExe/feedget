import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import {useState } from 'react';
import { Loading } from '../Loading';

interface IScreenshotFunction{
    screenshot: string | null,
    screenshotFunction: (type: string | null ) => void // NO LUGAR DO "TYPE" TBM PODERIA SER "screenshot"
}

export function ScreenshotButton( {screenshotFunction, screenshot} : IScreenshotFunction){

    const [isLoadingPrint, loadingPrint] = useState<boolean | null>(false);

//  FUNCAO ASSINCRONA QUE IRA FICAR EXECUTANDO ENQUANTO O RESTO DO PROGRAMA ESTIVER SENDO EXECUTADO
    async function handleTakeScreenShort(){
        loadingPrint(true);

        const canvas = await html2canvas(document.querySelector('html')! ); // o sinal de exclamação define q o querySelector irá SEMPRE retornar um valor do tipo "HTMLElement"
       
        // convertendo o print de toda a pagina contida na tag 'html' para o formato de texto que representa uma imagem!
        const base64image = canvas.toDataURL('image/png');
        
        // É POSSIVEL VER A IMAGEM EM FORMA DE TEXTO NO CONSOLE E COLAR ESSE TEXTO/CODIGO EM OUTRA ABA E VER O CONTEUDO DA IMAGEM!!!
       // console.log(base64image);

       loadingPrint(false);
       screenshotFunction(base64image);// passando os dados da imagem para o componente-pai, q é "FeedbackContentStep"
    }

    if(screenshot){
        return (
            <button
                  type="button"
                  className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                  style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180  }}
                  onClick={()=>{ screenshotFunction(null) }}
                  >

                  <Trash weight="fill" />
            </button>
        );
    }


    return(
         <button type="button" 
                 onClick={handleTakeScreenShort}
                 className="p-2 
                            bg-zinc-800 
                            rounded-md 
                            border-transparent 
                            hover:bg-zinc-700 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-offset-2 
                            focus:ring-offset-zinc-900 
                            focus:ring-brand-500
                            transition-colors">

                 { isLoadingPrint ? < Loading /> : <Camera className="w-6 h-6 text-zing-900" /> }       
          </button>
    );
    
}