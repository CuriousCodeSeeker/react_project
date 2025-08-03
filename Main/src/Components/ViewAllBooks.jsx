import React, { useState } from 'react';
import Cards from './Cards';

const ViewAllBooks = () => {
    const [viewAllButton, setViewAllButton] = useState(false);
    return (
        <section className="py-12 bg-gray-50 min-h-[60vh]">
            <div className="container mx-auto px-4">
                <h2 className="text-1xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
                    View All Books
                </h2>
                <div className="text-center mb-8">
                    <button
                        className="text-blue-600 hover:underline font-medium"
                        onClick={() => setViewAllButton(!viewAllButton)}
                    >
                        {viewAllButton ? 'Hide Books' : 'View All'}
                    </button>
                </div>
                {viewAllButton && <Cards />}
            </div>
        </section>
    );
};

export default ViewAllBooks;
