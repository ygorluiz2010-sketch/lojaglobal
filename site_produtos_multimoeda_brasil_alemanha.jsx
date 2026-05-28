export default function LojaGlobal() {
  const produtos = [
    {
      nome: 'Fone Bluetooth Gamer',
      precoBRL: 129.9,
      imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Smartwatch Fitness',
      precoBRL: 249.9,
      imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Teclado Mecânico RGB',
      precoBRL: 319.9,
      imagem: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Mouse Gamer Ultra',
      precoBRL: 159.9,
      imagem: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Caixa de Som Bluetooth',
      precoBRL: 199.9,
      imagem: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Câmera Wi‑Fi Inteligente',
      precoBRL: 289.9,
      imagem: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const euroRate = 0.16

  const formatarBRL = (valor) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)

  const formatarEUR = (valor) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(valor)

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black">Loja Global</h1>
            <p className="text-zinc-400 mt-2">
              Produtos populares com conversão automática Brasil → Alemanha
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3 shadow-lg">
            <p className="text-sm text-zinc-400">Cotação usada</p>
            <p className="text-xl font-bold">1 BRL ≈ {euroRate} EUR</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto, index) => {
            const precoEUR = produto.precoBRL * euroRate

            return (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-2xl font-bold mb-4">{produto.nome}</h2>

                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between items-center bg-zinc-800 rounded-xl px-4 py-3">
                      <span className="text-zinc-400">Brasil</span>
                      <span className="font-bold text-green-400">
                        {formatarBRL(produto.precoBRL)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-zinc-800 rounded-xl px-4 py-3">
                      <span className="text-zinc-400">Alemanha</span>
                      <span className="font-bold text-blue-400">
                        {formatarEUR(precoEUR)}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-black font-bold py-3 rounded-2xl hover:bg-zinc-200 transition">
                    Comprar Agora
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
