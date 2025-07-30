import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-white border-t-2 border-black mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/organaizer.png" alt="OrganAIzer Logo" className="w-8 h-8 mr-2" />
              <h3 className="text-xl font-bold">{t('home:title')}</h3>
            </div>
            <p className="text-gray-600">
              {t('home:description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('about:contact.title')}</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {t('about:owner.name')}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {t('about:owner.location')}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {t('about:owner.email')}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navigation.title')}</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-blue-600">{t('navigation.home')}</Link>
              <Link to="/produkte" className="block hover:text-blue-600">{t('navigation.products')}</Link>
              <Link to="/technologie" className="block hover:text-blue-600">{t('navigation.technology')}</Link>
              <Link to="/ai" className="block hover:text-blue-600">{t('navigation.ai')}</Link>
              <Link to="/preise" className="block hover:text-blue-600">{t('navigation.pricing')}</Link>
              <Link to="/ueber-uns" className="block hover:text-blue-600">{t('navigation.about')}</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; 2025 OrganAIzer.App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
