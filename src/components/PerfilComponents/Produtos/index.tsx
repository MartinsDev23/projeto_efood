import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Restaurante } from "../../HomeComponents/Listagem";
import {
  Botao,
  Lista,
  ListaDeProdutos,
  ListaItem,
  Texto,
  ModalContainer,
  ModalOverlay,
  BotaoModal,
} from "./styles";
import botaoFechar from "../../../assets/images/close 1.svg";
import { Cardapio } from "../Apresentacao";

interface ProdutoProps extends Cardapio {
  produto?: string;
}

const Produtos = () => {
  const { id } = useParams();
  const [perfil, setPerfil] = useState<Restaurante | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produto, setProduto] = useState<ProdutoProps>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setPerfil(data));
  }, [id]);

  if (!perfil) {
    return <p>Restaurante não encontrado.</p>;
  }

  const adicionaAoCarrinho = (produto: ProdutoProps) => {
    setProduto(produto);
    setIsModalOpen(true);
  };

  const fechaModal = () => {
    setIsModalOpen(false);
  };

  const fechaModalOverlay = (evento: React.MouseEvent) => {
    if (evento.target === evento.currentTarget) {
      fechaModal();
    }
  };

  return (
    <ListaDeProdutos>
      <Lista>
        {perfil.cardapio.map((item: Cardapio) => (
          <ListaItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <h3>{item.nome}</h3>
            <Texto>{item.descricao}</Texto>
            <Botao as="button" onClick={() => adicionaAoCarrinho(item)}>
              Adicionar ao carrinho
            </Botao>
          </ListaItem>
        ))}
      </Lista>

      {isModalOpen && (
        <ModalOverlay onClick={fechaModalOverlay}>
          <ModalContainer>
            <div className="image">
              <img src={produto?.foto} alt="" />
            </div>
            <div className="descricao">
              <h3>{produto?.nome}</h3>
              <p>{produto?.descricao}</p>
              <p>Serve: {produto?.porcao}</p>
              <BotaoModal>
                Adicionar ao carrinho - R$ {produto?.preco}
              </BotaoModal>
            </div>
            <img src={botaoFechar} alt="Botao de fechar" onClick={fechaModal} />
          </ModalContainer>
        </ModalOverlay>
      )}
    </ListaDeProdutos>
  );
};

export default Produtos;
