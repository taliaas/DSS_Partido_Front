export default class CreateService {

  async createUser(userData) {
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const user = await response.json();
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
