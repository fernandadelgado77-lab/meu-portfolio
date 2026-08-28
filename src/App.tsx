import "./App.css";
import Botao from "./components/Button";
import ProjetoCard from "./components/ProjetoCard";
const meusProjetos = [
{
titulo: "Portfolio Pessoal",
descricao: "Este site!",
tecnologias: ["React", "Node.js"],
},
];
function App() {
return (
<div>
<h1>Meu Portfolio</h1>
<Botao texto="Ver Projetos" variante="primary" />
<div className="grid">
{meusProjetos.map((p) => (
<ProjetoCard key={p.titulo} {...p} />
))}
</div>
</div>
);
}
export default App;