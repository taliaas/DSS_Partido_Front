export default class BalanceService {

  async getBalance() {
    try {
      const response = await fetch("http://localhost:5000/balance/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const balance = await response.json();
      return balance;
    } catch (error) {
      console.error('Error al recuperar el balance', error);
    }
  }

  async deleteBalance(idBalance) {
    try {
      const response = await fetch(`http://localhost:5000/balance/${idBalance}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('La información del balance fue eliminado exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el balance deseado:', error);
    }
  }
}
