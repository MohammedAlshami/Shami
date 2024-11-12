import dotenv from "dotenv";
dotenv.config();

import { BufferMemory } from "langchain/memory";
import { FirestoreChatMessageHistory } from "@langchain/community/stores/message/firestore";
import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import admin from "firebase-admin";

// Initialize Firestore
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "shami-2f410",
    private_key_id: "f09ba0d20285f1eec44c8c05644dbd5ab462e0d1",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7vzdNMM8RrUCD\nil/+77Wu0D3xvKlRKW8VVi5qcXNRgcJkaKDtq+41NT8n0ZTE7Rsv8MGDF0qtOru5\nCl3AT14/Z5VvVe7gUsvNpbtC83b2+cPhB3hRn1LMeDJGgaOyK/Sj6O1Li8XM8BTD\nHxDfeH7x3MsefyqiBbAge0DKapmogpg14nzhVFnPCokYP8DiPXZvX/XK8fNC3NfO\nQTk21DgjNgfx7sdm2KsUk6rHU1Ynu9djZbsusaS/ZDXHR+zsris05Wh9RgSe4zVw\nUtbt9dRHvLtqHqUuJwUMZ5wMFI766klmj8dkimssiWC+/mzUP4Dfq7llRk2TLn+Q\nf020V9EDAgMBAAECggEAFsEzK6jZv/O2mPrBbb2R0JEuoMjT4KFb9EMQtxfu+Rb3\n/4Fq18N5yHsen23YURHHtMTCP2goRdyTefbWrAMykg603tyUah2+07rdelzVs1NM\nOU7Vd1cPCvcaaM83jtWi/eayM/DJ1W/XpFp0ihEpmZjACX8yJJb55MXrcV0AKJsO\nHRjHULc6ploZ+bJmEWFyglh1ohmLNshZ3vTaTB4My2js4XYozJIIw/xahB7BBVOs\nTUopwzve5qxjwplxFMfM2Ob3nvVtOHAipo4aX0Hpqp6NWuLqZ5tKsqfFcKykJZI6\nPxeSr1I/jY1OnhMwyzKW6FpuxwHq3jUq8BiD3uiLQQKBgQDrywMgXL2vp30HkdSV\nHGtMB5fJ9dMwPKN2iVxymsCxPjiMPmjz1DtxODXTb5jVIl252HCIsH+43VKytcpA\n1gOcUdSWmCfXegI9UKxzo6+bRdGLt6FPp5zxtRKyks01jQRMvD3lkoFFNMZ7/KiW\nuu5xgbK3Jii+MHQUzQorSjMrYQKBgQDL1iLehC8p3KB6ialp+6j6zxQznTIvqO7w\nz1xvr/NlliIecs3qbqa5Eg6rRP6RhRqCdHqP0TK5ChaXHZINOLReMpUKjpysAReo\n+kWCBoz4HLHJQd7aATcTDYK9TgYfT/orKZF6dqJ3/6l9vasOQzwr/STWPSjHr9IB\nI3R9rOCa4wKBgCJrtV4hC7O7sH3NZQoLZwJnTVo3H4g4Ieio7qzwOFbnbVvTtIB7\np93ERd9CuD3M0X/Sv8LEeTCkZnEeJpNGaqqEK5N8TLyg2/jVcQdEitsQ2yEZQlwd\nbMTAGSWmVnyNxGXrSOHdfC99H8hzvqyaRzqco1knIeV5r0hmEij1oPihAoGBAI5d\nkFsTvZEiXB9ZuK6iK2KJcVWfTCcHeWNNoQUMwhXIpynXC0TaZa3LE93BQX/HlD1b\nNyLtfNzKU/7Vk2WSnj9QWtJVys1Dsg++RP/MrXa5K98iF5Dx2lJ/VDn9nb8O7+5n\niQkchNsFAI8nAqrigMtEcg8EBlB511YeOkVwkir7AoGAWI6EImzb0O+siqgCC3Cu\n3WmA7MT2/xjx85gt3s33bSpnY/HgseqTsDPNH6VL4B4AdVpu/HrdY4ViR5eJpdog\nxNFpCVmqoDwotBf3OQk4Pg/UdVMICPuOYFD7jDxELqe4t3Ssw7URy083bMdvbYYR\nuG49efK+1MvLz9cpnbXiVFk=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-oubeb@shami-2f410.iam.gserviceaccount.com",
  }),
});

const memory = new BufferMemory({
  chatHistory: new FirestoreChatMessageHistory({
    collectionName: "Books",
    sessionId: "lc-example-id",
    userId: "a@example.com",
  }),
});

const model = new ChatOpenAI();
const chain = new ConversationChain({ llm: model, memory });

// Fetch all books from Firestore (without filtering by user)
async function getAllBooks() {
  const booksSnapshot = await admin.firestore().collection("Books").get();
  return booksSnapshot.docs.map((doc) => doc.data());
}

// Find similar books logic
function findSimilarBooks(book, allBooks) {
  return allBooks.filter(
    (otherBook) => otherBook.genre === book.genre && otherBook.id !== book.id
  );
}

const books = await getAllBooks();

// Generate recommendations for each book
const recommendations = books.map((book) => {
  const similarBooks = findSimilarBooks(book, books);
  return {
    book: book.title,
    similar: similarBooks.map((b) => b.title).join(", "),
  };
});

const res2 = await chain.invoke({
  input: `Based on the entire book collection, here are some similar recommendations: ${recommendations
    .map((rec) => `${rec.book}: ${rec.similar}`)
    .join(". ")}.`,
});

console.log({ res2 });
