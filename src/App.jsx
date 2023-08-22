import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import Contact from "./components/Contact";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
