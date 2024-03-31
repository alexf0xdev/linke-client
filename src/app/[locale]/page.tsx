import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'
import Links from '@/components/Links'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className={cn('flex flex-col mx-auto px-2 min-h-screen max-w-2xl')}>
      <main className={cn('flex-1')}>
        <Hero />
        <Links />
      </main>
      <Footer />
    </div>
  )
}

export default Home
