

function CenterContainer({ left, right }) {
    return (
        <div className="w-full flex flex-row max-lg:flex-col">
            <div className="w-8/12 max-lg:w-full">
                { left }
            </div>
            <div className="w-4/12 max-lg:w-full">
                { right }
            </div>
        </div>
    );
  }
  
export default CenterContainer;