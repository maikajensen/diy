import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ShopByProject from './pages/ShopByProject';
import AllTools from './pages/AllTools';
import { useCart } from './context/CartContext';
import { Trash2 } from 'lucide-react';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ShopByProject />} />
                <Route path="/tools" element={<AllTools />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Layout>
    );
}

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                    <h2 className="font-serif text-2xl font-bold text-pink-800 mb-2">Din kurv er tom</h2>
                    <p className="text-pink-600 mb-6">Men du kan finde masser af gode projekter på forsiden!</p>
                    <Link to="/tools" className="bg-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors">
                        Se vores værktøj
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="font-serif text-3xl font-bold text-pink-900 mb-8">Indkøbskurv</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                <div className="p-6 space-y-6">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4 py-4 border-b border-pink-50 last:border-0">
                            <div className="w-20 h-20 bg-pink-50 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-charcoal">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.price} kr.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100"
                                >
                                    -
                                </button>
                                <span className="font-medium w-8 text-center">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-red-500 p-2"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="bg-pink-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Samlet pris</p>
                        <p className="text-2xl font-serif font-bold text-pink-900">{getCartTotal()} kr.</p>
                    </div>
                    <button className="w-full sm:w-auto bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                        Gå til kassen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
