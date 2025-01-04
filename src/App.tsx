import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";


import Button from "./Components/Button"
import './App.css'
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button size='lg'  variant='success'>
      <FaWhatsapp 
      className="text-xl hover:text-pink-500 transition-colors" 
        />
        <span className="ml-2">Whatsapp</span>
      </Button>
      <Button size='sm'  variant='warning'>
        <FaInstagram 
          className="text-xl hover:text-pink-500 transition-colors" 
        />
        <span className="ml-2">Instagram</span>
      </Button>
      <Button size='lg'  variant='danger'>
      <CiFacebook 
      className="text-xl hover:text-pink-500 transition-colors" 
        />
        <span className="ml-2">Facebook</span>
      </Button>
    </div>
  )
}

export default App
