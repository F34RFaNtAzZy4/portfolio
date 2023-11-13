import StarryNight from '@/Container/StarryNight'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <StarryNight starCount={100}/>
    </main>
  )
}
