import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const AllTools = () => {
    const [activeFilter, setActiveFilter] = useState('Alle');

    const categories = ['Alle', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeFilter === 'Alle'
        ? products
        : products.filter(p => p.category === activeFilter);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <h1 className="font-serif text-4xl font-bold text-pink-900 mb-2">Alle Værktøjer</h1>
                    <p className="text-pink-800/70">Kvalitetsværktøj udvalgt specielt til IKEA hacks.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-pink-100 shadow-sm">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeFilter === category
                                    ? 'bg-pink-100 text-pink-800 shadow-sm'
                                    : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-24 bg-pink-50 rounded-3xl border-2 border-dashed border-pink-200">
                    <p className="text-pink-500 font-medium">Ingen værktøjer fundet i denne kategori.</p>
                </div>
            )}
        </div>
    );
};

export default AllTools;
