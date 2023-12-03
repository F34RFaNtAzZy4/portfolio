import StarryNight from '@/Container/StarryNight'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='absolute h-screen w-screen '>
        <StarryNight starCount={100}/>
      </div>
    </main>
  )
}
