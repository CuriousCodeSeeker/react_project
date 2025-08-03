import books from '../assets/books.json';
import Card from './Card';

const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {books.map((book) => (
                <Card key={book.id} {...book} />
            ))}
        </div>
    );
}
export default Cards;   