import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import Handler from "../components/Handler";

export default function Rps() {
  return (
    <>
      <Container className="mt-5">
        <Nav />

        <div className="text-center pt-5">
          <h5>Game : Rock Paper Scissors</h5>
        </div>

        <Handler />
      </Container>
    </>
  );
}
