import { useNavigate } from "react-router-dom"

const BackBtn = () => {
  const nav = useNavigate()
  const onBack = () => nav(-1)
  return (
    <button type="button" onClick={onBack} className="bg-stone-300">Back</button>
  )
}

export default BackBtn