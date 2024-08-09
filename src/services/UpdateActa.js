export default class UpdateActa{

  async updateActa(idActaCP, actaData) {
    try {
      const response = await fetch(`http://localhost:5000/acta-ro/${idActaCP}`, actaData, {
        method: 'UPDATE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('El Acta de Círculo Político fue actualizada exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el Acta de Círculo Político deseada', error);
    }
  }

  async actualizarActaRO(idActaRO, actaData) {
    try {
      const response = await fetch(`http://localhost:5000/acta-ro/${idActaRO}`, actaData, {
        method: 'UPDATE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('El Acta de Reunión Ordinaria fue actualizada exitosamente');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el Acta de Reunión Ordinaria deseada', error);
    }
  }
}
