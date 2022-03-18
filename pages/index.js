import Landing from '@/pages/Landing'
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query'
import DefaultHead from '@/molecules/DefaultHead';

const queryClient = new QueryClient()

const Page = () => {
  return (
    <> 
      <DefaultHead />
      <QueryClientProvider client={queryClient}>
        <Landing />
        <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      </QueryClientProvider>
    </>
  )
}

export default Page