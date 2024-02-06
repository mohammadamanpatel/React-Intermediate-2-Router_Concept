import { useNavigate } from "react-router-dom"

function About(){
    const navigate = useNavigate();
    function gotoButton(){
      navigate('/support')
    }
    function backHandler(){
        navigate(-1);
    }
    return(
        <div>
            This is my about page
            <button onClick={gotoButton}>goto Support page</button>
            <button onClick={backHandler}>Back button</button>
        </div>
    )
} 
export default About