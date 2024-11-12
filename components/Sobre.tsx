import React from 'react'

const Sobre = () => {
    return (
        <div>
            <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
                        <div className="flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre nós</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Na Coffee Shop, somos apaixonados por preparar a xícara de café perfeita. Nossos grãos são provenientes de
                                fazendas sustentáveis e torradas com perfeição internamente.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-2xl font-bold">Nossa missão</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Criar um espaço acolhedor e convidativo onde os amantes do café possam desfrutar de cervejas excepcionais e significativas
                                conexões.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-2xl font-bold">Qualidade de primeira</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Temos o compromisso de usar apenas os melhores ingredientes e os baristas mais qualificados para garantir que cada gole seja
                                uma delícia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre