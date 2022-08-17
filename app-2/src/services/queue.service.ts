import amqp from "amqplib";
import { handleMessage } from "../features/messages/messages.service";

let testQueueChannel: amqp.Channel;

export async function connectQueue(): Promise<void> {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    await channel.assertQueue("test-queue");
    channel.consume("test-queue", (data) => {
      if (data) {
        handleMessage(`${Buffer.from(data.content)}`);
        channel.ack(data);
      }
    });
    console.log("Connected to RabbitMQ server");
  } catch (error) {
    console.error("Error: ", JSON.stringify(error));
  }
}

export { testQueueChannel };
