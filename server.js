const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello from hapijs API';
    },
  });

  server.route({
    method: 'GET',
    path: '/gasto',
    handler: (request, h) => {
      const gastos = [
        {
          id: 1,
          nombre: 'Viaticos',
        },
        {
          id: 2,
          nombre: 'Eventos',
        },
        {
          id: 3,
          nombre: 'Gastos menores de operacion',
        },
        {
          id: 4,
          nombre: 'Honorarios',
        },
        {
          id: 5,
          nombre: 'Comunicaciones',
        },
        {
          id: 6,
          nombre: 'Arrendamientos',
        },
        {
          id: 7,
          nombre: 'Mensajeria',
        },
        {
          id: 8,
          nombre: 'Reparacion y Mantenimientos',
        },
      ];

      return {
        success: true,
        data: gastos,
        error: '',
      };
    },
  });

  server.route({
    method: 'POST',
    path: '/gasto',
    handler: (request, h) => {
      console.log(request.payload);
      return {
        success: true,
        data: [
          {
            ...request.payload,
          },
        ],
        error: '',
      };
    },
  });

  server.route({
    method: 'GET',
    path: '/sexo',
    handler: (request, h) => {
      return {
        success: true,
        data: [
          {
            id: 1,
            nombre: 'Masculino',
          },
          {
            id: 2,
            nombre: 'Femenino',
          },
        ],
        error: '',
      };
    },
  });

  server.route({
    method: 'GET',
    path: '/persona',
    handler: (request, h) => {
      const persona = [
        {
          id: 1,
          nombre: 'Juan Pablo',
          correo: 'juan@gmail.com',
          id_gasto: 1,
          id_sexo: 1,
        },
        {
          id: 2,
          nombre: 'Pablo',
          correo: 'pablo@gmail.com',
          id_gasto: 1,
          id_sexo: 1,
        },
        {
          id: 3,
          nombre: 'Julio',
          correo: 'julio@gmail.com',
          id_gasto: 1,
          id_sexo: 1,
        },
        {
          id: 4,
          nombre: 'Charli',
          correo: 'charli@gmail.com',
          id_gasto: 3,
          id_sexo: 1,
        },
        {
          id: 5,
          nombre: 'Carlos',
          correo: 'carlos@gmail.com',
          id_gasto: 3,
          id_sexo: 1,
        },
        {
          id: 6,
          nombre: 'Mario',
          correo: 'mario@gmail.com',
          id_gasto: 7,
          id_sexo: 1,
        },
        {
          id: 7,
          nombre: 'Maria',
          correo: 'maria@gmail.com',
          id_gasto: 6,
          id_sexo: 2,
        },
      ];

      return {
        success: true,
        data: persona,
        error: '',
      };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
