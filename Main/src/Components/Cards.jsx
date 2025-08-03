import books from '../assets/books.json';
import Card from './Card';

const Cards = () => {
    const renderBooks = books.slice(0,3)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {renderBooks.map((book) => (
                <Card key={book.id} {...book} />
            ))}
        </div>
    );
}
export default Cards;   