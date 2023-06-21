import WebSocket, {WebSocketServer} from 'ws';

const wss = new WebSocketServer({ port: 4000});
//var notificacion = '¡Iniciando servidor!';
wss.on('connection', (ws) => {
  // Maneja la conexión del cliente WebSocket

  ws.on('message', (message) => {
    // Maneja el mensaje recibido del cliente
    var mensaje = message.toString("utf8");
   console.log(mensaje);
  });

  // Enviar una notificación push a los clientes

  const enviarNotificacion = () => {
    
    let notificacion = "Respondiendo desde el servidor";
 
      console.log('Enviando notificación: ' + notificacion);
      ws.send(notificacion);
 
  };
  

  // Ejemplo: Enviar una notificación cada 5 segundos
  setInterval(enviarNotificacion, 5000);
});
