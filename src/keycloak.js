import Keycloak from 'keycloak-js';

// Configuración directa (sin función wrapper)
const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'reinoMain',
  clientId: 'react'
});

export default keycloak;