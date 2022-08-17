import app from ".";
import { connectQueue } from "./services/queue.service";

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Server is listening on ${PORT} port`);
  await connectQueue();
});
