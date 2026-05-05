const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // 1. Await the connection and store the connection object
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // 2. Log exactly which host you connected to (helps debug if you hit the wrong DB)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // 3. Use console.error for actual errors
    console.error(`MongoDB Connection Error: ${error.message}`);
    
    // 4. CRITICAL: Exit the Node process if the DB fails
    // If your app depends on the DB, it shouldn't keep running if the DB is down.
    process.exit(1); 
  }
};

// 5. Optional but impressive: Listen for connection drops after initial load
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

module.exports = connectDb;