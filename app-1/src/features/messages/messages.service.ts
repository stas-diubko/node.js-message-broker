import { testQueueChannel } from "../../services/queue.service";

export async function sendMessage(text: string): Promise<string> {
  testQueueChannel.sendToQueue("test-queue", Buffer.from(JSON.stringify(text)));
  return "Message sent" + " : " + text;
}
