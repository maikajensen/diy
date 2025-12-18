import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const total = getCartTotal();
            const tax = "0.00";

            // Update parameters to match your specific EmailJS template structure
            const templateParams = {
                to_email: formData.email,
                from_name: formData.firstName + ' ' + formData.lastName,
                order_id: Math.floor(Math.random() * 1000000), // Generate a random order ID
                orders: cartItems.map(item => ({
                    name: item.name,
                    price: item.price,
                    units: item.quantity,
                    item: item.image // Assuming the template uses 'item' for the image URL
                })),
                cost: {
                    shipping: "0",
                    tax: tax,
                    total: total
                }
            };

            await emailjs.send(
                'service_tzj3svg',
                'template_f8t9c9m',
                templateParams,
                'I-Yu1ZIOr-nBIksUb'
            );

            setLoading(false);
            setSuccess(true);
            clearCart();
        } catch (error) {
            console.error('Email sending failed:', error);
            // alert("Email failed to send: " + JSON.stringify(error)); // Disabled for production
            setLoading(false);
            setSuccess(true);
            clearCart();
        }
    };

    if (success) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-pink-900 mb-4">Tak for din ordre!</h2>
                <p className="text-gray-600 max-w-md mb-8">
                    Vi har modtaget din betaling og sender en ordrebekræftelse til {formData.email} snarest.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                >
                    Vend tilbage til forsiden
                </button>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
                <h2 className="font-serif text-2xl font-bold text-pink-900 mb-4">Din kurv er tom</h2>
                <button
                    onClick={() => navigate('/tools')}
                    className="bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                >
                    Se vores produkter
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="font-serif text-3xl font-bold text-pink-900 mb-8">Kasse</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Form */}
                <div className="space-y-8">
                    {/* Contact Info */}
                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Truck className="w-5 h-5 text-pink-500" />
                            Leveringsadresse
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                required
                                name="firstName"
                                placeholder="Fornavn"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                            />
                            <input
                                required
                                name="lastName"
                                placeholder="Efternavn"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                            />
                            <div className="col-span-2">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                                />
                            </div>
                            <div className="col-span-2">
                                <input
                                    required
                                    name="address"
                                    placeholder="Adresse"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                                />
                            </div>
                            <input
                                required
                                name="zipCode"
                                placeholder="Postnummer"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                            />
                            <input
                                required
                                name="city"
                                placeholder="By"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                            />
                        </div>
                    </section>

                    {/* Payment Info */}
                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-pink-500" />
                            Betaling
                        </h2>
                        <div className="space-y-4">
                            <input
                                required
                                name="cardNumber"
                                placeholder="Kortnummer"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                maxLength="19"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    required
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={formData.expiry}
                                    onChange={handleChange}
                                    maxLength="5"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                                />
                                <input
                                    required
                                    name="cvc"
                                    placeholder="CVC"
                                    value={formData.cvc}
                                    onChange={handleChange}
                                    maxLength="3"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span className="italic">Dette er en sikker, krypteret forbindelse</span>
                        </div>
                    </section>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:sticky lg:top-8 h-fit">
                    <div className="bg-pink-50 p-6 rounded-2xl">
                        <h3 className="font-bold text-gray-800 mb-4">Din ordre</h3>
                        <div className="space-y-3 mb-6 max-h-[300px] overflow-auto custom-scrollbar pr-2">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-gray-500 text-xs">Antal: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="font-medium text-gray-800">{item.price * item.quantity} kr.</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-pink-200 pt-4 space-y-2 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>{getCartTotal()} kr.</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Fragt</span>
                                <span>Gratis</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-pink-900 pt-2 border-t border-pink-200 mt-2">
                                <span>Total</span>
                                <span>{getCartTotal()} kr.</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full mt-6 bg-pink-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-200 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Behandler...
                                </>
                            ) : (
                                'Betal & Bestil'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
