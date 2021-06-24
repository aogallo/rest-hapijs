const Hapi = require('@hapi/hapi');

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT || 3000,
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Hello from hapijs API'
		}
	});

	server.route({
		method: 'GET',
		path: '/gasto',
		handler: (request, h) => {
			const gastos = [
				{
					nombre: 'Viaticos'
				},
				{
					nombre: 'Eventos'
				},
				{
					nombre: 'Gastos menores de operacion'
				},
				{
					nombre: 'Honorarios'
				},
				{
					nombre: 'Comunicaciones'
				},
				{
					nombre: 'Arrendamientos'
				},
				{
					nombre: 'Mensajeria'
				},
				{
					nombre: 'Reparacion y Mantenimientos'
				},
			]	

			return {
				success: true,
				data: gastos,
				error: ''
			};
		}
		
	});

	server.route({
		method: 'POST',
		path: '/gasto',
		handler: (request, h) => {
			return {
				success: true,
				data: [],
				error: ''
			}
		}
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
