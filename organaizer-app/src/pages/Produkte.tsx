import React from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCloud, faServer, faCogs, faCalendar, faUsers, faShieldAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

export const Produkte: React.FC = () => {
  const { t } = useTranslation('products');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <Card backgroundColor="blue" className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-700 mb-4">{t('description')}</p>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </Card>

        {/* Product Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SaaS Product */}
            <Card backgroundColor="green" className="flex flex-col">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faCloud} className="text-4xl text-green-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{t('saas.title')}</h2>
                <p className="text-gray-700 mb-4">{t('saas.description')}</p>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold mb-3">{t('saas.features.0')}</h3>
                <ul className="space-y-2 mb-6">
                  { (t('saas.features', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">{t('saas.pricing.title')}</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>{t('saas.pricing.free')}</strong></p>
                    <p><strong>{t('saas.pricing.basic')}</strong></p>
                    <p><strong>{t('saas.pricing.enterprise')}</strong></p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">{t('saas.useCases.title')}</h4>
                  <ul className="space-y-1">
                    { (t('saas.useCases.items', { returnObjects: true }) as any[]).map((useCase: string, index: number) => (
                      <li key={index} className="text-sm text-gray-700">• {useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                {t('saas.cta')}
              </button>
            </Card>

            {/* Self-Hosted Product */}
            <Card backgroundColor="purple" className="flex flex-col">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faServer} className="text-4xl text-purple-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{t('selfHosted.title')}</h2>
                <p className="text-gray-700 mb-4">{t('selfHosted.description')}</p>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold mb-3">{t('selfHosted.features.0')}</h3>
                <ul className="space-y-2 mb-6">
                  { (t('selfHosted.features', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">{t('selfHosted.requirements.title')}</h4>
                  <ul className="space-y-1 text-sm">
                    { (t('selfHosted.requirements.items', { returnObjects: true }) as any[]).map((req: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">{t('selfHosted.useCases.title')}</h4>
                  <ul className="space-y-1">
                    { (t('selfHosted.useCases.items', { returnObjects: true }) as any[]).map((useCase: string, index: number) => (
                      <li key={index} className="text-sm text-gray-700">• {useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                {t('selfHosted.cta')}
              </button>
            </Card>

            {/* Custom Solutions */}
            <Card backgroundColor="orange" className="flex flex-col">
              <div className="text-center mb-6">
                <FontAwesomeIcon icon={faCogs} className="text-4xl text-orange-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{t('custom.title')}</h2>
                <p className="text-gray-700 mb-4">{t('custom.description')}</p>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold mb-3">{t('custom.features.0')}</h3>
                <ul className="space-y-2 mb-6">
                  { (t('custom.features', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-orange-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">{t('custom.process.title')}</h4>
                  <ol className="space-y-1 text-sm">
                    { (t('custom.process.steps', { returnObjects: true }) as any[]).map((step: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">{t('custom.useCases.title')}</h4>
                  <ul className="space-y-1">
                    { (t('custom.useCases.items', { returnObjects: true }) as any[]).map((useCase: string, index: number) => (
                      <li key={index} className="text-sm text-gray-700">• {useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
                {t('custom.cta')}
              </button>
            </Card>
          </div>
        </section>

        {/* Product Comparison */}
        <section className="mb-16">
          <Card backgroundColor="cyan" className="text-center mb-8">
            <h2 className="text-3xl font-bold">{t('comparison.title')}</h2>
            <p className="text-gray-700 mt-2">{t('comparison.subtitle')}</p>
          </Card>
          
          <Card backgroundColor="yellow" className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-bold">{t('comparison.features.title')}</th>
                  <th className="text-center p-4 font-bold">{t('comparison.saas')}</th>
                  <th className="text-center p-4 font-bold">{t('comparison.selfHosted')}</th>
                  <th className="text-center p-4 font-bold">{t('comparison.custom')}</th>
                </tr>
              </thead>
              <tbody>
                { (t('comparison.features.items', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{feature}</td>
                    <td className="text-center p-4">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                    </td>
                    <td className="text-center p-4">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                    </td>
                    <td className="text-center p-4">
                      <span className="text-sm">{t('comparison.onRequest')}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <Card backgroundColor="pink" className="text-center mb-8">
            <h2 className="text-3xl font-bold">{t('useCases.title')}</h2>
            <p className="text-gray-700 mt-2">{t('useCases.subtitle')}</p>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card backgroundColor="green" className="text-center">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('useCases.devTeams.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('useCases.devTeams.description')}
              </p>
              <ul className="text-sm text-left space-y-1">
                <li>{t('useCases.devTeams.items.0')}</li>
                <li>{t('useCases.devTeams.items.1')}</li>
                <li>{t('useCases.devTeams.items.2')}</li>
                <li>{t('useCases.devTeams.items.3')}</li>
              </ul>
            </Card>
            
            <Card backgroundColor="blue" className="text-center">
              <FontAwesomeIcon icon={faCalendar} className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('useCases.managementMeetings.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('useCases.managementMeetings.description')}
              </p>
              <ul className="text-sm text-left space-y-1">
                <li>{t('useCases.managementMeetings.items.0')}</li>
                <li>{t('useCases.managementMeetings.items.1')}</li>
                <li>{t('useCases.managementMeetings.items.2')}</li>
                <li>{t('useCases.managementMeetings.items.3')}</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Product Roadmap */}
        <section className="mb-16">
          <Card backgroundColor="red" className="text-center mb-8">
            <h2 className="text-3xl font-bold">{t('roadmap.title')}</h2>
            <p className="text-gray-700 mt-2">{t('roadmap.subtitle')}</p>
          </Card>
          
          <div className="space-y-6">
            { (t('roadmap.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <Card key={index} backgroundColor="cyan" className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </Card>
            ))}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="text-center">
          <Card backgroundColor="green" className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t('consultation.title')}</h2>
            <p className="text-gray-700 mb-6">{t('consultation.description')}</p>
            <button className="bg-green-600 text-white py-3 px-8 rounded hover:bg-green-700 transition-colors">
              {t('consultation.cta')}
            </button>
          </Card>
        </section>
      </div>
    </div>
  );
};
