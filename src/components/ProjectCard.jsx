import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-pink-100"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-serif text-2xl font-bold">{project.title}</h3>
                </div>
            </div>
            <div className="p-6">
                <p className="text-charcoal/80 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-800 transition-colors">
                    Se værktøjspakke <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
