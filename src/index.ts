import dotenv from "dotenv";
import app from "./app";
import { initPool, close, AppDataSource } from "./config/database";

//Extensions
import "./shared/extension/string_extension";

dotenv.config();

const PORT = process.env.PORT || 3000;

//Start services
const startServer = async () => {
  try {
    await initPool();
    await AppDataSource.initialize();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
  } catch (error) {
    console.error("Failed to initialize database pool", error);
    process.exit(1);
  }
};

startServer();

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