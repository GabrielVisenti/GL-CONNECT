import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 🔑 helper global para imagens (GitHub Pages)
(window as any).img = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, "")}`;
};

createRoot(document.getElementById("root")!).render(<App />);
