// components/BookModal.tsx
import React, { useState } from "react";

interface Book {
  imageUrl: string;
  title: string;
  author: string;
  bookUrl: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: Book) => void; // Pass a function to add a book
}

const BookModal: React.FC<ModalProps> = ({ isOpen, onClose, onAddBook }) => {
  const [book, setBook] = useState<Book>({
    imageUrl: "",
    title: "",
    author: "",
    bookUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook(book);
    onClose(); // Close the modal after adding the book
  };

  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
      <div className="bg-neutral-950 p-6 rounded-lg shadow-lg w-6/12 border border-4 border-black/40">
        <h3 className="text-xl mb-4">Add New Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={book.imageUrl}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 bg-neutral-800 bg-neutral-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 bg-neutral-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 bg-neutral-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Book URL</label>
            <input
              type="text"
              name="bookUrl"
              value={book.bookUrl}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 bg-neutral-800"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-neutral-800/40 px-4 py-2 rounded hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          >
            Add Book
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 text-white bg-neutral-800/40 px-4 py-2 rounded hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
