import { CloseButton } from '../../closeButton';
import { FeedbackType } from '../index'; // OU '..'
import { feedbackTypes } from '..';// importando objeto com os icones em SVGs e seus respectivos titulos
import { ArrowLeft } from 'phosphor-react';
import { ScreenshotButton } from '../ScreenshotButton';
import { FormEvent, useState } from 'react';


interface ItypeFeedback {
    feedbackType : FeedbackType
    restartFeedback: () => void //funcao q altera as telas
    onFeedbackSent: () => void //funcao que é chamada quando um feedback é enviado
}

    // COMPONENTE DE ONDE SERÃO EXIBIDAS OS TIPOS DE FEEDBACKs DISPONIVEIS PARA ESCOLHER!
export function FeedbackContentStep( { feedbackType, restartFeedback, onFeedbackSent } : ItypeFeedback){

    const feedbackSelected = feedbackTypes[feedbackType];// CAPTURANDO O TIPO DE FEEDBACK SELECIONADO
    const [ screenshot, setScreenshot] = useState<string | null>(null);
    const [ comment, setComment ] = useState('');

    function sendFeedback(event : FormEvent){// O TIPO "FormEvent" FOI IMPORTADO DIRETAMENTE DO REACT
        event.preventDefault();
    // Previnindo q o evento de atualizar tela após envio do formulário ocorra, uma vez q isso já ocorre por padrão!

        console.log({screenshot, comment});
        onFeedbackSent();//função q envia o feedback e a tela muda
    }

    return (
        <>
            <header>   
                <button 
                    type="button"
                    onClick={restartFeedback}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                        
                         {/* Icone da seta esquerda */}
                         <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>


                                 {/* Line-height = leading */}
                <span className="ml-12 pl-12 text-xl leading-6 flex flex-row items-center  gap-2">
                    {feedbackSelected.title}
                    <img src={feedbackSelected.image.source} alt={feedbackSelected.image.alt} className="h-6 w-6" />
                </span>


                <CloseButton />
            </header>


            <form onSubmit={sendFeedback} className="my-4 w-full">
                    <textarea 
                       onChange={ event=>{setComment(event.target.value)} }
                       placeholder="Conte com detalhes...."
                       className="min-w-[304px] 
                                  w-full 
                                  min-h-[112px] 
                                  text-sm 
                                  placeholder-zinc-400 
                                  text-zinc-100 
                                  border-zinc-600 
                                  bg-transparent 
                                  rounded-md 
                                  focus:border-brand-500
                                  focus:ring-brand-500 
                                  focus:ring-1 
                                  focus:outline-none 
                                  resize-none
                                  scrollbar
                                  scrollbar-thumb-zinc-700
                                  scrollbar-track-transparent
                                  scrollbar-thin" 
                    />
            
                    <footer className="flex gap-2 mt-2">
                          <ScreenshotButton screenshotFunction={setScreenshot} screenshot={screenshot}/>

                          <button 
                               disabled= { comment.length==0 }
                               type="submit" 
                               className="bg-brand-500 
                                            rounded-md 
                                            border-transparent 
                                            flex-1 
                                            flex 
                                            justify-center 
                                            itens-center 
                                            py-2 
                                            text-xl 
                                            hover:bg-brand-300 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-offset-2 
                                            focus:ring-offset-zinc-900 
                                            focus:ring-brand-500
                                            transition-colors
                                            disabled:opacity-50
                                           disabled:hover:bg-brand-500
                                            ">
                                Enviar FeedBack
                          </button>
                    </footer>

            </form>
        </>
    );
}