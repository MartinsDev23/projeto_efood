import {
  ListaItem,
  ListagemContainer,
  Lista,
  Botao,
  TagDestaque,
  Tag,
} from "./styles";
import imagem from "../../../assets/images/imagem.svg";
import imagem1 from "../../../assets/images/image_1.svg";

import estrela from "../../../assets/images/star_favorite.svg";

const Listagem = () => (
  <ListagemContainer>
    <Lista>
      <ListaItem>
        <img src={imagem} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Japonesa</Tag>
        <TagDestaque>Destaque da semana</TagDestaque>
      </ListaItem>
      <ListaItem>
        <img src={imagem1} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Italiana</Tag>
      </ListaItem>
      <ListaItem>
        <img src={imagem1} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Italiana</Tag>
      </ListaItem>
      <ListaItem>
        <img src={imagem1} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Italiana</Tag>
      </ListaItem>
      <ListaItem>
        <img src={imagem1} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Italiana</Tag>
      </ListaItem>
      <ListaItem>
        <img src={imagem1} alt="Imagem do restaurante" />
        <div>
          <h4>Hioki Sushi</h4>
          <div>
            <h5>4,9</h5>
            <img src={estrela} alt="Estrela amarela" />
          </div>
        </div>
        <p>
          Peça já o melhor da cuListaItemnária japonesa no conforto da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Botao to="/perfil">Saiba mais</Botao>
        <Tag>Italiana</Tag>
      </ListaItem>
    </Lista>
  </ListagemContainer>
);

export default Listagem;
