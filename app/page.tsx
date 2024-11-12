import Menu from "@/components/Menu"
import Sobre from "@/components/Sobre"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, BookText } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-no-repeat h-dvh" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black h-full"/>
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bem-vindo ao Coffee Shop
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
                  Descubra o sabor dos nossos cafés artesanais e encontre uma experiência de café única em nossa loja.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-merino-700 hover:bg-merino-600 transition-colors duratiom-300"> <MapPin className="w-4 h-4" /> Nos visite</Button>
                <Button variant="outline"> <BookText className="w-4 h-4" /> Ver o menu</Button>
              </div>
            </div>
          </div>
        </section>
        <Sobre />
        <Menu />
        <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos visite</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Venha nos visitar e experimentar o diferencial do Coffee Shop.
              </p>
              <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-2">
                <div className="flex items-center space-x-2 ">
                  <MapPin className="w-4 h-4" />
                  <span>Rua do Café, 123, Cidade do Café</span>
                </div>
                <div className="flex items-center space-x-2 ">
                  <Clock className="w-4 h-4" />
                  <span>Seg-Sex: 7h-19h, Sáb-Dom: 8h-18h</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}