export default class RoleService{

  async createRole(roleData) {
    try {
      const response = await fetch('http://localhost:5000/role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roleData),
      });

      if (response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const role = await response.json();
      console.log(role);
      return role;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async getAllRole() {
    return fetch('http://localhost:5000/role')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la petición: ' + response.status);
        }
        return response.json(); // Parsea la respuesta a JSON
      })
      .catch(error => {
        console.error('Error:', error);
        throw error; // Lanza el error para ser manejado por el llamante
      });
  }

  async deleteRole(){

  }
}
