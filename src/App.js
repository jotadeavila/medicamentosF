import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import AgregarProductos from './paginas/Productos/Agregar';
import Listado from './paginas/Productos/Listado';
import ListadoPr from './paginas/Proveedores/Listado';
import AgregarProveedor from './paginas/Proveedores/Agregar';
import AgregarRecepcion from './paginas/recepciones/Agregar';
import ListadoRecepciones from './componentes/recepcion/ListaRecepción';
import ListadoR from './paginas/recepciones/Listado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/agregar-recepcion' element={<AgregarRecepcion />} />
        <Route exact path='/recepciones' element={<ListadoR />} />
        <Route exact path='/agregar-proveedor' element={<AgregarProveedor />} /> 
        <Route exact path='/proveedores' element={<ListadoPr />} />
        <Route exact path='/agregar-producto' element={<AgregarProductos />} /> 
        <Route exact path='/productos' element={<Listado />} /> 
        <Route exact path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
