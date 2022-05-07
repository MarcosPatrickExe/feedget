
import { CloseButton } from '../../closeButton';
import { feedbackTypes } from '..';// importando objeto com os icones em SVGs e seus respectivos titulos

import { FeedbackType } from '..'; // importando o conjunto de tipos que um feedback pode ter


interface AddFeedbackProps { // "AddFeedbackProps" CORRESPONDE AO TIPO DO "PROPS" QUE SERÁ RECEBIDO NESSE COMPONENTE
     onFeedbackChanged : (type: FeedbackType) => void 
//   feedback recebe uma key do tipo "FeedBackType" que reprenta o tipo de 
//   arguemento que a funcao "onFeedbackChanged". Retornando 'void' logo depois
}

/*
// TAMBEM É POSSIVEL UTILIZAR O "TYPE" NO LUGAR DE INTERFACES:

type AddFeedbackProps2 = {
    onFeedbackChanged: (type: FeedbackType) => void 
}

*/



export function FeedbackTypeStep( props : AddFeedbackProps ){ 
// OU  props pode ser do tipo 'any' também!!
// export function feedbackTypeStep( props : any ){

// OU: 
// export function feedbackTypeStep( props : AddFeedbackProps ){

// OU:
// export function feedbackTypeStep( { onFeedbackChanged } : AddFeedbackProps ){ 

    return(
        <>
            <header>                    {/* Line-height = leading */}
                <span className="text-xl leading-6">Deixe seu comentario</span>
                <CloseButton />
            </header>


            <div className="flex py-8 gap-2 w-full items-center"> 

                { Object.entries(feedbackTypes)// CONVERTENDO ATRIBUTOS DO OBJETO EM VETOR
                    .map( ([key, value])=>{

                            return (
                                <button onClick={ ()=>{ props.onFeedbackChanged(key as FeedbackType )}} key={key} className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500  focus:outline-none" type="button"> 
                                    <img src={value.image.source} alt={value.image.alt}  />
                                    <span>{value.title}</span> 
                                </button>
                            ) 
                    })
                }
            </div>
        </>
    );
}