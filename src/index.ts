import dotenv from "dotenv";
import app from "./app";
import { initPool, close } from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 3000;

//Start services
initPool()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to instailized database pool", error);
    process.exit(1);
  });

//Close serives
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  try {
    await close();
  } catch (error) {
    console.log("Error during pool shutdown", error);
  } finally {
    process.exit(0);
  }
});
