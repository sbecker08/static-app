

function ImageBackgroundContainer({ children, url, paddingTop, paddingBottom, className }) {

    const customStyles = {};

    if(url)
        customStyles['backgroundImage'] = 'url(' + url + ')';

    if(paddingTop)
        customStyles['paddingTop'] = paddingTop;
        
    if(paddingBottom)
        customStyles['paddingBottom'] = paddingBottom;
    

    return (
        <div className="w-full" style={customStyles}>
            { children }
        </div>
    );
  }
  
export default ImageBackgroundContainer;