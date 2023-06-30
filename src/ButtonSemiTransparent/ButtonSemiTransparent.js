
function ButtonSemiTransparent({ text, link, className }) {

    return (
        <a href={link} className={className + 
            " block text-center py-4 px-5 bg-mm-blue bg-opacity-70 tracking-wider border border-white text-white roboto text-xs font-bold uppercase hover:bg-mm-blue"} >
            {text}
        </a>
    );
  }
  
export default ButtonSemiTransparent;

