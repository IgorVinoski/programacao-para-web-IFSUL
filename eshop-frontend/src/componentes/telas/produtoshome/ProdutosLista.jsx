//importação do componente
import ProdutoDetalhe from './ProdutoDetalhe';

// lógica dos detalhes do produto
const [produto, setProduto] = useState(null);

const [exibeDetalhe, setExibeDetalhe] = useState(false);

const exibirDetalhesProduto = (produto) => {
    setExibeDetalhe(true);
    setProduto(produto);
}

// compartilhamento no provider dos métodos e estado necessários
return (
<ProdutosHomeContext.Provider value={
    {
        produtos, exibirDetalhesProduto, setExibeDetalhe, produto
    }
}>
    <div style={{ padding: '20px' }}>
        <Carregando carregando={carregando}>
           {/* Lógica para exibir ou a lista de produtos ou os detalhes */}
            { !exibeDetalhe ? <ProdutosLista />: <ProdutoDetalhe/> }
        </Carregando>
    </div>
</ProdutosHomeContext.Provider>
)