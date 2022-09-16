import { globalStyles } from "@styles/globals";
import { Container, Header } from "@styles/pages/app.styles";
import type { AppProps } from "next/app";
import Image from "next/future/image";
import logo from "../assets/logo.svg";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
