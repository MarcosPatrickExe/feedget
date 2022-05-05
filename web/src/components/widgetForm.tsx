import { CloseButton } from './closeButton';
import BugIcon from '../assets/Bug.svg';
import IdeaIcon from '../assets/Idea.svg';
import ThoughtIcon from '../assets/Thought.svg';

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

export function WidgetForm(){

    return(
        <div className="bg-zine-900 p-4 relative rounded-2xl mb-5 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>                    {/* Line-height = leading */}
                <span className="text-xl leading-6">Deixe seu comentario</span>
                <CloseButton />
            </header>
            

            <div className="flex py-8 gap-2 w-full items-center">
                 
               { Object.entries(feedbackTypes)// CONVERTENDO ATRIBUTOS DO OBJETO EM VETOR
                      .map( ([key, value])=>{

                            return (
                                <button className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500  focus:outline-none" type="button"> 
                                    <img src={value.image.source} alt={value.image.alt}  />
                                    <span>{value.title}</span> 
                                </button>
                            ) 
                       })
                } 
            </div>


            <footer className="text-xs text-neural-400">
                Feito com amor pela <a className="underline underline-offset-1" href="https://rocketseat.com.br"> Rocketseat </a>
            </footer>
        </div>
    );
}