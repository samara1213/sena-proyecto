
import './App.css';
import PresentacionCanva from './sections/PresentacionCanva';
import Introduccion from './sections/Introduccion';
import ResumenEjecutivo from './sections/ResumenEjecutivo';
import ObjetivoGeneral from './sections/ObjetivoGeneral';
import ObjetivosEspecificos from './sections/ObjetivosEspecificos';
import Metodologia from './sections/Metodologia';
import AlineacionPlanes from './sections/AlineacionPlanes';
import PlanteamientoProblema from './sections/PlanteamientoProblema';
import ResultadosEsperados from './sections/ResultadosEsperados';
import EncuestasCultivadores from './sections/EncuestasCultivadores';
import FrutasEncuesta from './sections/FrutasEncuesta';
import ProductosEncuesta from './sections/ProductosEncuesta';
import MaduracionEncuesta from './sections/MaduracionEncuesta';
import Cronograma from './sections/Cronograma';
import Presupuesto from './sections/Presupuesto';
import Navbar from './Navbar';
import Autores from './sections/Autores';
import ReferenciasBibliograficas from './pages/ReferenciasBibliograficas';
import Conclusiones from './pages/Conclusiones';

function App() {
  return (
    <div className="container">
      <Navbar />
      <PresentacionCanva />
      <h1>Elaboración de Productos Nutracéuticos</h1>
      <Introduccion />
      <ResumenEjecutivo />
      <ObjetivoGeneral />
      <ObjetivosEspecificos />
      <Metodologia />
      <AlineacionPlanes />
      <PlanteamientoProblema />
      <ResultadosEsperados />
      <EncuestasCultivadores />
      <FrutasEncuesta />
      <ProductosEncuesta />
      <MaduracionEncuesta />
      <Cronograma />
      <Presupuesto />
      <Autores />
  {/* Página de conclusiones antes de referencias bibliográficas */}
  <Conclusiones />
  <ReferenciasBibliograficas />
    </div>
  );
}

export default App
