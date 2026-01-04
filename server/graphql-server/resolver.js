const data = {
  authors: [
    { id: "1", name: "Chirag Goel", bookIds: ["101", "102"] },
    { id: "2", name: "Akshay Saini", bookIds: ["103"] },
    { id: "3", name: "Hitesh Choudhary", bookIds: ["104", "105"] },
    { id: "4", name: "Kent C. Dodds", bookIds: ["106"] },
    { id: "5", name: "Dan Abramov", bookIds: ["107", "108"] },
  ],

  books: [
    {
      id: "101",
      title: "Namaste Frontend System Design",
      publishedYear: 2024,
      authorId: "1",
    },
    {
      id: "102",
      title: "Advanced React Patterns",
      publishedYear: 2023,
      authorId: "1",
    },
    {
      id: "103",
      title: "JavaScript Deep Dive",
      publishedYear: 2022,
      authorId: "2",
    },
    {
      id: "104",
      title: "Chai aur JavaScript",
      publishedYear: 2021,
      authorId: "3",
    },
    {
      id: "105",
      title: "Backend with Node.js",
      publishedYear: 2020,
      authorId: "3",
    },
    {
      id: "106",
      title: "Testing React Applications",
      publishedYear: 2019,
      authorId: "4",
    },
    {
      id: "107",
      title: "Redux Essentials",
      publishedYear: 2018,
      authorId: "5",
    },
    {
      id: "108",
      title: "React Internals Explained",
      publishedYear: 2020,
      authorId: "5",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books: (parent) => {
      return parent.bookIds.map((bookId) =>
        data.books.find((book) => book.id === bookId)
      );
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (_, { title, publishedYear, authorId }) => {
      // validate author
      const authorExists = data.authors.some(
        (author) => author.id === authorId
      );

      if (!authorExists) {
        throw new Error("Author not found");
      }

      const newBook = {
        id: String(Date.now()),
        title,
        publishedYear,
        authorId,
      };

      data.books.push(newBook);
      console.log(data.books)

      return newBook;
    },
  },
};
