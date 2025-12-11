import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl p-4 border border-pink-100 hover:border-pink-300 transition-colors flex flex-col h-full">
            <div className="aspect-square rounded-lg bg-pink-50 mb-4 overflow-hidden relative group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply"
                />
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-50 text-pink-600">
                    <Plus className="w-5 h-5" />
                </button>
            </div>
            <div className="flex-grow">
                <p className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="font-serif font-bold text-lg text-charcoal mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg text-pink-700">{product.price} kr.</span>
                <button className="text-sm font-medium text-pink-600 hover:text-pink-800 underline decoration-pink-300 underline-offset-4">
                    Læg i kurv
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
