export default class UserService {

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
        method: 'DELETE',
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

  async getUser(username) {
      try {
        const response = await fetch(`http://localhost:5000/user${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json();
        console.log(user);
        return actaCP;
      } catch (error) {
        console.error('Error al recuperar el usuario', error);
      }
    }

  async getAll() {
    try {
      const response = await fetch("http://localhost:5000/user/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();
      console.log(users);
      return users;
    } catch (error) {
      console.error('Error al recuperar los usuarios', error);
    }
  }
}
