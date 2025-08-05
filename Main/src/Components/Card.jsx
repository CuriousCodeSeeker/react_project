import React from 'react';

const Card = ({ title, description, stars, link }) => {
    return (
        <div className="bg-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between h-full transition-transform hover:scale-105 hover:shadow-xl">
            <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-2">{title}</h2>
                <p className="text-gray-700 mb-4 whitespace-pre-line">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.floor(stars) ? 'text-yellow-400' : 'text-gray-300'}>&#9733;</span>
                    ))}
                    <span className="ml-1 text-sm text-gray-500">({stars})</span>
                </div>
                
                <a href={link} className="text-blue-600 hover:underline font-medium">Read more</a>
            </div>
        </div>
    );
};

export default Card;
