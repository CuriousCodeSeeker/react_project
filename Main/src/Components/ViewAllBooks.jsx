import React, { useState } from 'react';
import Cards from './Cards';

const ViewAllBooks = () => {
    return (
        <section className="py-12 bg-gray-50 min-h-[60vh]">
            <div className="container mx-auto px-4">
                <h2 className="text-1xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
                <a href="/Books">View all books</a>
                </h2>
            </div>
        </section>
    );
};

export default ViewAllBooks;
