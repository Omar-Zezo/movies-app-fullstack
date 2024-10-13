import { Link } from 'react-router-dom'
import '../page404.css'

const Page404 = () => {
  return (
    <div className='page-404-container'>
    <div title="404" className='page-404'>404</div>
    <Link to={"/"} className='text-xl'>Back To Home</Link>
    </div>
  )
}

export default Page404