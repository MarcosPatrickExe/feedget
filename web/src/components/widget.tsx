import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './widgetForm';

export function Widget (){
/*  const [isWidgetOpen, setIsWidgetOpen] = useState(false); // Fazendo a desestruturação

    function toggleWidgetVisibility(){
        setIsWidgetOpen( !isWidgetOpen );
    }
*/
    return (
        <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-10 md:right-10 ">

            { /* isWidgetOpen && <p>Hello My Frieendddd!!!! </p> */ }
            { /* OU:  { isWidgetOpen ? <p>Hello My Frieendddd!!!! </p> : null}     */}

            <Popover.Panel> 
                    <WidgetForm />
            </Popover.Panel>


            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">                                    {/* thin, light, bold, regular, duotone */}
                 <ChatTeardropDots className="w-6 h-6" />{/* size="90" weight="regular" */}
           {/*    nome do icone de feedback */}

                 <span className="max-w-0  overflow-hidden  group-hover:max-w-xs transition-all duration-500 ease-linear">
                     {/* 'overflow-hidden' retira os itens de dentro
                         do botao caso ultrapassem o valor de largura maxima
                         dele q é zero  */}
                      <span className="pl-2">
                         Feedback
                      </span>
                 </span>
             </Popover.Button> 
        </Popover>
    );
}



// link do figma : 
// https://www.figma.com/file/2xrcH23LqfT73yVeWMKkag/Feedback-Widget-(Community)-(Community)?node-id=100%3A3925