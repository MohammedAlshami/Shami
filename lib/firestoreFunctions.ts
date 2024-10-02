import { db } from "./firebaseConfig"; // Import the `db` from your config
import { collection, addDoc, getDocs } from "firebase/firestore";

/**
 * Insert a record or list of records into a Firestore collection.
 * @param {string} tableName - The name of the Firestore collection.
 * @param {object|Array<object>} record - A single record or a list of records to insert.
 * @returns {Promise<Array<string>>} - A list of document IDs of the inserted records.
 */
export const insertRecord = async (tableName: string, record: object | object[]): Promise<string[]> => {
  try {
    const ids: string[] = [];

    // Check if it's a list of records
    if (Array.isArray(record)) {
      // Iterate through each record and insert it individually
      for (const rec of record) {
        const docRef = await addDoc(collection(db, tableName), rec);
        console.log("Document written with ID: ", docRef.id);
        ids.push(docRef.id); // Collect the inserted document IDs
      }
    } else {
      // Insert a single record
      const docRef = await addDoc(collection(db, tableName), record);
      console.log("Document written with ID: ", docRef.id);
      ids.push(docRef.id); // Return an array with one ID for consistency
    }

    return ids; // Return all inserted document IDs
  } catch (e: any) {
    // Print the full error to see what went wrong
    console.error("Error adding document(s): ", e.message, e.code, e);
    throw new Error(`Failed to insert record(s): ${e.message}`);
  }
};

/**
 * Retrieve all records from a Firestore collection with detailed error logging.
 * @param {string} tableName - The name of the Firestore collection.
 * @returns {Promise<Array>} - An array of documents from the collection.
 */
export const getAllRecords = async (tableName: string): Promise<object[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, tableName));
    const records: object[] = [];
    
    // Check if the collection has data
    if (querySnapshot.empty) {
      console.warn(`Warning: No documents found in the collection "${tableName}".`);
    }

    querySnapshot.forEach((doc) => {
      records.push({ id: doc.id, ...doc.data() });
    });

    return records;
  } catch (e: any) {
    console.error("Error retrieving documents:", e.message, e.code, e);

    if (e.code === 'permission-denied') {
      throw new Error(`Permission denied: You don't have access to the "${tableName}" collection.`);
    } else if (e.code === 'unavailable') {
      throw new Error(`Firestore service is unavailable. Please try again later.`);
    } else if (e.code === 'not-found') {
      throw new Error(`Collection "${tableName}" not found.`);
    } else {
      throw new Error(`Failed to retrieve records from the "${tableName}" collection: ${e.message}`);
    }
  }
};
