export default class DeleteActaService{

  async deleteActaCP(idActaCP) {
    try {
      const response = await fetch(`http://localhost:5000/acta-cp/${idActaCP}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('La Acta de Círculo Político fue eliminada exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el Acta de Círculo Político deseada:', error);
    }
  }

  async deleteActaRO(idActaRO) {
    try {
      const response = await fetch(`http://localhost:5000/acta-ro/${idActaRO}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('El Acta de Reunión Ordinaria fue eliminada exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el Acta de Reunión Ordinaria deseada', error);
    }
  }
}
