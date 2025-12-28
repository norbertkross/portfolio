import { Link } from "react-router-dom"

interface LinkButtonProps {
  to: string
  children: React.ReactNode
}

 const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
        <Link
          to={to}
          className="px-1 py-3 border-b-2 w-full"
          >
      {children}
    </Link>
  )
}
export default LinkButton