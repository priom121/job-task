import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import AUthProvider from './Provider/AuthProvider'

function App() {
  return (
    <>
    <AUthProvider>
    <RouterProvider router={routes} />
    </AUthProvider>
 
    
    </>
  )
}

export default App
