import {
  ApresentacaoContainer,
  NomeRestaurante,
  TipoRestaurante,
} from "./styles";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface Cardapio {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

interface Restaurante {
  id: number;
  titulo: string;
  descricao: string;
  destacado: string;
  tipo: string;
  avaliacao: number;
  capa: string;
  cardapio: Cardapio[];
}

const Apresentacao = () => {
  const { id } = useParams();
  const [perfil, setPerfil] = useState<Restaurante | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setPerfil(data));
  }, [id]);

  if (perfil) {
    return (
      <div>
        <ApresentacaoContainer backgroundImage={perfil.capa}>
          <TipoRestaurante>{perfil.tipo}</TipoRestaurante>
          <NomeRestaurante>{perfil.titulo}</NomeRestaurante>
        </ApresentacaoContainer>
      </div>
    );
  }
};

export default Apresentacao;
