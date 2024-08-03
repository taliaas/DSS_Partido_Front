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
  async getAllRole(){
    try {
      const response = await fetch('http://localhost:5000/role', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async deleteRole(){

  }
}
