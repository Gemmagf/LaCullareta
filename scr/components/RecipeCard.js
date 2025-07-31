import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Timer, Users } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-gray-200/50"
      onClick={() => onClick(recipe.id)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
          {recipe.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center justify-between text-gray-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-blue-500" />
            <span>{recipe.prep_time_minutes + recipe.cook_time_minutes} min</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-500" />
            <span>{recipe.servings} raciones</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;