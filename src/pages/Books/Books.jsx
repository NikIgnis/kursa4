import React, { useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import styles from './Books.module.css';
import booksData from '../../data/books';

const Books = () => {
  const [books] = useState(booksData);
  const [sortOption, setSortOption] = useState('title');
  const [filterGenre, setFilterGenre] = useState('all');
  const [filterRating, setFilterRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const genres = ['all', ...new Set(books.map(book => book.genre))];

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleGenreFilter = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleRatingFilter = (e) => {
    setFilterRating(Number(e.target.value));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredBySearch = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description?.toLowerCase().includes(searchQuery.toLowerCase()) || false
  );

  const sortedAndFilteredBooks = [...filteredBySearch]
    .filter(book => filterGenre === 'all' || book.genre === filterGenre)
    .filter(book => book.rating >= filterRating)
    .sort((a, b) => {
      if (sortOption === 'title') return a.title.localeCompare(b.title);
      if (sortOption === 'price') return a.price - b.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className={styles.booksPage}>
      <h2 className={styles.pageTitle}>Наши книги</h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Поиск по названию, автору или описанию..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label htmlFor="sort">Сортировать по:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="title">Названию</option>
            <option value="price">Цене</option>
            <option value="rating">Рейтингу</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="genre">Жанр:</label>
          <select id="genre" value={filterGenre} onChange={handleGenreFilter}>
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre === 'all' ? 'Все жанры' : genre}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="rating">Минимальный рейтинг:</label>
          <select id="rating" value={filterRating} onChange={handleRatingFilter}>
            <option value="0">Любой</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <div className={styles.booksGrid}>
        {sortedAndFilteredBooks.length > 0 ? (
          sortedAndFilteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>Книги не найдены</p>
        )}
      </div>
    </div>
  );
};

export default Books;