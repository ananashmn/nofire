import { OrderProvider } from "./context/OrderContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <OrderProvider>
      <Home />
    </OrderProvider>
  );
}
