import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'en', name: 'EN', flag: '🇬🇧' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faGlobe} />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-2 py-1 rounded border ${
            i18n.language === lang.code
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black hover:bg-gray-100'
          }`}
          title={`Switch to ${lang.name}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};
