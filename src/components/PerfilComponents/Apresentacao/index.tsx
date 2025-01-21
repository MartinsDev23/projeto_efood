import { ApresentacaoContainer, NomeRestaurante, TipoRestaurante } from "./styles";

const Apresentacao = () => (
  <div>
      <ApresentacaoContainer>
        <TipoRestaurante>italiana</TipoRestaurante>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </ApresentacaoContainer>
  </div>
);

export default Apresentacao;
