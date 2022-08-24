import { Container } from "react-bootstrap";

import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
          <ProductList />
        </Container>
      </main>
    </div>
  );
}

export default App;
