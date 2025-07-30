import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan';
  gradient?: boolean;
  hover?: boolean;
}

const backgroundColors = {
  blue: 'bg-gradient-to-br from-pastel-blue to-blue-200',
  purple: 'bg-gradient-to-br from-pastel-purple to-purple-200',
  pink: 'bg-gradient-to-br from-pastel-pink to-pink-200',
  red: 'bg-gradient-to-br from-pastel-red to-red-200',
  orange: 'bg-gradient-to-br from-pastel-orange to-orange-200',
  yellow: 'bg-gradient-to-br from-pastel-yellow to-yellow-200',
  green: 'bg-gradient-to-br from-pastel-green to-green-200',
  cyan: 'bg-gradient-to-br from-pastel-cyan to-cyan-200',
};

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  backgroundColor = 'blue',
  gradient = true,
  hover = true
}) => {
  return (
    <div className={`
      section-box 
      ${gradient ? backgroundColors[backgroundColor] : backgroundColors[backgroundColor].split(' ')[0]}
      ${hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};
