import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Hammer, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
    const location = useLocation();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    const isActive = (path) => {
        return location.pathname === path ? 'text-pink-600 font-semibold' : 'text-charcoal hover:text-pink-500';
    };

    return (
        <div className="min-h-screen flex flex-col bg-soft-cream">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-pink-100 p-2 rounded-full">
                                <Hammer className="w-6 h-6 text-pink-500" />
                            </div>
                            <span className="font-serif text-2xl font-bold text-pink-800 tracking-tight">GDS værktøj</span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
                                Byg efter Projekt
                            </Link>
                            <Link to="/tools" className={`${isActive('/tools')} transition-colors duration-200`}>
                                Alle Værktøjer
                            </Link>
                            <Link to="/cart" className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full text-pink-700 hover:bg-pink-100 transition-colors relative">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="font-medium">Kurv</span>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile Menu Button (Simplified for now) */}
                        <div className="md:hidden flex items-center">
                            <Link to="/cart" className="p-2 text-charcoal relative">
                                <ShoppingCart className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-pink-50 mt-12 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-serif text-lg font-bold text-pink-800 mb-4">GDS værktøj</h3>
                            <p className="text-pink-900/70 text-sm leading-relaxed">
                                Gør det nemt at bygge smukke møbler selv. Vi samler værktøjet, så du kan fokusere på projektet.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-pink-800 mb-4">Links</h4>
                            <ul className="space-y-2 text-sm text-pink-900/70">
                                <li><Link to="/" className="hover:text-pink-800">Projekter</Link></li>
                                <li><Link to="/tools" className="hover:text-pink-800">Værktøj</Link></li>
                                <li><a href="#" className="hover:text-pink-800">Om os</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-pink-800 mb-4">Kontakt</h4>
                            <p className="text-sm text-pink-900/70">
                                Har du spørgsmål? <br />
                                Skriv til os på gdsvaerktoej@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-pink-200 text-center text-xs text-pink-500">
                        &copy; {new Date().getFullYear()} GDS værktøj. Alle rettigheder forbeholdes.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
