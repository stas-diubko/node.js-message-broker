import amqp from "amqplib";

let testQueueChannel: amqp.Channel;

export async function connectQueue(): Promise<void> {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("test-queue");

    if (channel) {
      testQueueChannel = channel
      console.log('Connected to RabbitMQ server')
    };
  } catch (error) {
    console.error("Error: ", JSON.stringify(error));
  }
}

export { testQueueChannel };
