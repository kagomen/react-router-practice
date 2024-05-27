import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-green-500">
      <h1>Header</h1>
      <p className="w-fit bg-stone-300"><Link to="/">Home</Link></p>
    </div>
  )
}

export default Header