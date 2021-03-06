//import { CloseButton } from '../closeButton';
import BugIcon from '../../assets/Bug.svg';
import IdeaIcon from '../../assets/Idea.svg';
import ThoughtIcon from '../../assets/Thought.svg';
import { useState } from 'react';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { Heart } from 'phosphor-react';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';


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
            alt: 'Imagem de uma l?mpada'
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
    O "typeof" retorna a estrura tipagens dos atributos, que por sua vez s?o propriedades
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
    ser? retornado apenas os tipos das propriedades raizes do objeto
    original, e n?o os tipos atributos pertencentes aos atributos do
    objeto. Ficando assim:

    "BUG" | "IDEIA" | "OTHER"
*/

export function WidgetForm(){

    const [feedback, setFeedbackType] = useState <FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function restartFeedback(){
        setFeedbackType(null);// O valor 'null' corresponde ? 'false'
        setFeedbackSent(false);
    }


    return(
        <div className="bg-zine-900 p-4 relative rounded-2xl mb-5 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
               
            { (feedbackSent) ? (
                    <FeedbackSuccessStep restartFeedback={restartFeedback} />
              ) : (
                <>
                    {(!feedback) ? (
                            <FeedbackTypeStep onFeedbackChanged={setFeedbackType} />
                    
                        ) : (
                            <FeedbackContentStep 
                                    restartFeedback={restartFeedback} 
                                    feedbackType={feedback} 
                                    onFeedbackSent={ ()=>setFeedbackSent(true)  }
                            />
                            /*  <p className="text-yellow-400 py-4">Obrigado pelo seu Feedback :)</p>   */
                    )}
                </>
              )
            }


            <footer className="text-xs flex items-center gap-2 text-neural-400">
                Feito com amor <Heart weight="fill"/> pela <a className="underline underline-offset-1" href="https://rocketseat.com.br"> Rocketseat </a>
            </footer>
        </div>
    );
}