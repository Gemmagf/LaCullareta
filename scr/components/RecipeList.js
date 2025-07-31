import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecipeCard from './RecipeCard';
import { BookOpen, Search } from 'lucide-react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  if (recipes.length === 0) {
    return (
      <motion.div
        className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        >
          <Search className="w-12 h-12 text-orange-500" />
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ¡No hay recetas aquí!
        </motion.h3>

        <motion.p
          className="text-gray-500 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Parece que tu nevera está tan vacía como esta lista. ¡Añade algunas recetas!
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BookOpen className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          Explora Recetas ({recipes.length})
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={onSelectRecipe}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RecipeList;