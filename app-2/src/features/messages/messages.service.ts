import { testQueueChannel } from "../../services/queue.service";

export async function handleMessage(data: string): Promise<void> {
  console.log('Got data from app-1: ', data);
}