
import {useState} from "react";
function Dropdown({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ["male","female"];
    return (
        <div div className="dropdown">
            <div className="dropdown-btn" onClick={(e) =>
            setIsActive(!isActive)}>
            {selected}
            <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
            <div >
                {options.map((option) => (

                     <div className="dropdown-content">   
                <div onClick={() => {setSelected(option);
                    setIsActive(false);}
                }className="dropdown-item">
                    
                    {option}
                    </div>
                    </div>
                ))}
                </div>
        )}
      </div>  
    );
}


export default Dropdown;


