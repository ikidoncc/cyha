import { ListProjects } from '@app/components/list-projects'
import { Profile } from '../components/profile'

export function Home() {
  return (
    <div className="w-full max-w-[600px] mx-auto px-4 py-12 flex flex-col gap-12">
      <Profile />
      <ListProjects />
    </div>
  )
}
