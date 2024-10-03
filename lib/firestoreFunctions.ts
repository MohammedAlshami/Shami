import { db } from "./firebaseConfig"; // Import the `db` from your config
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
/**
 * Update a record in a Firestore collection by its document ID.
 * @param {string} tableName - The name of the Firestore collection.
 * @param {string} id - The document ID of the record to update.
 * @param {object} updatedFields - The fields to update in the document.
 * @returns {Promise<void>} - A promise that resolves when the record is updated.
 */
export const updateRecord = async (tableName: string, id: string, updatedFields: object): Promise<void> => {
  try {
    const docRef = doc(db, tableName, id);
    await updateDoc(docRef, updatedFields);
    console.log(`Document with ID ${id} updated in collection "${tableName}".`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(`Error updating document with ID ${id} in "${tableName}":`, e.message, e.code, e);
    
    if (e.code === 'not-found') {
      throw new Error(`Document with ID ${id} not found in the "${tableName}" collection.`);
    } else if (e.code === 'permission-denied') {
      throw new Error(`Permission denied: You don't have access to update the "${tableName}" collection.`);
    } else {
      throw new Error(`Failed to update document with ID ${id}: ${e.message}`);
    }
  }
};

/**
 * Delete a record from a Firestore collection by its document ID.
 * @param {string} tableName - The name of the Firestore collection.
 * @param {string} id - The document ID of the record to delete.
 * @returns {Promise<void>} - A promise that resolves when the record is deleted.
 */
export const deleteRecord = async (tableName: string, id: string): Promise<void> => {
  try {
    const docRef = doc(db, tableName, id);
    await deleteDoc(docRef);
    console.log(`Document with ID ${id} deleted from collection "${tableName}".`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(`Error deleting document with ID ${id} from "${tableName}":`, e.message, e.code, e);
    
    if (e.code === 'not-found') {
      throw new Error(`Document with ID ${id} not found in the "${tableName}" collection.`);
    } else if (e.code === 'permission-denied') {
      throw new Error(`Permission denied: You don't have access to delete from the "${tableName}" collection.`);
    } else {
      throw new Error(`Failed to delete document with ID ${id}: ${e.message}`);
    }
  }
};


