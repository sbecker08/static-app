

function CenterContainer({ children }) {
    return (
        <div className="xl:xl:max-w-screen-xl max-xl:max-w-screen-lg w-full px-5 max-lg:px-mm-scale mx-auto z-10">
            { children }
        </div>
    );
  }
  
export default CenterContainer;