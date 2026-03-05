import "../styles/Desempeno.css";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Desempeno() {
  return (
    <>
      <div className="des-layout">
        <NavBar/>

        <main className="des-content">
          <Card />
          <Card />
          <Card />
          <Card />
        </main>

        <Footer/>
      </div>
    </>
  );
}
