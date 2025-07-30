import React from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faShieldAlt, 
  faCloud, 
  faServer, 
  faLock, 
  faChartLine, 
  faDatabase, 
  faCode, 
  faCogs, 
  faRocket, 
  faNetworkWired, 
  faMicrochip,
  faGlobe,
  faUsers,
  faSync,
  faTachometerAlt,
  faMobileAlt,
  faLaptop,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Technologie: React.FC = () => {
  const { t } = useTranslation('technology');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <Card backgroundColor="blue" className="text-center mb-12 hover-lift">
          <FontAwesomeIcon icon={faCogs} className="text-5xl text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-700 mb-4">{t('description')}</p>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </Card>

        {/* Benefits Section */}
        <section className="mb-16">
          <Card backgroundColor="green" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faRocket} className="text-4xl text-green-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('benefits.title')}</h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('benefits.items', { returnObjects: true }) as any[]).map((benefit: any, index: number) => (
              <Card key={index} backgroundColor="yellow" className="text-center hover-lift">
                <FontAwesomeIcon icon={faCheck} className="text-3xl text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Architecture Components */}
        <section className="mb-16">
          <Card backgroundColor="purple" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faNetworkWired} className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('architecture.title')}</h2>
            <p className="text-gray-700 mt-2">{t('architecture.description')}</p>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('architecture.components', { returnObjects: true }) as any[]).map((component: any, index: number) => (
              <Card key={index} backgroundColor="cyan" className="text-center">
                <h3 className="text-2xl font-bold mb-3">{component.name}</h3>
                <p className="text-gray-700 mb-4">{component.description}</p>
                <div className="space-y-2">
                  {(component.features as any[]).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <Card backgroundColor="orange" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faTachometerAlt} className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('performance.title')}</h2>
            {t('performance.description') && (
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                {t('performance.description')}
              </p>
            )}
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('performance.metrics', { returnObjects: true }) as any[]).map((metric: any, index: number) => (
              <Card key={index} backgroundColor="pink" className="text-center">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl text-pink-600 mb-4" />
                <div className="text-3xl font-bold text-pink-600 mb-2">{metric.value}</div>
                <p className="font-bold mb-1">{metric.label}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <Card backgroundColor="red" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-red-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('security.title')}</h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('security.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <Card key={index} backgroundColor="green" className="text-center hover-lift">
                <FontAwesomeIcon icon={faLock} className="text-3xl text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Deployment Options */}
        <section className="mb-16">
          <Card backgroundColor="blue" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faGlobe} className="text-4xl text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('deployment.title')}</h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('deployment.options', { returnObjects: true }) as any[]).map((option: any, index: number) => (
              <Card key={index} backgroundColor="yellow" className="text-center hover-lift">
                <FontAwesomeIcon 
                  icon={index === 0 ? faCloud : index === 1 ? faServer : faShieldAlt} 
                  className="text-3xl text-blue-600 mb-4" 
                />
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <div className="space-y-2">
                  {(option.features as any[]).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="mb-16">
          <Card backgroundColor="purple" className="text-center mb-8 hover-lift">
            <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold">{t('compliance.title')}</h2>
            {t('compliance.description') && (
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                {t('compliance.description')}
              </p>
            )}
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(t('compliance.standards', { returnObjects: true }) as any[]).map((standard: string, index: number) => (
              <Card key={index} backgroundColor="cyan" className="text-center hover-lift">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-cyan-600 mb-2" />
                <p className="text-sm font-bold">{standard}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack Summary */}
        <section className="mb-16">
          <Card backgroundColor="green" className="text-center hover-lift">
            <FontAwesomeIcon icon={faMicrochip} className="text-4xl text-green-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('stack.title')}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('stack.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{t('stack.uptime.value')}</div>
                <div className="text-sm">{t('stack.uptime.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{t('stack.users.value')}</div>
                <div className="text-sm">{t('stack.users.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{t('stack.entries.value')}</div>
                <div className="text-sm">{t('stack.entries.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{t('stack.api.value')}</div>
                <div className="text-sm">{t('stack.api.label')}</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};
