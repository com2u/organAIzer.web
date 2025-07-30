import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faCogs, faRobot, faEuroSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const Navigation: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="bg-white border-b border-black">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center space-x-4 py-4">
          <li>
            <Link to="/" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {t('navigation.home')}
            </Link>
          </li>
          <li>
            <Link to="/produkte" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faBox} className="mr-2" />
              {t('navigation.products')}
            </Link>
          </li>
          <li>
            <Link to="/technologie" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              {t('navigation.technology')}
            </Link>
          </li>
          <li>
            <Link to="/ai" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faRobot} className="mr-2" />
              {t('navigation.ai')}
            </Link>
          </li>
          <li>
            <Link to="/preise" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faEuroSign} className="mr-2" />
              {t('navigation.pricing')}
            </Link>
          </li>
          <li>
            <Link to="/ueber-uns" className="flex items-center px-3 py-2 text-black hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              {t('navigation.about')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
