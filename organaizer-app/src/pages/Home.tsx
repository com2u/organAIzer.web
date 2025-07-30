import React, { useEffect } from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUsers, faClock, faShieldAlt, faCogs, faStar, faQuoteLeft, faArrowRight, faChartLine, faPlug, faLock, faCalendarAlt, faVideo, faEdit, faTasks, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faSlack, faMicrosoft, faGoogle, faJira } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/organaizer.png" 
              alt="OrganAIzer Logo" 
              className="w-16 h-16 rounded-lg mr-4"
            />
            <h1 className="text-5xl font-bold">
              {t('hero.title')}
            </h1>
          </div>
          <p className="text-2xl text-gray-700 mb-4">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              {t('hero.primaryCta')}
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              {t('hero.secondaryCta')}
            </button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Card backgroundColor="red" className="text-center mb-12 hover-lift">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faCogs} className="mr-3 text-red-600" />
              {t('problems.title')}
            </h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            { (t('problems.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <Card key={index} backgroundColor="yellow" className="text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{item.problem}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={faArrowRight} className="text-green-600 mr-2" />
                  </div>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card backgroundColor="blue" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faClock} className="mr-3" />
              {t('workflow.title')}
            </h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            { (t('workflow.steps', { returnObjects: true }) as any[]).map((step: any, index: number) => (
              <Card key={index} backgroundColor="cyan" className="text-center">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.title}</div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Numbers Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Card backgroundColor="green" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              {t('stats.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('stats.subtitle')}
            </p>
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            { (t('stats.items', { returnObjects: true }) as any[]).map((stat: any, index: number) => (
              <Card key={index} backgroundColor="yellow" className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <p className="text-gray-700">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card backgroundColor="purple" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faStar} className="mr-3" />
              {t('features.title')}
            </h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { (t('features.items', { returnObjects: true }) as any[]).map((feature: any, index: number) => (
              <Card key={index} backgroundColor="pink" className="text-center">
                <FontAwesomeIcon icon={faCheck} className="text-3xl text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card backgroundColor="orange" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
              {t('testimonials.title')}
            </h2>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { (t('testimonials.items', { returnObjects: true }) as any[]).map((testimonial: any, index: number) => (
              <Card key={index} backgroundColor="blue" className="text-center">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card backgroundColor="green" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faPlug} className="mr-3" />
              {t('integrations.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('integrations.description')}
            </p>
            <p className="text-sm text-gray-600 mb-8">
              {t('integrations.offer')}
            </p>
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            { (t('integrations.items', { returnObjects: true }) as any[]).map((integration: any, index: number) => {
              const icons: Record<string, any> = {
                'Slack': faSlack,
                'Microsoft Teams': faMicrosoft,
                'Google Calendar': faGoogle,
                'Zoom': faVideo,
                'Notion': faStickyNote,
                'Jira': faJira
              };
              const colors: Record<string, string> = {
                'Slack': 'text-purple-600',
                'Microsoft Teams': 'text-blue-600',
                'Google Calendar': 'text-red-600',
                'Zoom': 'text-blue-500',
                'Notion': 'text-gray-700',
                'Jira': 'text-blue-700'
              };
              return (
                <Card key={index} backgroundColor="yellow" className="text-center">
                  <div className={`text-4xl mb-3 ${colors[integration] || 'text-gray-600'}`}>
                    <FontAwesomeIcon icon={icons[integration]} />
                  </div>
                  <div className="text-sm font-bold">{integration}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Card backgroundColor="red" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon icon={faLock} className="mr-3" />
              {t('security.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('security.description')}
            </p>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            { (t('security.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <Card key={index} backgroundColor="green" className="text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-green-600 mb-2" />
                <p className="text-sm">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('ready.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('ready.description')}
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            {t('ready.cta')}
          </button>
        </div>
      </section>
    </div>
  );
};
