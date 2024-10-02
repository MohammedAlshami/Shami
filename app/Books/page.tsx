// pages/BooksPage.tsx (or your existing page)
"use client";
import { useEffect, useState } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { getAllRecords, insertRecord } from "@/lib/firestoreFunctions";
import BookModal from "./BookModal";
// Define the interface for a Book record
interface Book {
  imageUrl: string;
  title: string;
  author: string;
  bookUrl: string;
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksFromFirestore = await getAllRecords("Books");
        const typedBooks: Book[] = booksFromFirestore.map((record: any) => ({
          imageUrl: record.imageUrl,
          title: record.title,
          author: record.author,
          bookUrl: record.bookUrl,
        }));

        setBooks(typedBooks);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (book: Book) => {
    try {
      await insertRecord("Books", book); // Insert the book into Firestore
      setBooks((prev) => [...prev, book]); // Update the local state with the new book
    } catch (error) {
      console.error("Error adding book: ", error);
    }
  };

  return (
    <div className="relative mx-auto my-24">
      <div className="flex justify-between items-center py-12">
        <h2 className="text-center text-5xl text-white font-bold">
          My Books List
        </h2>
        <div
          onClick={() => setModalOpen(true)} // Open modal on click
          className="cursor-pointer text-sm text-white bg-neutral-800/40 border border-4 border-neutral-800 p-4 rounded-xl"
        >
          Add Book +
        </div>
      </div>
      {/* Map through the list of books */}
      <div className="grid grid-cols-3">
        {books.map((book, index) => (
          <div key={index} className="m-4 hover:cursor-pointer">
            <DirectionAwareHover imageUrl={book.imageUrl}>
              <p className="font-bold text-xl">{book.title}</p>
              <p className="font-normal text-sm">by {book.author}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
      {/* Modal for adding a book */}
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddBook={handleAddBook}
      />
    </div>
  );
};

export default BooksPage;
