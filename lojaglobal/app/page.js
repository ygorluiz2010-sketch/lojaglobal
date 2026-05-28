export default function Home() {
  const produtos = [
    { nome: "Fone Bluetooth Gamer", preco: 129.9 },
    { nome: "Smartwatch Fitness", preco: 249.9 },
    { nome: "Teclado Mecânico RGB", preco: 319.9 },
  ];

  const euroRate = 0.16;

  return (
    <main style={{padding:"40px",fontFamily:"Arial",background:"#111",minHeight:"100vh",color:"white"}}>
      <h1 style={{fontSize:"42px"}}>Loja Global</h1>
      <p>Produtos com conversão Brasil → Alemanha</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"20px",marginTop:"30px"}}>
        {produtos.map((p, i) => (
          <div key={i} style={{background:"#1f1f1f",padding:"20px",borderRadius:"20px"}}>
            <h2>{p.nome}</h2>
            <p>Brasil: R$ {p.preco.toFixed(2)}</p>
            <p>Alemanha: € {(p.preco * euroRate).toFixed(2)}</p>
            <button style={{padding:"10px 20px",borderRadius:"10px",border:"none",cursor:"pointer"}}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
