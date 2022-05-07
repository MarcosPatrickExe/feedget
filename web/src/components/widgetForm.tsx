import { CloseButton } from './closeButton';
import BugIcon from '../assets/Bug.svg';
import IdeaIcon from '../assets/Idea.svg';
import ThoughtIcon from '../assets/Thought.svg';
import {useState} from 'react';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugIcon,
            alt: 'imagens de um inseto'
        }
    },
    IDEIA: {
        title: 'Idea',
        image: {
            source: IdeaIcon,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: ThoughtIcon,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}

type FeedbackType = keyof typeof feedbackTypes; 
// pegando os tipos possiveis que um feedback pode apresentar

/*
    O "typeof" retorna a estrura tipagens dos atributos, que por sua vez são propriedades
    do objeto "feedbackTypes", ou seja ele, sozinho sem o "keyof" retornaria:

    type FeedbackType = {
        BUG: {
            title: string;
            image: {
                source: string;
                alt: string;
            };
        };
        IDEIA: {
            title: string;
            image: {
                source: string;
                alt: string;
            };
        };
        OTHER: {
            title: string;
            image: {
                source: string;
                alt: string;
            };
        };
    }
 
    *** Por outro lado, caso haja o "keyof" afrente do "typeof"
    será retornado apenas os tipos das propriedades raizes do objeto
    original, e não os tipos atributos pertencentes aos atributos do
    objeto. Ficando assim:

    "BUG" | "IDEIA" | "OTHER"
*/

export function WidgetForm(){

    const [feedback, setFeedback] = useState <FeedbackType | null>(null);

    return(
    
         <div className="bg-zine-900 p-4 relative rounded-2xl mb-5 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                <header>                    {/* Line-height = leading */}
                    <span className="text-xl leading-6">Deixe seu comentario</span>
                    <CloseButton />
                </header>
                

                { !feedback ? (

                    <div className="flex py-8 gap-2 w-full items-center"> 
                        { Object.entries(feedbackTypes)// CONVERTENDO ATRIBUTOS DO OBJETO EM VETOR
                            .map( ([key, value])=>{

                                    return (
                                        <button onClick={ ()=>{ setFeedback(key as FeedbackType )}} key={key} className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500  focus:outline-none" type="button"> 
                                            <img src={value.image.source} alt={value.image.alt}  />
                                            <span>{value.title}</span> 
                                        </button>
                                    ) 
                            })
                        }
                    </div>

                    ) : (<p className="text-yellow-400 py-4">Obrigado pelo seu Feedback :)</p>)
                }


                <footer className="text-xs text-neural-400">
                    Feito com amor pela <a className="underline underline-offset-1" href="https://rocketseat.com.br"> Rocketseat </a>
                </footer>
        </div>
    );
}