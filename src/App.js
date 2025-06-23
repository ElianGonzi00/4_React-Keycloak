import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import keycloak from './keycloak'; // Importación directa
import Navbar from './components/NavBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Inicialización directa
    keycloak.init({ onLoad: 'login-required' })
      .then(auth => {
        setAuthenticated(auth);
        if (auth) {
          showData();
        }
      })
      .catch(error => {
        console.error('Error Keycloak:', error);
      });
  }, []);

  const showData = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/users');
    const data = await response.json();
    setUsers(data);
  };

  const columns = [
    { name: 'ID', selector: row => row.id },
    { name: 'NAME', selector: row => row.name },
    { name: 'E-MAIL', selector: row => row.email }
  ];

  if (!authenticated) {
    return <div>Cargando autenticación...</div>;
  }

  const MyComponent = () => (
    <DataTable
      title="Arnold Movies"
      columns={columns}
      theme="solarized"
    />
  );

  //4 - Mostramos la data en DataTable
  return (
    <div className="App">
      {/* <h1>React DataTable</h1>
      <button onClick={() => keycloak.logout()}>Logout</button> */}
      <Navbar></Navbar>
     <DataTable 
      columns={columns}
      data={users}
      //theme='custom' //habilitar esta linea y descomentar createTheme()
      pagination
     />
    </div>
  );
}

export default App;