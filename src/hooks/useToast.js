import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useToast = () => {
    const showToast = {
        error: useCallback((message = '') => {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }, []),
        success: useCallback((message = '') => {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }, []),
        info: useCallback((message = '') => {
            toast.info(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }, [])
    }

    return showToast;
}

export default useToast