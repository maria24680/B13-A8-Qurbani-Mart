import { ToastContainer } from "react-toastify";


const Authlayout = ({children}) => {
    return (
        <div className=''>
           
            {children}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Authlayout;;