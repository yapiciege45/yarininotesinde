import HomeContainer from '@/containers/home/HomeContainer'
import { Rubik } from '@next/font/google'

const inter = Rubik({ subsets: ['latin'] })

export default function Home() {
  return <HomeContainer />
}
