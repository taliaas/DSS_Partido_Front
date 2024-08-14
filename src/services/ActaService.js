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
          else if(response.status !== 201){
            console.error('Se ha creado el Acta de Círculo Político', error);
          }
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

          if (!response.ok) { // response.ok será false si el status no es 200-299
            let errorMessage = `HTTP error! status: ${response.status}`;
              if (response.status === 500) {
                errorMessage += ' - El servidor encontró una situación inesperada que le impidió cumplir con la solicitud.';
              }
            throw new Error(errorMessage);
          }

          const actaRO = await response.json();
          console.log(actaRO);
          return actaRO;
        } catch (error) {
          console.error('Error al crear el Acta de Reunión Ordinaria', error);
        }
      }

      async getActaCP() {
        try {
          const response = await fetch("http://localhost:5000/acta-cp/", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const actaCP = await response.json();
          console.log(actaCP);
          return actaCP;
        } catch (error) {
          console.error('Error al recuperar las Acta de Círculo Político', error);
        }
      }

      async getActaRO() {
        try {
          const response = await fetch("http://localhost:5000/acta-ro/", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const actaRO = await response.json();
          return actaRO;
        } catch (error) {
          console.error('Error al recuperar las Acta de Reunión Ordinaria', error);
        }
      }

}
