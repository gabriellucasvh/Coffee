import React from 'react'
import Image from 'next/image'

const Menu = () => {
  return (
    <div>
      <section
        id="menu"
        className="relative w-full py-12 md:py-24 lg:py-32 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black h-full" />
        <div className="relative container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
            Nosso menu
          </h2>
          <div className="flex justify-center">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Espresso", preco: "R$3,50", image: "/menu/expresso.png" },
                { name: "Cappuccino", preco: "R$4,50", image: "/menu/cappuccino.png" },
                { name: "Café com Leite", preco: "R$4,75", image: "/menu/comleite.png" },
                { name: "Café Mocha", preco: "R$5,00", image: "/menu/mocha.png" },
                { name: "Cerveja Gelada", preco: "R$4,25", image: "/menu/cerveja.png" },
                { name: "Pastelaria do Dia", preco: "R$3,75", image: "/menu/pastel.png" },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center space-y-2 bg-white w-80 p-4 rounded-2xl shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover shadow-md border-2 border-merino-700"
                  />
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <p className="text-black">{item.preco}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
