import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, products } from '../data';
import ProjectCard from '../components/ProjectCard';
import { X, Check, ShoppingBag, Hammer } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ShopByProject = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { addToCart } = useCart();

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeBundle = () => {
        setSelectedProject(null);
    };

    const getProjectTools = (toolIds) => {
        return products.filter(product => toolIds.includes(product.id));
    };

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <div className="bg-pink-100 py-16 md:py-24 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-pink-900 mb-6">
                        Byg smukke møbler selv
                    </h1>
                    <p className="text-lg text-pink-800/80 max-w-2xl mx-auto mb-8">
                        Vi har samlet alt det værktøj, du skal bruge til de mest populære IKEA-hacks. Vælg dit projekt, eller gå på opdagelse i vores værktøjsudvalg, og kom i gang med det samme.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" className="w-full sm:w-auto bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                            Se Projekter
                        </a>
                        <Link to="/tools" className="w-full sm:w-auto bg-white text-pink-600 border-2 border-pink-100 px-8 py-3 rounded-xl font-bold hover:bg-pink-50 hover:border-pink-200 transition-colors flex items-center justify-center gap-2">
                            <Hammer className="w-5 h-5" />
                            Se alt værktøj
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl font-bold text-pink-900 mb-8 text-center">Vælg dit projekt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>
            </div>

            {/* Bundle View Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="relative">
                            <button
                                onClick={closeBundle}
                                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-charcoal" />
                            </button>
                            <div className="h-64 md:h-80 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="mb-8">
                                <h2 className="font-serif text-3xl font-bold text-pink-900 mb-2">{selectedProject.title}</h2>
                                <p className="text-charcoal/80 text-lg">{selectedProject.description}</p>
                            </div>

                            <div className="bg-pink-50 rounded-2xl p-6 mb-8">
                                <h3 className="font-serif text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5" />
                                    Værktøjspakken indeholder:
                                </h3>
                                <div className="space-y-4">
                                    {getProjectTools(selectedProject.tools).map(tool => (
                                        <div key={tool.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-pink-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 bg-pink-50 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img src={tool.image} alt={tool.name} className="w-full h-full object-cover mix-blend-multiply" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-charcoal">{tool.name}</h4>
                                                    <p className="text-sm text-gray-500">{tool.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-bold text-pink-700">{tool.price} kr.</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addToCart(tool);
                                                    }}
                                                    className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 flex items-center justify-center transition-colors"
                                                    title="Læg i kurv"
                                                >
                                                    <span className="text-lg font-bold">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6">
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-gray-500 mb-1">Samlet pris for pakken</p>
                                    <p className="text-3xl font-serif font-bold text-pink-800">
                                        {getProjectTools(selectedProject.tools).reduce((sum, tool) => sum + tool.price, 0)} kr.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        const tools = getProjectTools(selectedProject.tools);
                                        tools.forEach(tool => addToCart(tool));
                                        closeBundle();
                                    }}
                                    className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-pink-200 flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Læg hele pakken i kurv
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopByProject;
