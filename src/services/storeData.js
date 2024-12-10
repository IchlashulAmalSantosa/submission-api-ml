const admin = require("firebase-admin");
const path = require("path");

const pathKey = path.resolve(
  __dirname,
  "../firestore/submissionmlgc-ichlashulamal-d88aa9c0b3b6.json"
);

// Inisialisasi Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require(pathKey)),
  });
}

const db = admin.firestore();

async function storeData(id, data) {
  try {
    const predictCollection = db.collection("predictions");
    await predictCollection.doc(id).set(data);
    console.log("Data stored successfully:", data);
  } catch (error) {
    console.error("Error storing data:", error);
  }
}

module.exports = storeData;
