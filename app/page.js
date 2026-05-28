export default function Home() {
  const produtos = [
    { nome: "iPhone 15 Pro Max", preco: 7299.9, vendido: "12 mil vendidos" },
    { nome: "Fone Bluetooth Gamer RGB", preco: 129.9, vendido: "5 mil vendidos" },
    { nome: "Smartwatch Ultra", preco: 249.9, vendido: "9 mil vendidos" },
    { nome: "Tênis Esportivo Premium", preco: 189.9, vendido: "3 mil vendidos" },
    { nome: "Mouse Gamer RGB", preco: 159.9, vendido: "7 mil vendidos" },
    { nome: "Teclado Mecânico RGB", preco: 319.9, vendido: "2 mil vendidos" },
    { nome: "Caixa de Som Bluetooth", preco: 199.9, vendido: "11 mil vendidos" },
    { nome: "Notebook Gamer RTX", preco: 5499.9, vendido: "900 vendidos" },
  ];

  const euroRate = 0.16;

  return (
    <main style={{background:"#f5f5f5",minHeight:"100vh",fontFamily:"Arial"}}>
      <header style={{background:"#ff5a00",padding:"20px",color:"white"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
          <h1 style={{fontSize:"32px",fontWeight:"bold"}}>Loja Global</h1>

          <input
            placeholder="Buscar produtos..."
            style={{padding:"12px",borderRadius:"12px",border:"none",width:"50%"}}
          />

          <button style={{padding:"12px 20px",borderRadius:"12px",border:"none"}}>
            Carrinho
          </button>
        </div>
      </header>

      <div style={{padding:"30px"}}>
        <div
          style={{
            background:"linear-gradient(to right,#ff5a00,#ff0000)",
            padding:"40px",
            borderRadius:"25px",
            color:"white",
            marginBottom:"30px"
          }}
        >
          <h2 style={{fontSize:"48px",fontWeight:"bold"}}>
            SUPER OFERTAS
          </h2>

          <p>Produtos estilo Shopee e AliExpress</p>
        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px"
          }}
        >
          {produtos.map((p, i) => (
            <div
              key={i}
              style={{
                background:"white",
                padding:"15px",
                borderRadius:"20px",
                boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
              }}
            >
              <div
                style={{
                  height:"180px",
                  background:"#ddd",
                  borderRadius:"15px",
                  marginBottom:"15px"
                }}
              ></div>

              <h2>{p.nome}</h2>

              <p
                style={{
                  color:"#ff5a00",
                  fontSize:"24px",
                  fontWeight:"bold"
                }}
              >
                R$ {p.preco.toFixed(2)}
              </p>

              <p>Alemanha: € {(p.preco * euroRate).toFixed(2)}</p>

              <p style={{fontSize:"12px",color:"#666"}}>
                {p.vendido}
              </p>

              <button
                style={{
                  width:"100%",
                  marginTop:"15px",
                  padding:"12px",
                  background:"#ff5a00",
                  color:"white",
                  border:"none",
                  borderRadius:"12px",
                  cursor:"pointer"
                }}
              >
                Comprar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
