import { Container } from "react-bootstrap";
import MultiChainContent from "./MultiChainContent";

function MultiChain() {
  return (
    <div className="multichain my-5 pt-5">
      <Container className="text-center">
        <h4 className="txt-primary">EASIEST GATEWAY TO</h4>
        <h1>Cross-Chain Yield Farming For All</h1>
        <p className="lead px-2 px-sm-5">
          Octafarm will be deployed on various blockchain networks so anyone can
          access supercharged yields seamlessly cross-chain, thereby maximizing
          opportunities to access the highest yields.
        </p>
      </Container>
      <Container className="d-none d-md-block">
        <MultiChainContent />
      </Container>
    </div>
  );
}
export default MultiChain;
