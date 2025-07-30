import React from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBrain, faLightbulb, faUsers, faCogs, faChartLine, faMagic, faClock, faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Ai: React.FC = () => {
  const { t } = useTranslation('ai');

  const aiFeatures = [
    {
      icon: faBrain,
      title: t('howItWorks.items.0.title'),
      description: t('howItWorks.items.0.description')
    },
    {
      icon: faLightbulb,
      title: t('howItWorks.items.1.title'),
      description: t('howItWorks.items.1.description')
    },
    {
      icon: faUsers,
      title: t('howItWorks.items.2.title'),
      description: t('howItWorks.items.2.description')
    },
    {
      icon: faCogs,
      title: t('howItWorks.items.3.title'),
      description: t('howItWorks.items.3.description')
    }
  ];

  // These arrays should contain keys that are translated in the JSX
  // The previous sed commands incorrectly embedded t() calls into the string values
  // Reverting to original structure and translating in JSX
  const currentCapabilitiesData = [
    {
      icon: faFileAlt,
      titleKey: "currentCapabilities.items.0.title",
      descriptionKey: "currentCapabilities.items.0.description"
    },
    {
      icon: faSearch,
      titleKey: "currentCapabilities.items.1.title",
      descriptionKey: "currentCapabilities.items.1.description"
    },
    {
      icon: faClock,
      titleKey: "currentCapabilities.items.2.title",
      descriptionKey: "currentCapabilities.items.2.description"
    },
    {
      icon: faMagic,
      titleKey: "currentCapabilities.items.3.title",
      descriptionKey: "currentCapabilities.items.3.description"
    }
  ];

  const futureRoadmapData = [
    {
      phaseKey: "futureRoadmap.items.0.phase",
      titleKey: "futureRoadmap.items.0.title",
      descriptionKey: "futureRoadmap.items.0.description",
      statusKey: "futureRoadmap.items.0.status"
    },
    {
      phaseKey: "futureRoadmap.items.1.phase",
      titleKey: "futureRoadmap.items.1.title",
      descriptionKey: "futureRoadmap.items.1.description",
      statusKey: "futureRoadmap.items.1.status"
    },
    {
      phaseKey: "futureRoadmap.items.2.phase",
      titleKey: "futureRoadmap.items.2.title",
      descriptionKey: "futureRoadmap.items.2.description",
      statusKey: "futureRoadmap.items.2.status"
    },
    {
      phaseKey: "futureRoadmap.items.3.phase",
      titleKey: "futureRoadmap.items.3.title",
      descriptionKey: "futureRoadmap.items.3.description",
      statusKey: "futureRoadmap.items.3.status"
    }
  ];

  const aiLimitationsData = [
    {
      titleKey: "limitations.0.title",
      itemsKeys: [
        "limitations.0.items.0",
        "limitations.0.items.1",
        "limitations.0.items.2",
        "limitations.0.items.3"
      ]
    },
    {
      titleKey: "limitations.1.title",
      itemsKeys: [
        "limitations.1.items.0",
        "limitations.1.items.1",
        "limitations.1.items.2",
        "limitations.1.items.3"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card backgroundColor="purple" className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <FontAwesomeIcon icon={faRobot} className="mr-3" />
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card backgroundColor="blue">
          <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
          <ul className="space-y-3">
            { (t('features', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <FontAwesomeIcon icon={faRobot} className="text-blue-600 mr-3 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card backgroundColor="green">
          <h2 className="text-2xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <div className="space-y-4">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FontAwesomeIcon icon={feature.icon} className="text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card backgroundColor="yellow" className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          {t('currentCapabilities.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCapabilitiesData.map((capability, index) => (
            <div key={index} className="flex items-start">
              <FontAwesomeIcon icon={capability.icon} className="text-yellow-600 mr-3 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">{t(capability.titleKey)}</h3>
                <p className="text-sm text-gray-700">{t(capability.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card backgroundColor="cyan" className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faMagic} className="mr-2" />
          {t('futureRoadmap.title')}
        </h2>
        <div className="space-y-6">
          {futureRoadmapData.map((item, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{t(item.titleKey)}</h3>
                  <p className="text-sm text-gray-700 mb-2">{t(item.descriptionKey)}</p>
                </div>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                  {t(item.phaseKey)}
                </span>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {t(item.statusKey)}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {aiLimitationsData.map((section, index) => (
          <Card key={index} backgroundColor={index === 0 ? "red" : "orange"}>
            <h3 className="text-xl font-bold mb-4">{t(section.titleKey)}</h3>
            <ul className="space-y-2">
              {section.itemsKeys.map((itemKey, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <FontAwesomeIcon icon={faLightbulb} className="mr-2 mt-1 text-sm" />
                  <span className="text-sm">{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card backgroundColor="pink" className="text-center">
        <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-lg mb-6">
          {t('cta.description')}
        </p>
        <button className="btn-primary">
          {t('cta.button')}
        </button>
      </Card>
    </div>
  );
};
