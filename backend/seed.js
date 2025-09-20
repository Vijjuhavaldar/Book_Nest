const mongoose = require("mongoose");
const Book = require("./models/books");

mongoose
  .connect("mongodb+srv://vijjuhavaldar_db_user:HKcWLVND2UNcLksE@cluster0.mbigotd.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"));

const books = [
  // English Books
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    image_url: "https://m.media-amazon.com/images/I/41AY0iW4nBL._SX324_BO1,204,203,200_.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    year: 2018,
    image_url: "https://m.media-amazon.com/images/I/41XOR4AwUCL._SX331_BO1,204,203,200_.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    image_url: "https://m.media-amazon.com/images/I/519X1m9CUsL._SX327_BO1,204,203,200_.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    year: 2011,
    image_url: "https://m.media-amazon.com/images/I/41X8z0V6XUL._SX324_BO1,204,203,200_.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    image_url: "https://m.media-amazon.com/images/I/51b5YG6Y1rL._SX324_BO1,204,203,200_.jpg"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    year: 2012,
    image_url: "https://m.media-amazon.com/images/I/41g7GJZRq6L._SX331_BO1,204,203,200_.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    image_url: "https://m.media-amazon.com/images/I/41xEejpqNxL._SX320_BO1,204,203,200_.jpg"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    year: 1932,
    image_url: "https://m.media-amazon.com/images/I/41tzH1Yo6lL._SX324_BO1,204,203,200_.jpg"
  },

  // Kannada Books - Using placeholder and general book cover images
  {
    title: "Kusuma's Story",
    author: "Vaidehi",
    genre: "Fiction",
    year: 2000,
    image_url: "https://via.placeholder.com/300x400/8B7355/FFFFFF?text=Kusuma%27s+Story"
  },
  {
    title: "Mookajjiya Kanasugalu",
    author: "K. Shivaram Karanth",
    genre: "Fiction",
    year: 1968,
    image_url: "https://via.placeholder.com/300x400/D2B48C/000000?text=Mookajjiya+Kanasugalu"
  },
  {
    title: "Malegalalli Madumagalu",
    author: "K. Shivaram Karanth",
    genre: "Fiction",
    year: 1957,
    image_url: "https://via.placeholder.com/300x400/CD853F/FFFFFF?text=Malegalalli+Madumagalu"
  },
  {
    title: "Parva",
    author: "S. L. Bhyrappa",
    genre: "Fiction",
    year: 1979,
    image_url: "https://via.placeholder.com/300x400/A0522D/FFFFFF?text=Parva"
  },
  {
    title: "Grahana",
    author: "S. L. Bhyrappa",
    genre: "Fiction",
    year: 2007,
    image_url: "https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Grahana"
  },
  {
    title: "Swarajya",
    author: "B. M. Srikantaiah",
    genre: "History",
    year: 1947,
    image_url: "https://via.placeholder.com/300x400/FF8C00/000000?text=Swarajya"
  },
  {
    title: "Chomana Dudi",
    author: "K. Shivaram Karanth",
    genre: "Fiction",
    year: 1938,
    image_url: "https://via.placeholder.com/300x400/DAA520/000000?text=Chomana+Dudi"
  }

  
];

const seedDB = async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();