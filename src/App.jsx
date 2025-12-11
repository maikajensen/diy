import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ShopByProject from './pages/ShopByProject';
import AllTools from './pages/AllTools';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ShopByProject />} />
                <Route path="/tools" element={<AllTools />} />
                <Route path="/cart" element={
                    <div className="flex items-center justify-center h-[60vh]">
                        <div className="text-center">
                            <h2 className="font-serif text-2xl font-bold text-pink-800 mb-2">Din kurv er tom</h2>
                            <p className="text-pink-600">Men du kan finde masser af gode projekter på forsiden!</p>
                        </div>
                    </div>
                } />
            </Routes>
        </Layout>
    );
}

export default App;
