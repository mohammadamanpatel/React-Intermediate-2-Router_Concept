import { Outlet } from "react-router-dom";

function Main_header(){
    return (
        <div>
            {/* outlet ka matlab hai ki jitne bhi child elements honge main_header me wo saare render honge */}
            <Outlet/>
        </div>
    )
}
export default Main_header