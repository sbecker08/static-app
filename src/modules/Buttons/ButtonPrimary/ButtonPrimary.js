
function ButtonPrimary({ text, link, className }) {

    return (
        <a href={link} className={className + 
            " block text-center py-4 px-5 bg-mm-orange border-none tracking-widest text-white roboto text-xs font-bold uppercase hover:bg-mm-blue"} >
            {text}
        </a>
    );
  }
  
export default ButtonPrimary;

