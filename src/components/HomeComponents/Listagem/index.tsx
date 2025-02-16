import {
  ListaItem,
  ListagemContainer,
  Lista,
  Botao,
  TagDestaque,
  Tag,
} from "./styles";

import estrela from "../../../assets/images/star_favorite.svg";
import { useEffect, useState } from "react";

export interface Restaurante {
  cardapio: string;
  id: number;
  titulo: string;
  descricao: string;
  destacado: string;
  tipo: string;
  avaliacao: number;
  capa: string;
  foto: string;
}

const Listagem = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => setRestaurantes(data));
  }, []);

  return (
    <ListagemContainer>
      <Lista>
        {restaurantes.map((restaurante) => (
          <ListaItem key={restaurante.id}>
            <img src={restaurante.capa} alt="Imagem do restaurante" />
            <div>
              <h4>{restaurante.titulo}</h4>
              <div>
                <h5>{restaurante.avaliacao}</h5>
                <img src={estrela} alt="Estrela amarela" />
              </div>
            </div>
            <p>{restaurante.descricao}</p>
            <Botao to={`/perfil/${restaurante.id}`}>Saiba mais</Botao>
            <Tag>{restaurante.tipo}</Tag>
            {restaurante.destacado && (
              <TagDestaque>Destaque da semana</TagDestaque>
            )}
          </ListaItem>
        ))}
      </Lista>
    </ListagemContainer>
  );
};

export default Listagem;
