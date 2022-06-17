import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
const Contendedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const {moneda,criptoMoneda} = monedas
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // console.log(resultado.DISPLAY[criptoMoneda][moneda]);
        setResultado(resultado.DISPLAY[criptoMoneda][moneda])
        setCargando(false)

      };
      cotizarCripto()
    }
  }, [monedas]);
  return (
    <Contendedor>
      <Imagen alt="imagenes criptomonedas" src={ImagenCripto} />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
      {resultado.PRICE &&<Resultado resultado={resultado} />}
      </div>
    </Contendedor>
  );
}

export default App;
