import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NextImage from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const THREADS = [
  { url: 'https://x.com/schoolboytom/status/1688520914185383936', coverUrl: '/threads/create-oss.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1687778321461825536', coverUrl: '/threads/product-mvp.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1687346176939474944', coverUrl: '/threads/self-custody.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1686684180535517184', coverUrl: '/threads/dev-generalists.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1686401111610077184', coverUrl: '/threads/hot-takes.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1686013103505346560', coverUrl: '/threads/web3-diff.jpeg' },
  { url: 'https://x.com/schoolboytom/status/1685598843545571328', coverUrl: '/threads/os-alternatives.jpeg' }
]

export default function Home() {
  return (
    <main>
      <div className="flex flex-col py-8 gap-4">
        <h1 className="text-2xl font-semibold">Hi, I'm Tomek.</h1>
        <p>I was born cloud native, but then I started living by distributed systems.</p>
        <Card>
          <CardHeader>
            <CardTitle>Palladians</CardTitle>
            <CardDescription>Co-founder</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p>Building open source, Web3 tools with friends.</p>
            <div className="flex gap-2">
              <a href="https://pallad.xyz" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="flex py-2 px-4 place-items-center">
                  <NextImage src="/logos/pallad.svg" width={28} height={28} alt="Pallad" />
                </Card>
              </a>
              <a href="https://minaverse.xyz" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="flex py-2 px-4 place-items-center">
                  <NextImage src="/logos/minaverse.svg" width={28} height={28} alt="Minaverse" />
                </Card>
              </a>
              <a href="https://github.com/palladians/herald" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="flex py-2 px-4 place-items-center">
                  <NextImage src="/logos/herald.svg" width={28} height={28} alt="Herald" />
                </Card>
              </a>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Node.js/Bun</Badge>
              <Badge variant="outline">Tailwind</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>IOG</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p>Joined IOG since the very beginning of Lace, Cardano light wallet development.</p>
            <p>Helped to deliver hardware wallets support, including Ledger, staking, and multi-delegation.</p>
            <p>Formed and led Frontend Guild at IOG.</p>
            <div className="flex">
              <a href="https://pallad.xyz" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="p-2">
                  <NextImage src="/logos/lace.svg" width={100} height={40} alt="Herald" />
                </Card>
              </a>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">CSS-in-JS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col py-8 gap-8">
        <h2 className="text-xl">Threads</h2>
        {THREADS.map((thread) => (
          <a href={thread.url} key={thread.url} target="_blank" rel="noreferrer noopener">
            <Card>
              <AspectRatio ratio={4}>
                <NextImage src={thread.coverUrl} width={800} height={400} alt="Thread Cover" className="w-full h-full object-cover rounded-lg" />
              </AspectRatio>
            </Card>
          </a>
        ))}
      </div>
    </main>
  )
}
