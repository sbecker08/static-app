import Image from 'next/image'

import TwoColumnWideLeftContainer from '../modules/LayoutContainers/TwoColumnWideLeftContainer/TwoColumnWideLeftContainer';
import CenterContainer from '../modules/LayoutContainers/CenterContainer/CenterContainer';

function GlobalFooter({ title, subTitle, content, button }) {
  

    const links = [ 'Privacy Policy', 'Corporate Social Responsibility Policy', 'A Commitment to Sustainability', 'Terms of Use', 'Client Portal Terms & Conditions', 'Site Map' ]
    const secondaryLinks = [ 'About', 'News & Events', 'Contact'  ]

    return (
        <div className="bg-mm-blue pt-16">     
                   
            <CenterContainer>  
                <TwoColumnWideLeftContainer
                    left={(
                        <div className="p-2 pr-24 pt-4">
                            <h4 className="text-mm-orange" >{title}</h4>
                            <h2 className="text-white" >{subTitle}</h2>
                            <p className="text-white" >{content}</p>
                        </div>
                    )}
                    right={(
                        <div className="p-2 pl-12 pt-4 border-l-gray-600 border-l">
                            <Image src="https://www.marcusmillichap.com/Areas/MM/img/MM_logo2018_white.svg" alt="dallesInn" width={185} height={70} />
                            <div className="pt-6" ></div>
                            <ul className="text-white">
                                {links.map(l => (
                                    <li key={l} className="mb-1" >{l}</li>
                                ))}
                            </ul>
                        </div>
                    )}                    
                ></TwoColumnWideLeftContainer>
                <div>

                </div>
            </CenterContainer>
        </div>
    )
  }
  
export default GlobalFooter;