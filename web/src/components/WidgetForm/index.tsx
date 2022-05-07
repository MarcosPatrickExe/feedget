import { CloseButton } from '../closeButton';
import BugIcon from '../../assets/Bug.svg';
import IdeaIcon from '../../assets/Idea.svg';
import ThoughtIcon from '../../assets/Thought.svg';
import { useState } from 'react';

import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes; 
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

    function restartFeedback(){
        setFeedback(null);
    }


    return(
         <div className="bg-zine-900 p-4 relative rounded-2xl mb-5 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
               
                { (!feedback) ? (
                      <FeedbackTypeStep onFeedbackChanged={setFeedback} />

                   ) : (
                       
                      <FeedbackContentStep restartFeedback={restartFeedback}  feedbackType={feedback} />
                        /*  <p className="text-yellow-400 py-4">Obrigado pelo seu Feedback :)</p>   */
                    )
                }


                <footer className="text-xs text-neural-400">
                    Feito com amor pela <a className="underline underline-offset-1" href="https://rocketseat.com.br"> Rocketseat </a>
                </footer>
        </div>
    );
}