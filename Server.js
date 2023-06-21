import WebSocket, {WebSocketServer} from 'ws';

const wss = new WebSocketServer({ port: 4000});

wss.on('connection', (ws) => {
  // Maneja la conexión del cliente WebSocket
  //Handle the conection of the WebSocket client

  ws.on('message', (message) => {
    // Maneja el mensaje recibido del cliente
    var mensaje = message.toString("utf8");
   console.log(mensaje);
  });

  // Enviar una notificación push a los clientes
  // Send a push notification to the clients

  const enviarNotificacion = () => {
    
    let notificacion = "Response from the server";
 
      console.log('Sending notification: ' + notificacion);
      ws.send(notificacion);
 
  };
  

  // Ejemplo: Enviar una notificación cada 5 segundos
  // Example: Send a notification every 5 seconds
  setInterval(enviarNotificacion, 5000);
});
