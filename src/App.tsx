import { FaInstagram } from "react-icons/fa"
import Button from "./Components/Button"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button style={{color:'green'}} onClick={() => alert('Coming soon...')} >
        <FaInstagram 
          className="text-xl hover:text-pink-500 transition-colors" 
        />
        <span className="ml-2">Instagram</span>
      </Button>
    </div>
  )
}

export default App
