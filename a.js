const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Set strictQuery to the desired option
mongoose.set('strictQuery', false);

// MongoDB URL with database name
const mongoUrl = "mongodb+srv://wibu:wibu@cluster0.57u19nz.mongodb.net/wibuManagement?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", async () => {
  console.log("Connected to MongoDB");

  try {
    // List collections in the connected database
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:");

    const allData = {};

    for (const collection of collections) {
      const colName = collection.name;
      console.log(`Fetching data from collection: ${colName}`);

      // Fetch all documents from the collection
      const documents = await mongoose.connection.db.collection(colName).find().toArray();
      allData[colName] = documents; // Store documents by collection name
    }

    // Write data to a JSON file
    const outputPath = path.join(__dirname, 'exportedData.json');
    fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2)); // Pretty print JSON
    console.log(`Data exported successfully to ${outputPath}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
});

mongoose.connection.on("error", (err) => {
  console.error("Connection error:", err);
});
