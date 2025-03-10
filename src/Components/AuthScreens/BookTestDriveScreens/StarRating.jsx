import React, { useState } from 'react';
import { Star } from 'lucide-react';  // Import the Star icon from lucide-react

const StarRating = () => {
  const [rating, setRating] = useState(0); // To hold the rating value
  const [hovered, setHovered] = useState(0); // To hold the hovered rating value for visual feedback

  const handleMouseEnter = (index) => setHovered(index); // Set hovered state when user hovers over a star
  const handleMouseLeave = () => setHovered(0); // Reset hovered state when mouse leaves

  const handleClick = (index) => setRating(index); // Set the rating when a star is clicked

  return (
    <div className="flex justify-center items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24} // Set the size of the star icon
          fill={star <= (hovered || rating) ? "#FFD700" : "#D1D5DB"} // Gold color for filled stars, light gray for unfilled
          className="cursor-pointer transition-colors duration-200 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-5 lg:h-5"
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
      <p className="text-white ml-2 text-sm">Rating: {rating} / 5</p>
    </div>
  );
};

export default StarRating;
