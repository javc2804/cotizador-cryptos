import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Lato", sans-serif;
  gap:1rem;
  margin-top:30px
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  console.log(resultado);
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com//${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          <span>El Precio es de: {PRICE}</span>
        </Precio>
        <Texto>
          <span>El Precio más alto del día: {HIGHDAY}</span>
        </Texto>
        <Texto>
          <span>El Precio más bajo del día: {LOWDAY}</span>
        </Texto>
        <Texto>
          <span>Variación últimas 24 horas: {CHANGE24HOUR}</span>
        </Texto>
        <Texto>
          <span>Última actualización: {LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
