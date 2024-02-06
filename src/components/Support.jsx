import { useNavigate } from "react-router-dom"

function Support(){
    const navigate = useNavigate();
    function gotoButton(){
        navigate('/about')
    }
    function backHandler(){
        navigate(-1)
    }
    return (
        <div>
            This is my Support page
            <button onClick={gotoButton}>Goto about page</button>
            <button onClick={backHandler}>back button</button>
        </div>
    )
}
export default Support