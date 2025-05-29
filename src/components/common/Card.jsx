'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({ 
  title, 
  icon, 
  iconAlt = 'Feature icon',
  iconWidth = 80,
  iconHeight = 80,
  className = '',
  children 
}) => {
  return (
    <div className={`bg-gradient-to-br from-[#efefef14] via-[#ffffff14] to-[#fafafa3b] border-2 border-solid border-[#ffffff99] border-opacity-60 rounded-xl p-8 flex flex-col items-center text-center shadow-lg ${className}`}>
      {icon && (
        <div className="mb-4">
          <Image 
            src={icon} 
            alt={iconAlt} 
            width={iconWidth} 
            height={iconHeight}
          />
        </div>
      )}
      {title && <h3 className="text-white text-xl font-medium mb-4">{title}</h3>}
      <div className="text-white">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;