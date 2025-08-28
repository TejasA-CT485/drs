import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    async function healthCheck() {
      try {
        const res = await fetch("http://localhost:8081/");
        return await res.json();
      } catch (e) {
        throw e;
      }
    }

    healthCheck();
  });

  return <h1>DRS</h1>;
};
