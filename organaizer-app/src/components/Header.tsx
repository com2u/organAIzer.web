import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faRobot, faEuroSign, faInfoCircle, faCloud, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';
import { LanguageSwitch } from './LanguageSwitch';

export const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold">
            <img src="/organaizer.png" alt="OrganAIzer Logo" className="w-8 h-8 mr-2" />
            {t('home:title')}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="flex items-center hover:text-blue-600">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {t('navigation.home')}
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-blue-600">
                <FontAwesomeIcon icon={faCloud} className="mr-2" />
                {t('navigation.products')}
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border-2 border-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link to="/produkte" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FontAwesomeIcon icon={faCloud} className="mr-2" />
                  {t('navigation.productsSaaS')}
                </Link>
                <Link to="/produkte" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FontAwesomeIcon icon={faServer} className="mr-2" />
                  {t('navigation.productsSelfHosted')}
                </Link>
                <Link to="/produkte" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FontAwesomeIcon icon={faWrench} className="mr-2" />
                  {t('navigation.productsCustom')}
                </Link>
              </div>
            </div>
            
            <Link to="/technologie" className="flex items-center hover:text-blue-600">
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              {t('navigation.technology')}
            </Link>
            <Link to="/ai" className="flex items-center hover:text-blue-600">
              <FontAwesomeIcon icon={faRobot} className="mr-2" />
              {t('navigation.ai')}
            </Link>
            <Link to="/preise" className="flex items-center hover:text-blue-600">
              <FontAwesomeIcon icon={faEuroSign} className="mr-2" />
              {t('navigation.pricing')}
            </Link>
            <Link to="/ueber-uns" className="flex items-center hover:text-blue-600">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              {t('navigation.about')}
            </Link>
          </nav>
          
          <LanguageSwitch />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2">{t('navigation.home')}</Link>
            <div className="space-y-1">
              <p className="font-semibold">{t('navigation.products')}:</p>
              <Link to="/produkte" className="block py-1 pl-4">{t('navigation.productsSaaS')}</Link>
              <Link to="/produkte" className="block py-1 pl-4">{t('navigation.productsSelfHosted')}</Link>
              <Link to="/produkte" className="block py-1 pl-4">{t('navigation.productsCustom')}</Link>
            </div>
            <Link to="/technologie" className="block py-2">{t('navigation.technology')}</Link>
            <Link to="/ai" className="block py-2">{t('navigation.ai')}</Link>
            <Link to="/preise" className="block py-2">{t('navigation.pricing')}</Link>
            <Link to="/ueber-uns" className="block py-2">{t('navigation.about')}</Link>
          </div>
        )}
      </div>
    </header>
  );
};
