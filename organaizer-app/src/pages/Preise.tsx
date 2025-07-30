import React, { useState } from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDownload, faCalculator, faQuestionCircle, faShieldAlt, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

export const Preise: React.FC = () => {
  const { t } = useTranslation('pricing');
  const [teamSize, setTeamSize] = useState(5);

  const plans = [
    {
      ...t('plans.free', { returnObjects: true }) as any,
      backgroundColor: 'green' as const,
      popular: false,
      bestFor: t('plans.free.bestFor'),
      limitations: (t('plans.free.limitations', { returnObjects: true }) as any[])
    },
    {
      ...t('plans.basic', { returnObjects: true }) as any,
      backgroundColor: 'blue' as const,
      popular: true,
      bestFor: t('plans.basic.bestFor'),
      limitations: (t('plans.basic.limitations', { returnObjects: true }) as any[])
    },
    {
      ...t('plans.enterprise', { returnObjects: true }) as any,
      backgroundColor: 'purple' as const,
      popular: false,
      bestFor: t('plans.enterprise.bestFor'),
      limitations: (t('plans.enterprise.limitations', { returnObjects: true }) as any[])
    }
  ];

  const calculatePrice = (users: number) => {
    const basicPrice = 19 * users;
    const enterprisePrice = 49 * users;
    return { basic: basicPrice, enterprise: enterprisePrice };
  };

  const pricing = calculatePrice(teamSize);

  const faqItems = [
    {
      question: t('faq.0.question'),
      answer: t('faq.0.answer')
    },
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    }
  ];

  const costComparison = [
    {
      method: t('costComparison.0.method'),
      monthlyCost: 25,
      timeSaved: 0,
      efficiency: t('costComparison.0.efficiency')
    },
    {
      method: t('costComparison.1.method'),
      monthlyCost: 19,
      timeSaved: 5,
      efficiency: t('costComparison.1.efficiency')
    },
    {
      method: t('costComparison.2.method'),
      monthlyCost: 49,
      timeSaved: 8,
      efficiency: t('costComparison.2.efficiency')
    }
  ];

  const futurePricing = [
    {
      year: t('futurePricing.0.year'),
      changes: (t('futurePricing.0.changes', { returnObjects: true }) as any[])
    },
    {
      year: t('futurePricing.1.year'),
      changes: (t('futurePricing.1.changes', { returnObjects: true }) as any[])
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card backgroundColor="yellow" className="text-center mb-8 hover-lift">
        <FontAwesomeIcon icon={faCalculator} className="text-5xl text-yellow-600 mb-4" />
        <h1 className="text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </Card>

      {/* Pricing Calculator */}
      <Card backgroundColor="cyan" className="mb-8 hover-lift">
        <FontAwesomeIcon icon={faCalculator} className="text-4xl text-cyan-600 mb-4 text-center block" />
        <h2 className="text-2xl font-bold mb-4 text-center">
          {t('calculator.title')}
        </h2>
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium mb-2">{t('calculator.teamSize')}:</label>
          <input
            type="range"
            min="1"
            max="100"
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value))}
            className="w-full mb-4"
          />
          <div className="text-center mb-4">
            <span className="text-2xl font-bold">{teamSize}</span> {t('calculator.users')}
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold">{t('calculator.basicPlan')}</div>
              <div className="text-2xl font-bold text-blue-600">${pricing.basic}/month</div>
            </div>
            <div>
              <div className="text-lg font-semibold">{t('calculator.enterprisePlan')}</div>
              <div className="text-2xl font-bold text-purple-600">${pricing.enterprise}/month</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <Card key={index} backgroundColor={plan.backgroundColor} className="relative">
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t('plans.mostPopular')}
                </span>
              </div>
            )}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <div className="text-sm text-gray-600 mb-4">{plan.bestFor}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 mb-4 text-sm text-gray-600">
                {plan.limitations.map((limitation: string, limitationIndex: number) => (
                  <li key={limitationIndex} className="flex items-center">
                    <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-400 mr-2" />
                    {limitation}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">
                {plan.cta}
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Self-Hosted Option */}
      <div className="text-center mb-12">
        <Card backgroundColor="cyan" className="max-w-2xl mx-auto hover-lift">
          <FontAwesomeIcon icon={faDownload} className="text-4xl text-cyan-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            {t('plans.selfHosted.title')}
          </h2>
          <div className="text-3xl font-bold mb-2">{t('plans.selfHosted.price')}</div>
          <div className="text-sm text-gray-600 mb-4">{t('plans.selfHosted.description')}</div>
          <ul className="space-y-2 mb-6">
            {(t('plans.selfHosted.features', { returnObjects: true }) as any[]).map((feature: string, index: number) => (
              <li key={index} className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <a 
            href="https://github.com/com2u/OrganAIzer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            {t('plans.selfHosted.sourceCode')}
          </a>
        </Card>
      </div>

      {/* Cost Comparison */}
      <Card backgroundColor="orange" className="mb-8 hover-lift">
        <FontAwesomeIcon icon={faClock} className="text-4xl text-orange-600 mb-4 text-center block" />
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t('costComparison.title')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">{t('costComparison.tableHeaders.method')}</th>
                <th className="text-center py-2">{t('costComparison.tableHeaders.monthlyCost')}</th>
                <th className="text-center py-2">{t('costComparison.tableHeaders.hoursSaved')}</th>
                <th className="text-center py-2">{t('costComparison.tableHeaders.roi')}</th>
              </tr>
            </thead>
            <tbody>
              {costComparison.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.method}</td>
                  <td className="text-center py-2">${item.monthlyCost}</td>
                  <td className="text-center py-2">{item.timeSaved}h</td>
                  <td className="text-center py-2 font-semibold">
                    {item.timeSaved * 50 * 4 - item.monthlyCost > 0 ? 
                      `+$${item.timeSaved * 50 * 4 - item.monthlyCost}` : 
                      `-$${Math.abs(item.timeSaved * 50 * 4 - item.monthlyCost)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card backgroundColor="green" className="mb-8 hover-lift">
        <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-green-600 mb-4 text-center block" />
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t('faq.title')}
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-green-200 pb-4">
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p className="text-sm text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Future Pricing Outlook */}
      <Card backgroundColor="purple" className="mb-8 hover-lift">
        <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-purple-600 mb-4 text-center block" />
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t('futurePricing.title')}
        </h2>
        <div className="space-y-4">
          {futurePricing.map((item, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{item.year}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>• {change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Enterprise Contact */}
      <Card backgroundColor="blue" className="text-center hover-lift">
        <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">
          {t('enterpriseContact.title')}
        </h2>
        <p className="text-lg mb-6">
          {t('enterpriseContact.description')}
        </p>
        <button className="btn-primary">
          {t('enterpriseContact.button')}
        </button>
      </Card>
    </div>
  );
};
