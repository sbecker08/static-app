
function ButtonSecondary({ text, link, className }) {

    return (
        <a href={link} className={className + 
            " block text-center py-4 px-5 bg-white border border-mm-blue tracking-widest text-mm-blue roboto text-xs font-bold uppercase hover:bg-mm-blue hover:text-white"} >
            {text}
        </a>
    );
  }
  
export default ButtonSecondary;

