import CenterContainer from '../modules/LayoutContainers/CenterContainer/CenterContainer';
import styles  from './RegionalWidget.module.css'

function RegionalWidget() {

    const links = [ 'Our Impact', 'Current Listings', 'Research', 'News & Events' ];

    return (
        <CenterContainer>
                <div className="flex py-6 justify-end text-mm-blue font-semibold frank-ruhl text-sm pl-5">
                    <span className="mr-5" >Pacific Northwest: </span>
                    <ul className="flex">
                        {
                            links.map(l => (
                                <li className="mr-5 "><a href="#">{l}</a></li>
                            ))
                        }
                    </ul>
                </div>
        </CenterContainer>
    );
  }
  
export default RegionalWidget;
  