"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const page = () => {
  const places = [
    {
      imageUrl:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg",
      title: "How to win friends and influence People",
      author: "Dale Carnegie",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://www.thebvnewspaper.com/wp-content/uploads/2018/10/1480971639-thousand-splendid-suns-tickets.jpg",
      title: "A thousand splendid suns",
      author: "Khaled Hosseini",
      bookUrl: "",
    },
    {
      imageUrl: "https://cdn2.penguin.com.au/covers/400/9780141315188.jpg",
      title: "The diary of a young by Anne Frank review",
      author: "Anne Frank",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://library.umpsa.edu.my/images/2024/03/22/Rich%20Dad%20Poor%20Dad.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/71pXnVZWo5L._AC_UF894,1000_QL80_.jpg",
      title: "Social Engineering: The Art of Human Hacking",
      author: "Christopher Hadnagy",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://www.marclevy.com/wp-content/uploads/2023/03/FILLE_COMME_ELLE_222127106_000_REIMP-scaled.jpg",
      title: "A Woman Like Her",
      author: "Marc Levy",
      bookUrl: "",
    },
    {
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
        title: "The Alchemist",
        author: "Paulo Coelho",
        bookUrl: "",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/717p8VLz79L._AC_UF1000,1000_QL80_.jpg",
        title: "Influence: Science and Practice",
        author: "Robert Cialdini",
        bookUrl: "",
      },

      
   
  ];
  return (
    <div className="relative  mx-auto my-24">
      <h2 className="text-center text-5xl text-white font-bold py-12">
        My Books List
      </h2>
      {/* Map through the list of places */}
      <div className="grid grid-cols-3">
        {places.map((place, index) => (
          <div key={index} className="m-4 hover:cursor-pointer">
            <DirectionAwareHover imageUrl={place.imageUrl}>
              <p className="font-bold text-xl">{place.title}</p>
              <p className="font-normal text-sm">by {place.author}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
