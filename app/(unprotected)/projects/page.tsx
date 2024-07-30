
import ProjectList from '@/app/(unprotected)/projects/_components/ProjectList'
import Protect from './_components/Protect'
export default function page() {
  return (
    <div className='min-h-screen mt-36'>
      <Protect/>
      <ProjectList/>
    </div>
  )
}