import { FaInstagram } from "react-icons/fa"
import Button from "./Components/Button"
function App() {
  return (
    <div>
      <Button>
        <FaInstagram onClick={() => alert('Coming soon...')} />
        <span>Instagram</span>
      </Button>
    </div>
  )
}

export default App
