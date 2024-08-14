export default class CreateService {

  async createUser(userData) {
    try {
      const response = await fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (response.status == 404)
        console.log('Usuario ya existe');

      const user = await response.json();
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async updateUser(idUser, userData) {
    try {
      const response = await fetch(`http://localhost:5000/user/${idUser}`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('La información del usuario fue actualizada exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la información del usuario deseada', error);
    }
  }

  async deleteUser(idUser) {
    try {
      const response = await fetch(`http://localhost:5000/user/${idUser}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('El usuario fue eliminado exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el usuario deseado:', error);
    }
  }
}
