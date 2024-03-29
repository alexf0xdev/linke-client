import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'
import Links from '@/components/Links'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className={cn('flex flex-col min-h-screen px-2')}>
      <main className={cn('flex-1 mx-auto w-full max-w-2xl')}>
        <Hero />
        <Links />
      </main>
      <Footer />
    </div>
  )
}

export default Home
