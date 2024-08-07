export default class ActaService {
    async createActaCP(actaCPData) {
        try {
          const response = await fetch('http://localhost:5000/acta-cp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(actaCPData),
          });
    
          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if(response.status == 404)
            console.log('El Acta de Círculo Político que desea agregar ya existe');
    
          const actaCP = await response.json();
          console.log(actaCP);
          return actaCP;
        } catch (error) {
          console.error('Error al crear el Acta de Círculo Político', error);
        }
      }
    
      async createActaRO(actaROData) {
        try {
          const response = await fetch('http://localhost:5000/acta-ro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(actaROData),
          });
    
          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if(response.status == 404)
            console.log('El Acta de Reunión Ordinaria que desea agregar ya existe');
    
          const actaRO = await response.json();
          console.log(actaRO);
          return actaRO;
        } catch (error) {
          console.error('Error al crear el Acta de Reunión Ordinaria', error);
        }
      }
}