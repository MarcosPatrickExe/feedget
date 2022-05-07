
import { CloseButton } from '../../closeButton';
import { FeedbackType } from '../index';
import { feedbackTypes } from '..';// importando objeto com os icones em SVGs e seus respectivos titulos
import { ArrowLeft } from 'phosphor-react';


interface ItypeFeedback {
    feedbackType : FeedbackType;
    restartFeedback: () => void;
}

export function FeedbackContentStep( { feedbackType, restartFeedback } : ItypeFeedback){

    const feedbackSelected = feedbackTypes[feedbackType];

    return (
        <>
            <header>   
                <button 
                    type="button"
                    onClick={restartFeedback}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                        
                         <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>


                                 {/* Line-height = leading */}
                <span className="ml-7 text-xl leading-6 flex items-center gap-2">
                   
                    <img src={feedbackSelected.image.source} alt={feedbackSelected.image.alt} className="h-6 w-6" />
                    {feedbackSelected.title}
                </span>


                <CloseButton />
            </header>


            <form className="my-4 w-full">
                <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none" 
                          placeholder="Conte com detalhes...." />
            </form>
        </>
    );
}