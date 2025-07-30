import React, { useState } from 'react';
import { Card } from '../components/Card';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope, faPhone, faBuilding, faHeart, faUsers, faLightbulb, faRocket, faCalendar, faAward, faGlobe, faShieldAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

export const UeberUns: React.FC = () => {
  const { t } = useTranslation('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(t('contact.messageSent'));
    setFormData({ name: '', email: '', message: '' });
  };

  const companyValues = [
    {
      icon: faHeart,
      title: t('values.customerFirst.title'),
      description: t('values.customerFirst.description')
    },
    {
      icon: faLightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description')
    },
    {
      icon: faShieldAlt,
      title: t('values.privacy.title'),
      description: t('values.privacy.description')
    },
    {
      icon: faUsers,
      title: t('values.openSource.title'),
      description: t('values.openSource.description')
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: t('milestones.inception.title'),
      description: t('milestones.inception.description')
    },
    {
      year: '2024',
      title: t('milestones.beta.title'),
      description: t('milestones.beta.description')
    },
    {
      year: '2025',
      title: t('milestones.release.title'),
      description: t('milestones.release.description')
    },
    {
      year: '2026',
      title: t('milestones.expansion.title'),
      description: t('milestones.expansion.description')
    }
  ];

  const futureRoadmap = [
    {
      phase: t('roadmap.0.phase'),
      focus: t('roadmap.0.focus'),
      goals: (t('roadmap.0.goals', { returnObjects: true }) as any[])
    },
    {
      phase: t('roadmap.1.phase'),
      focus: t('roadmap.1.focus'),
      goals: (t('roadmap.1.goals', { returnObjects: true }) as any[])
    },
    {
      phase: t('roadmap.2.phase'),
      focus: t('roadmap.2.focus'),
      goals: (t('roadmap.2.goals', { returnObjects: true }) as any[])
    }
  ];

  const contactMethods = [
    {
      icon: faEnvelope,
      method: t('contact.emailMethod'),
      value: 'info@organAIzer.app',
      description: t('contact.emailDesc')
    },
    {
      icon: faGlobe,
      method: t('contact.githubMethod'),
      value: 'github.com/organAIzer',
      description: t('contact.githubDesc')
    },
    {
      icon: faCalendar,
      method: t('contact.officeHoursMethod'),
      value: t('contact.officeHoursValue'),
      description: t('contact.officeHoursDesc')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card backgroundColor="red" className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <FontAwesomeIcon icon={faBuilding} className="mr-3" />
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </Card>

      {/* Company Story */}
      <Card backgroundColor="yellow" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          <FontAwesomeIcon icon={faRocket} className="mr-2" />
          {t('story.title')}
        </h2>
        <div className="space-y-4">
          <p>
            {t('story.content')}
          </p>
          <p>
            {t('story.growth')}
          </p>
        </div>
      </Card>

      {/* Company Values */}
      <Card backgroundColor="green" className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          {t('values.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyValues.map((value, index) => (
            <div key={index} className="flex items-start">
              <FontAwesomeIcon icon={value.icon} className="text-green-600 mr-3 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Team & Founder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card backgroundColor="blue">
          <h2 className="text-2xl font-bold mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {t('team.founderTitle')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-blue-600 mr-3" />
              <span><strong>{t('owner.name')}</strong> - {t('team.founderRole')}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mr-3" />
              <span>{t('owner.location')}</span>
            </div>
            <div className="text-sm text-gray-700">
              <p className="mb-2"><strong>{t('team.backgroundLabel')}:</strong> {t('team.background')}</p>
              <p><strong>{t('team.visionLabel')}:</strong> {t('team.vision')}</p>
            </div>
          </div>
        </Card>

        <Card backgroundColor="purple">
          <h2 className="text-2xl font-bold mb-4">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            {t('team.approachTitle')}
          </h2>
          <div className="space-y-3">
            {(t('team.approachItems', { returnObjects: true }) as any[]).map((item: string, index: number) => (
              <div key={index} className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 mr-2 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Milestones */}
      <Card backgroundColor="cyan" className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faAward} className="mr-2" />
          {t('milestones.title')}
        </h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-4">
              <h3 className="font-semibold text-lg">{milestone.year} - {milestone.title}</h3>
              <p className="text-sm text-gray-700">{milestone.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Future Roadmap */}
      <Card backgroundColor="orange" className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          {t('roadmap.title')}
        </h2>
        <div className="space-y-6">
          {futureRoadmap.map((item, index) => (
            <div key={index} className="border-l-4 border-orange-500 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{item.phase} - {item.focus}</h3>
                  <ul className="text-sm text-gray-700 space-y-1 mt-2">
                    {item.goals.map((goal, goalIndex) => (
                      <li key={goalIndex}>• {goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Community & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card backgroundColor="pink">
          <h2 className="text-2xl font-bold mb-4">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            {t('team.communityTitle')}
          </h2>
          <div className="space-y-3">
            {(t('team.communityItems', { returnObjects: true }) as any[]).map((item: string, index: number) => (
              <div key={index} className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-pink-600 mr-2 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card backgroundColor="green">
          <h2 className="text-2xl font-bold mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {t('contact.formTitle')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.nameLabel')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-black rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.emailLabel')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-black rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.messageLabel')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-black rounded-md"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {t('contact.sendButton')}
            </button>
          </form>
        </Card>
      </div>

      {/* Contact Methods */}
      <div className="mt-8">
        <Card backgroundColor="yellow">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {t('contact.getInTouchTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <FontAwesomeIcon icon={method.icon} className="text-2xl text-yellow-600 mb-2" />
                <h3 className="font-semibold">{method.method}</h3>
                <p className="text-sm font-medium">{method.value}</p>
                <p className="text-xs text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="mt-8">
        <Card backgroundColor="blue">
          <h2 className="text-2xl font-bold mb-4">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
            {t('contact.infoTitle')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-blue-600 mr-3" />
              <span><strong>{t('contact.ownerLabel')}:</strong> {t('owner.name')}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 mr-3" />
              <span><strong>{t('contact.locationLabel')}:</strong> {t('owner.location')}</span>
            </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 mr-3" />
            <span><strong>{t('contact.emailLabel')}:</strong> {t('owner.email')}</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="text-blue-600 mr-3" />
            <span><strong>{t('contact.githubLabel')}:</strong> 
              <a href="https://github.com/com2u/OrganAIzer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                github.com/com2u/OrganAIzer
              </a>
            </span>
          </div>
          </div>
        </Card>
      </div>

      {/* Project Information */}
      <div className="mt-8">
        <Card backgroundColor="yellow">
          <h2 className="text-2xl font-bold mb-4">
            {t('project.title')}
          </h2>
          <p className="mb-4">
            {t('project.description')}
          </p>
          <p className="mb-4">
            {t('project.openSource')}
          </p>
          <p className="text-sm text-gray-600">
            {t('project.license')}
          </p>
        </Card>
      </div>
    </div>
  );
};
