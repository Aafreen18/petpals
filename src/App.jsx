import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
