import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { trackEvent } from "../utils/analytics";

interface OrderContextValue {
  quantity: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  setQuantity: (quantity: number) => void;
  increment: () => void;
  decrement: () => void;
  addToOrder: (quantity?: number) => void;
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [quantity, setQuantityState] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const setQuantity = useCallback((q: number) => {
    setQuantityState(Math.max(0, q));
  }, []);

  const increment = useCallback(() => setQuantityState((q) => q + 1), []);
  const decrement = useCallback(() => setQuantityState((q) => Math.max(0, q - 1)), []);

  const addToOrder = useCallback((qty: number = 1) => {
    setQuantityState((q) => q + qty);
    trackEvent("add_product", { quantity: qty });
  }, []);

  const value: OrderContextValue = {
    quantity,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    setQuantity,
    increment,
    decrement,
    addToOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within an OrderProvider");
  return ctx;
}
