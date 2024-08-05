import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buscador from "./component/Buscador";
import DisplayPeliculas from "./component/DisplayPeliculas";
import useForm from "./custom_hooks/UseForm";
import useFetchData from "./custom_hooks/UseFetchData";
import logo from "./assets/logo_Yehison.png";
import Logo from "./component/Logo";

const urlLogo = "https://yehison-perdomo.netlify.app";

function App() {
  const [input, onChange] = useForm({
    search: "",
    type: "multi",
  });

  const [data] = useFetchData(input);

  return (
    <Container fluid>
      <Logo logo={logo} url={urlLogo} />
      <Buscador input={input} onChange={onChange} />
      <Row className="justify-content-center my-4">
        <DisplayPeliculas search={data || []} input={input} />
      </Row>
    </Container>
  );
}

export default App;
