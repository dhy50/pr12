
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";

function Orders() {
  return (
    <div>
      <h2>Order Management</h2>

      <nav>
        <Link to="current">Current Orders</Link>{" | "}
        <Link to="history">Order History</Link>{" | "}
        <Link to="cancelled">Cancelled Orders</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function CurrentOrders() {
  return <h3>Current Orders: Order #101</h3>;
}

function OrderHistory() {
  return <h3>Order History: Order #90, Order #91</h3>;
}

function CancelledOrders() {
  return <h3>Cancelled Orders: Order #80</h3>;
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>E-commerce Order Management</h1>

      <Routes>
        <Route path="/orders" element={<Orders />}>
          <Route index element={<Navigate to="current" replace />} />
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
