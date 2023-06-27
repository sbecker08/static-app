import styles  from './RegionalWidget.module.css'

function RegionalWidget() {

    const links = [ 'Our Impact', 'Current Listings', 'Research', 'News & Events' ];

    return (
        <div className="flex py-6 w-full">            
            <div className="max-w-screen-xl flex ml-auto">
                <div className="flex  text-mm-blue font-semibold frank-ruhl text-sm">
                    <span className="mr-5" >Pacific Northwest: </span>
                    <ul className="flex">
                        {
                            links.map(l => (
                                <li className="mr-5 "><a href="#">{l}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
export default RegionalWidget;
  