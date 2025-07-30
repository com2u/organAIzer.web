import type { TranslationStructure } from '../types/language';
import { faFileAlt, faSearch, faClock, faMagic } from '@fortawesome/free-solid-svg-icons';

export const translations: Record<'de' | 'en', TranslationStructure> = {
  de: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'KI-gestützte Meeting-Planung und Aufgabenverwaltung',
      description: 'OrganAIzer ist eine moderne, KI-unterstützte Applikation zur kollaborativen Planung, Durchführung und Dokumentation von Meetings und Aufgaben.',
      cta: 'Jetzt starten',
      learnMore: 'Mehr erfahren',
      features: {
        title: 'Hauptfunktionen',
        items: [
          'KI-gestützte Meeting-Planung',
          'Automatische Protokoll-Erstellung',
          'Intelligente Aufgabenverwaltung',
          'Team-Kollaboration in Echtzeit',
          'GDPR-konforme Datensicherheit'
        ]
      },
      ready: {
        title: 'Bereit zu starten?',
        description: 'Entdecken Sie, wie OrganAIzer Ihre Meetings und Aufgaben revolutionieren kann.',
        cta: 'Produkte ansehen'
      },
      hero: {
        title: 'Revolutionieren Sie Ihre Meetings',
        subtitle: 'Von chaotischen Besprechungen zu strukturierten Erfolgen',
        description: 'OrganAIzer verwandelt ineffiziente Meetings in produktive, strukturierte Sitzungen mit KI-gestützter Planung, Echtzeit-Kollaboration und automatischer Dokumentation.',
        primaryCta: 'Kostenlos testen',
        secondaryCta: 'Live-Demo ansehen'
      },
      problems: {
        title: 'Häufige Meeting-Probleme, die wir lösen',
        items: [
          {
            problem: 'Keine klare Agenda',
            solution: 'KI generiert automatisch strukturierte Agendas basierend auf Ihren Themen'
          },
          {
            problem: 'Fehlende Protokolle',
            solution: 'Automatische Protokoll-Erstellung mit allen Entscheidungen und Aufgaben'
          },
          {
            problem: 'Verlorene To-Dos',
            solution: 'Intelligente Aufgabenverwaltung mit Verfolgung und Erinnerungen'
          },
          {
            problem: 'Schlechte Vorbereitung',
            solution: 'KI-basierte Vorbereitung mit Zeitplanung und Material-Sammlung'
          }
        ]
      },
      workflow: {
        title: 'So funktioniert OrganAIzer',
        steps: [
          {
            title: '1. Planen',
            description: 'Erstellen Sie eine Assembly mit KI-Unterstützung und definieren Sie die Meeting-Agenda'
          },
          {
            title: '2. Durchführen',
            description: 'Führen Sie strukturierte Meetings durch mit Echtzeit-Notizen und Aufgaben-Erfassung'
          },
          {
            title: '3. Dokumentieren',
            description: 'Automatische Erstellung von Protokollen und Aufgabenlisten nach dem Meeting'
          },
          {
            title: '4. Nachverfolgen',
            description: 'Verfolgen Sie Fortschritte und verwalten Sie Aufgaben bis zur Fertigstellung'
          }
        ]
      },
      testimonials: {
        title: 'Was unsere Nutzer sagen',
        items: [
          {
            quote: 'OrganAIzer hat unsere Team-Effizienz um 300% gesteigert. Meetings sind jetzt produktiv!',
            author: 'Sarah M., Projektmanagerin',
            company: 'Tech Startup München'
          },
          {
            quote: 'Die KI-gestützte Protokoll-Erstellung spart uns 5 Stunden pro Woche.',
            author: 'Markus K., Teamleiter',
            company: 'Consulting Firma'
          },
          {
            quote: 'Endlich keine verlorenen To-Dos mehr. Alles ist übersichtlich und nachverfolgbar.',
            author: 'Lisa S., Produktmanagerin',
            company: 'Software-Unternehmen'
          }
        ]
      },
      stats: {
        title: 'Erfolgszahlen',
        items: [
          { value: '85%', label: 'Reduktion der Meeting-Zeit' },
          { value: '300%', label: 'Steigerung der Produktivität' },
          { value: '1000+', label: 'Zufriedene Teams' },
          { value: '50.000+', label: 'Erfolgreiche Meetings' }
        ]
      },
      integrations: {
        title: 'Integrationen',
        description: 'Verbinden Sie OrganAIzer mit Ihren bevorzugten Tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Sicherheit & Datenschutz',
        items: [
          'GDPR-konforme Datenspeicherung',
          'End-to-End-Verschlüsselung',
          'EU-basierte Server',
          'Regelmäßige Sicherheits-Audits',
          'Zwei-Faktor-Authentifizierung'
        ]
      },
      technology: {
        title: 'Technologie',
        description: 'Moderne Technologie-Stack für beste Performance und Sicherheit',
        subtitle: 'Enterprise-Grade Architektur für skalierbare Meeting-Lösungen',
        benefits: {
          title: 'Warum unsere Technologie?',
          items: [
            {
              title: '100% Datenkontrolle',
              description: 'Self-Hosted Option gibt Ihnen volle Kontrolle über Ihre Daten'
            },
            {
              title: 'Unbegrenzte Skalierbarkeit',
              description: 'Cloud-native Architektur wächst mit Ihren Anforderungen'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling Updates ohne Unterbrechung Ihrer Meetings'
            },
            {
              title: 'Multi-Tenant Sicherheit',
              description: 'Isolierte Datenbanken für maximale Datensicherheit'
            }
          ]
        },
        architecture: {
          title: 'Architektur-Übersicht',
          description: 'OrganAIzer nutzt eine moderne Microservices-Architektur für maximale Performance und Zuverlässigkeit',
          components: [
            {
              name: 'PostgreSQL',
              description: 'Hochperformante relationale Datenbank mit Multi-Tenant-Support',
              features: ['ACID-Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Echtzeit-API-Engine mit automatischer Schema-Generierung',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Blitzschnelle Frontend-Performance mit modernem Build-System',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container-Orchestrierung für skalierbare Bereitstellung',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Künstliche Intelligenz für intelligente Inhaltsverarbeitung',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance-Metriken',
          description: 'Wir werden kontinuierlich unsere Dienste verbessern. Wir können OrganAIzer.App an Ihre Performance-Anforderungen anpassen. Fragen Sie nach Enterprise-Support, um bereitzustellen:',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Durchschnittliche API-Antwortzeit' },
            { label: 'Uptime', value: '99.9%', description: 'Verfügbarkeit der SaaS-Plattform' },
            { label: 'Concurrent Users', value: '10.000+', description: 'Gleichzeitige Nutzer pro Instanz' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Pro Tag verarbeitete Einträge' }
          ]
        },
        security: {
          title: 'Sicherheits-Features',
          items: [
            {
              title: 'End-to-End-Verschlüsselung',
              description: 'Alle Daten werden in Ruhe und während der Übertragung verschlüsselt'
            },
            {
              title: 'Zero-Trust-Architektur',
              description: 'Jede Anfrage wird authentifiziert und autorisiert'
            },
            {
              title: 'GDPR-konform',
              description: 'Vollständige DSGVO-Konformität mit EU-basierten Servern'
            },
            {
              title: 'Audit-Logging',
              description: 'Vollständige Nachverfolgbarkeit aller Aktionen'
            }
          ]
        },
        deployment: {
          title: 'Bereitstellungs-Optionen',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Sofort einsatzbereit mit 99.9% Uptime-Garantie',
              features: ['Sofort verfügbar', 'Automatische Updates', 'Skalierbar', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Volle Kontrolle über Ihre Infrastruktur und Daten',
              features: ['Volle Datenkontrolle', 'Anpassbar', 'Open Source', 'GDPR-konform']
            },
            {
              title: 'Hybrid',
              description: 'Kombination aus Cloud und On-Premise nach Ihren Bedürfnissen',
              features: ['Flexible Architektur', 'Daten-Souveränität', 'Skalierbar', 'Maßgeschneidert']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Zertifizierungen',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ]
        }
      }
    },
    products: {
      title: 'Unsere Produkte',
      description: 'Wählen Sie die passende Lösung für Ihre Anforderungen',
      subtitle: 'Flexible Lösungen für jede Unternehmensgröße und Anforderung',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-basierte Lösung mit sofortiger Verfügbarkeit',
        features: [
          'Sofort einsatzbereit',
          'Automatische Updates',
          'Skalierbar',
          '99.9% Verfügbarkeit',
          'GDPR-konform'
        ],
        pricing: {
          title: 'Preismodell',
          free: 'Kostenlos bis 100 Einträge',
          basic: '19€ pro Nutzer/Monat',
          enterprise: '49€ pro Nutzer/Monat'
        },
        useCases: {
          title: 'Perfekt für',
          items: [
            'Kleine bis mittlere Teams',
            'Schnelle Einführung',
            'Ohne IT-Aufwand',
            'Budget-bewusste Unternehmen'
          ]
        },
        cta: 'Kostenlos testen'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Volle Kontrolle über Ihre Daten und Infrastruktur',
        features: [
          'Volle Datenkontrolle',
          'Anpassbar',
          'Open Source',
          'GDPR-konform',
          'Kostenlos'
        ],
        requirements: {
          title: 'Technische Anforderungen',
          items: [
            'Docker-fähige Umgebung',
            'PostgreSQL Datenbank',
            'Min. 2GB RAM',
            'SSL-Zertifikat'
          ]
        },
        useCases: {
          title: 'Perfekt für',
          items: [
            'Datenschutz-kritische Unternehmen',
            'Große Organisationen',
            'Individuelle Anpassungen',
            'Volle Kontrolle'
          ]
        },
        cta: 'Jetzt herunterladen'
      },
      custom: {
        title: 'OrganAIzer Kundenanpassungen',
        description: 'Maßgeschneiderte Lösungen nach Ihren Anforderungen',
        features: [
          'Individuelle Anpassung',
          'Persönliche Beratung',
          'Flexible Preismodelle',
          'Langfristige Unterstützung',
          'Skalierbare Lösungen'
        ],
        process: {
          title: 'Unser Prozess',
          steps: [
            'Anforderungsanalyse',
            'Konzeptentwicklung',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typische Anpassungen',
          items: [
            'Branchenspezifische Features',
            'Integration bestehender Systeme',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Beratung anfordern'
      },
      comparison: {
        title: 'Produktvergleich',
        features: {
          title: 'Features',
          items: [
            'KI-gestützte Meeting-Planung',
            'Automatische Protokoll-Erstellung',
            'Team-Kollaboration',
            'Mobile App (in Entwicklung)',
            'Integrationen',
            'API-Zugriff',
            'Custom Branding',
            'Dedicated Support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Verfügbar',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Welche Lösung passt zu Ihnen?',
        description: 'Kontaktieren Sie uns für eine persönliche Beratung und finden Sie die passende Lösung für Ihre Anforderungen.',
        cta: 'Kostenlose Beratung vereinbaren'
      },
      roadmap: {
        title: 'Produkt-Roadmap',
        subtitle: 'Sehen Sie, was als Nächstes kommt',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS und Android Apps für unterwegs',
            status: 'In Entwicklung'
          },
          {
            title: 'Erweiterte KI-Features (Q3 2025)',
            description: 'Noch intelligentere Meeting-Zusammenfassungen und Vorschläge',
            status: 'Geplant'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration mit Active Directory und SAML',
            status: 'Geplant'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basaisert auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Anforderungsanalyse',
            'Konzeptentwicklung',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Kostenlose Beratung vereinbaren'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'Sehen Sie, was als Nächstes kommt',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS und Android Apps für unterwegs',
            status: 'In Entwicklung'
          },
          {
            title: 'Erweiterte KI-Features (Q3 2025)',
            description: 'Noch intelligentere Meeting-Zusammenfassungen und Vorschläge',
            status: 'Geplant'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration mit Active Directory und SAML',
            status: 'Geplant'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable',
              'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Anforderungsanalyse',
            'Konzeptentwicklung',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typische Anpassungen',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Anforderungsanalyse',
            'Konzeptentwicklung',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Requirements analysis',
            'Concept development',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typical Customizations',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
        },
        basic: {
          title: 'Basic',
          price: '19€ / Nutzer',
          features: [
            '1 Mio. Einträge',
            '1000 KI/Monat',
            'E-Mail-Support'
          ],
          cta: 'Auswählen'
        },
        enterprise: {
          title: 'Enterprise',
          price: '49€ / Nutzer',
          features: [
            'Unbegrenzt',
            'Entra ID',
            'MCP Server',
            'Backups'
          ],
          cta: 'Kontakt aufnehmen'
        },
        selfHosted: {
          title: 'Self-Hosted',
          price: 'Kostenlos',
          features: [
            'Volle Anpassbarkeit',
            'GDPR konform'
          ],
          cta: 'Jetzt herunterladen'
        }
      }
    },
    about: {
      title: 'Über uns',
      description: 'Lernen Sie mehr über OrganAIzer und unser Team',
        contact: {
          title: 'Kontaktinformationen',
          owner: 'Geschäftsführer',
          location: 'Standort',
          contactForm: 'Kontaktformular',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',
          messageSent: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
          getInTouch: 'Kontakt aufnehmen',
          emailMethod: 'E-Mail',
          emailDesc: 'Senden Sie uns eine E-Mail für allgemeine Anfragen.',
          githubMethod: 'GitHub',
          githubDesc: 'Besuchen Sie unser GitHub-Repository.',
          officeHours: 'Sprechstunden',
          officeHoursDesc: 'Vereinbaren Sie einen Termin für eine persönliche Beratung.'
        },
      project: {
        title: 'Über das Projekt',
        description: 'OrganAIzer ist ein Open-Source-Projekt, das von Patrick Hess in München entwickelt wird. Das Ziel ist es, moderne KI-Technologie mit praktischer Meeting-Planung zu verbinden.',
        openSource: 'Das Projekt ist Open Source und freut sich über Mitwirkende. Kontakt und Bug-Reports können über die Webseite organisAIzer.app eingereicht werden.',
        license: 'Lizenz: OrganAIzer wird unter einer freien Lizenz veröffentlicht. Details siehe Repository.'
      },
      owner: {
        name: 'Patrick Hess',
        location: 'München',
        email: 'info@organAIzer.app'
      },
      values: {
        title: 'Unsere Werte',
        customerFirst: 'Kundenorientierung',
        innovation: 'Innovation',
        privacy: 'Datenschutz',
        openSource: 'Open Source'
      },
      milestones: {
        title: 'Meilensteine',
        inception: 'Gründung',
        inceptionDesc: 'Ideenfindung und Konzeptualisierung von OrganAIzer.',
        beta: 'Beta-Phase',
        betaDesc: 'Start der geschlossenen Beta mit ersten Nutzern.',
        release: 'Offizieller Launch',
        releaseDesc: 'Veröffentlichung der ersten stabilen Version.',
        expansion: 'Internationale Expansion',
        expansionDesc: 'Erweiterung in neue Märkte und Sprachen.'
      },
      roadmap: {
        title: 'Zukünftige Roadmap',
        teamGrowth: 'Team-Wachstum',
        teamGoals: ['Erweiterung des Entwicklerteams um 5 neue Mitglieder', 'Einstellung von 2 KI-Spezialisten'],
        expansion: 'Produkterweiterung',
        expansionGoals: ['Integration mit weiteren Business-Tools', 'Entwicklung einer mobilen App'],
        market: 'Marktpositionierung',
        marketGoals: ['Erhöhung der Marktanteile in Europa', 'Eintritt in den US-Markt']
      },
      team: {
        founder: 'Gründer',
        background: 'Patrick Hess ist ein erfahrener Softwareentwickler und KI-Enthusiast mit über 15 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.',
        vision: 'Seine Vision ist es, die Art und Weise, wie Teams zusammenarbeiten, durch intelligente Automatisierung und intuitive Tools zu revolutionieren.',
        approach: 'Unser Ansatz',
        community: 'Community & Kontakt'
      },
      story: {
        title: 'Unsere Geschichte',
        content: 'OrganAIzer wurde aus der Frustration über ineffiziente Meetings und mangelnde Nachverfolgbarkeit von Aufgaben geboren. Unser Gründer, Patrick Hess, erkannte das Potenzial von KI, diese Herausforderungen zu meistern und eine Lösung zu schaffen, die Teams wirklich produktiver macht.',
        growth: 'Seit unserer Gründung haben wir uns stetig weiterentwickelt, basierend auf dem Feedback unserer Nutzer und den neuesten technologischen Fortschritten. Wir sind stolz darauf, eine Plattform anzubieten, die nicht nur Meetings optimiert, sondern auch die Zusammenarbeit und Kommunikation innerhalb von Teams verbessert.'
      }
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      productsSaaS: 'OrganAIzer SaaS',
      productsSelfHosted: 'OrganAIzer Self Hosted',
      productsCustom: 'OrganAIzer Custom Solutions',
      technology: 'Technology',
      ai: 'AI',
      pricing: 'Pricing',
      about: 'About'
    }
  },
  en: {
    home: {
      title: 'OrganAIzer.App',
      subtitle: 'AI-powered meeting planning and task management',
      description: 'OrganAIzer is a modern, AI-powered application for collaborative planning, execution, and documentation of meetings and tasks.',
      cta: 'Get Started',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        items: [
          'AI-powered meeting planning',
          'Automatic protocol creation',
          'Intelligent task management',
          'Real-time team collaboration',
          'GDPR-compliant data security'
        ]
      },
      ready: {
        title: 'Ready to start?',
        description: 'Discover how OrganAIzer can revolutionize your meetings and tasks.',
        cta: 'View Products'
      },
      hero: {
        title: 'Revolutionize Your Meetings',
        subtitle: 'From chaotic meetings to structured success',
        description: 'OrganAIzer transforms inefficient meetings into productive, structured sessions with AI-powered planning, real-time collaboration, and automatic documentation.',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'View Live Demo'
      },
      problems: {
        title: 'Common Meeting Problems We Solve',
        items: [
          {
            problem: 'No clear agenda',
            solution: 'AI automatically generates structured agendas based on your topics'
          },
          {
            problem: 'Missing protocols',
            solution: 'Automatic protocol creation with all decisions and tasks'
          },
          {
            problem: 'Lost to-dos',
            solution: 'Intelligent task management with tracking and reminders'
          },
          {
            problem: 'Poor preparation',
            solution: 'AI-based preparation with time planning and material collection'
          }
        ]
      },
      workflow: {
        title: 'How OrganAIzer Works',
        steps: [
          {
            title: '1. Plan',
            description: 'Create an Assembly with AI assistance and define the meeting agenda'
          },
          {
            title: '2. Execute',
            description: 'Conduct structured meetings with real-time notes and task capture'
          },
          {
            title: '3. Document',
            description: 'Automatic creation of protocols and task lists after the meeting'
          },
          {
            title: '4. Track',
            description: 'Track progress and manage tasks until completion'
          }
        ]
      },
      testimonials: {
        title: 'What Our Users Say',
        items: [
          {
            quote: 'OrganAIzer increased our team efficiency by 300%. Meetings are now productive!',
            author: 'Sarah M., Project Manager',
            company: 'Tech Startup Munich'
          },
          {
            quote: 'AI-powered protocol creation saves us 5 hours per week.',
            author: 'Markus K., Team Lead',
            company: 'Consulting Firm'
          },
          {
            quote: 'Finally no more lost to-dos. Everything is clear and trackable.',
            author: 'Lisa S., Product Manager',
            company: 'Software Company'
          }
        ]
      },
      stats: {
        title: 'Success Numbers',
        items: [
          { value: '85%', label: 'Meeting time reduction' },
          { value: '300%', label: 'Productivity increase' },
          { value: '1000+', label: 'Happy teams' },
          { value: '50,000+', label: 'Successful meetings' }
        ]
      },
      integrations: {
        title: 'Integrations',
        description: 'Connect OrganAIzer with your favorite tools',
        items: ['Slack', 'Microsoft Teams', 'Google Calendar', 'Zoom', 'Notion', 'Jira']
      },
      security: {
        title: 'Security & Privacy',
        items: [
          'GDPR-compliant data storage',
          'End-to-end encryption',
          'EU-based servers',
          'Regular security audits',
          'Two-factor authentication'
        ]
      },
      technology: {
        title: 'Technology',
        description: 'Modern technology stack for best performance and security',
        subtitle: 'Enterprise-Grade Architecture for Scalable Meeting Solutions',
        benefits: {
          title: 'Why Our Technology?',
          items: [
            {
              title: '100% Data Control',
              description: 'Self-hosted option gives you full control over your data'
            },
            {
              title: 'Unlimited Scalability',
              description: 'Cloud-native architecture grows with your requirements'
            },
            {
              title: 'Zero-Downtime Updates',
              description: 'Rolling updates without interrupting your meetings'
            },
            {
              name: 'Multi-Tenant Security',
              description: 'Isolated databases for maximum data security'
            }
          ]
        },
        architecture: {
          title: 'Architecture Overview',
          description: 'OrganAIzer uses a modern microservices architecture for maximum performance and reliability',
          components: [
            {
              name: 'PostgreSQL',
              description: 'High-performance relational database with multi-tenant support',
              features: ['ACID Compliance', 'JSONB Support', 'Full-Text Search', 'Row-Level Security']
            },
            {
              name: 'Hasura GraphQL',
              description: 'Real-time API engine with automatic schema generation',
              features: ['Instant APIs', 'Real-time Subscriptions', 'Role-based Access', 'Caching']
            },
            {
              name: 'React + Vite',
              description: 'Lightning-fast frontend performance with modern build system',
              features: ['Hot Module Reload', 'Tree Shaking', 'Code Splitting', 'PWA Support']
            },
            {
              name: 'Docker & Kubernetes',
              description: 'Container orchestration for scalable deployment',
              features: ['Auto-Scaling', 'Load Balancing', 'Health Checks', 'Rolling Updates']
            },
            {
              name: 'AI/ML Pipeline',
              description: 'Artificial intelligence for intelligent content processing',
              features: ['NLP Processing', 'Content Analysis', 'Smart Suggestions', 'Auto-Summarization']
            }
          ]
        },
        performance: {
          title: 'Performance Metrics',
          metrics: [
            { label: 'API Response Time', value: '< 100ms', description: 'Average API response time' },
            { label: 'Uptime', value: '99.9%', description: 'SaaS platform availability' },
            { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous users per instance' },
            { label: 'Data Processing', value: '1M+ Entries', description: 'Entries processed per day' }
          ]
        },
        security: {
          title: 'Security Features',
          items: [
            {
              title: 'End-to-End Encryption',
              description: 'All data encrypted at rest and in transit'
            },
            {
              title: 'Zero-Trust Architecture',
              description: 'Every request is authenticated and authorized'
            },
            {
              title: 'GDPR Compliant',
              description: 'Full GDPR compliance with EU-based servers'
            },
            {
              name: 'Audit Logging',
              description: 'Complete traceability of all actions'
            }
          ]
        },
        deployment: {
          title: 'Deployment Options',
          options: [
            {
              title: 'Cloud (SaaS)',
              description: 'Ready to use with 99.9% uptime guarantee',
              features: ['Instant availability', 'Automatic updates', 'Scalable', '24/7 Support']
            },
            {
              title: 'Self-Hosted',
              description: 'Full control over your infrastructure and data',
              features: ['Full data control', 'Customizable', 'Open Source', 'GDPR compliant']
            },
            {
              title: 'Hybrid',
              description: 'Combination of cloud and on-premise as needed',
              features: ['Flexible architecture', 'Data sovereignty', 'Scalable', 'Tailored']
            }
          ]
        },
        compliance: {
          title: 'Compliance & Certifications',
          standards: [
            'ISO 27001 Information Security',
            'SOC 2 Type II',
            'GDPR / DSGVO',
            'HIPAA Ready',
            'FedRAMP Ready'
          ],
          description: 'We can adjust OrganAIzer.App to your Compliance wishes. We will continuously improve our services. Ask for Enterprise support to provide:'
        }
      }
    },
    products: {
      title: 'Our Products',
      description: 'Choose the right solution for your requirements',
      subtitle: 'Flexible solutions for every business size and requirement',
      saas: {
        title: 'OrganAIzer SaaS',
        description: 'Cloud-based solution with instant availability',
        features: [
          'Ready to use immediately',
          'Automatic updates',
          'Scalable',
          '99.9% availability',
          'GDPR compliant'
        ],
        pricing: {
          title: 'Pricing Model',
          free: 'Free up to 100 entries',
          basic: '$19 per user/month',
          enterprise: '$49 per user/month'
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Small to medium teams',
            'Quick deployment',
            'No IT overhead',
            'Budget-conscious companies'
          ]
        },
        cta: 'Start Free Trial'
      },
      selfHosted: {
        title: 'OrganAIzer Self Hosted',
        description: 'Full control over your data and infrastructure',
        features: [
          'Full data control',
          'Customizable',
          'Open Source',
          'GDPR compliant',
          'Free'
        ],
        requirements: {
          title: 'Technical Requirements',
          items: [
            'Docker-capable environment',
            'PostgreSQL database',
            'Min. 2GB RAM',
            'SSL certificate'
          ]
        },
        useCases: {
          title: 'Perfect for',
          items: [
            'Privacy-critical companies',
            'Large organizations',
            'Custom integrations',
            'Full control'
          ]
        },
        cta: 'Download Now'
      },
      custom: {
        title: 'OrganAIzer Custom Solutions',
        description: 'Tailored solutions according to your requirements',
        features: [
          'Individual customization',
          'Personal consultation',
          'Flexible pricing models',
          'Long-term support',
          'Scalable solutions'
        ],
        process: {
          title: 'Our Process',
          steps: [
            'Anforderungsanalyse',
            'Konzeptentwicklung',
            'Implementierung',
            'Testing & QA',
            'Deployment & Support'
          ]
        },
        useCases: {
          title: 'Typische Anpassungen',
          items: [
            'Industry-specific features',
            'Integration with existing systems',
            'Benutzerdefinierte Workflows',
            'Corporate Identity'
          ]
        },
        cta: 'Request Consultation'
      },
      comparison: {
        title: 'Product Comparison',
        features: {
          title: 'Features',
          items: [
            'AI-powered meeting planning',
            'Automatic protocol creation',
            'Team collaboration',
            'Mobile app (in development)',
            'Integrations',
            'API access',
            'Custom branding',
            'Dedicated support'
          ]
        },
        saas: 'SaaS',
        selfHosted: 'Self-Hosted',
        custom: 'Custom',
        available: 'Available',
        limited: 'Eingeschränkt',
        onRequest: 'Auf Anfrage'
      },
      consultation: {
        title: 'Which solution fits you?',
        description: 'Contact us for personal consultation and find the right solution for your requirements.',
        cta: 'Schedule Free Consultation'
      },
      roadmap: {
        title: 'Product Roadmap',
        subtitle: 'See what comes next',
        items: [
          {
            title: 'Mobile App (Q2 2025)',
            description: 'Native iOS and Android apps for on-the-go access',
            status: 'In Development'
          },
          {
            title: 'Enhanced AI Features (Q3 2025)',
            description: 'Even smarter meeting summaries and suggestions',
            status: 'Planned'
          },
          {
            title: 'Enterprise SSO (Q4 2025)',
            description: 'Integration with Active Directory and SAML',
            status: 'Planned'
          },
          {
            title: 'Advanced Analytics (Q1 2026)',
            description: 'Detaillierte Meeting-Effizienz-Analysen',
            status: 'Concept'
          }
        ]
      }
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'KI-gestützte Funktionen für intelligente Meeting-Planung und Aufgabenverwaltung',
      features: [
        'Automatische Zusammenfassung von Inhalten',
        'Intelligente Vorschläge für Einträge und Verknüpfungen',
        'Prompt-basierte Generierung und Anpassung',
        'Mehrere Eingabekanäle für Kunden-Tools'
      ],
      howItWorks: {
        title: 'So hilft die KI',
        items: [
          {
            title: 'Inhaltsanalyse',
            description: 'KI analysiert Meeting-Inhalte und liefert intelligente Erkenntnisse'
          },
          {
            title: 'Intelligente Vorschläge',
            description: 'Erhalten Sie KI-gestützte Vorschläge für Aufgaben und Meeting-Verbesserungen'
          },
          {
            title: 'Team-Kollaboration',
            description: 'KI hilft dabei, Team-Workflows und Kommunikation zu optimieren'
          },
          {
            title: 'Automatisierung',
            description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf das Wesentliche'
          }
        ]
      },
      cta: {
        title: 'Bereit für KI-gestützte Meetings?',
        description: 'Entdecken Sie, wie OrganAIzers KI-Funktionen Ihre Meeting-Erfahrung transformieren können.',
        button: 'Mit KI starten'
      },
      currentCapabilities: {
        title: 'Aktuelle KI-Funktionen',
        items: [
          {
            icon: faFileAlt,
            title: 'Meeting-Zusammenfassungsgenerierung',
            description: 'KI erstellt automatisch prägnante Zusammenfassungen aus Meeting-Notizen und Diskussionen, die wichtige Entscheidungen und Aktionspunkte hervorheben.'
          },
          {
            icon: faSearch,
            title: 'Intelligente Inhaltsentdeckung',
            description: 'Intelligente Suche über alle Einträge mit semantischem Verständnis – finden Sie relevante Informationen auch bei vagen Anfragen.'
          },
          {
            icon: faClock,
            title: 'Optimierung der Zeitallokation',
            description: 'KI schlägt eine optimale Zeitverteilung für Agendapunkte basierend auf historischen Daten und Themenkomplexität vor.'
          },
          {
            icon: faMagic,
            title: 'Kontextbezogene Vorschläge',
            description: 'Schlägt relevante Labels vor, weist Aufgaben den entsprechenden Teammitgliedern zu und schlägt Folgeaktionen basierend auf der Inhaltsanalyse vor.'
          }
        ]
      },
      futureRoadmap: {
        title: 'KI-Entwicklungs-Roadmap',
        items: [
          {
            phase: 'Q2 2025',
            title: 'Verbesserte Verarbeitung natürlicher Sprache',
            description: 'Verbessertes Verständnis des Meeting-Contextes mit besserer deutscher Sprachunterstützung und Erkennung branchenspezifischer Terminologie.',
            status: 'In Entwicklung'
          },
          {
            phase: 'Q3 2025',
            title: 'Prädiktive Meeting-Analysen',
            description: 'KI wird Meeting-Ergebnisse vorhersagen, potenzielle Engpässe identifizieren und optimale Teilnehmerlisten basierend auf Fachwissen vorschlagen.',
            status: 'Geplant'
          },
          {
            phase: 'Q4 2025',
            title: 'Sprach-zu-Text-Integration',
            description: 'Echtzeit-Transkription mit Sprecheridentifikation und automatischer Extraktion von Aktionspunkten aus Audioaufnahmen.',
            status: 'Konzeptphase'
          },
          {
            phase: 'Q1 2026',
            title: 'Intelligente Meeting-Vorlagen',
            description: 'KI-generierte Meeting-Vorlagen basierend auf Meeting-Typ, Teamzusammensetzung und historischen Erfolgsmustern.',
            status: 'Forschungsphase'
          }
        ]
      },
      aiLimitations: {
        currentLimitations: {
          title: 'Aktuelle Einschränkungen',
          items: [
            'KI erfordert menschliche Überprüfung für kritische Entscheidungen',
            'Komplexe technische Diskussionen erfordern möglicherweise manuelle Verfeinerung',
            'Kulturelle Nuancen in der Kommunikation werden noch gelernt',
            'Datenschutzsensible Inhalte erfordern explizite Benutzerzustimmung'
          ]
        },
        dataPrivacy: {
          title: 'Datenschutz zuerst',
          items: [
            'Alle KI-Verarbeitung erfolgt GDPR-konform',
            'Benutzerdaten werden niemals zum Training externer Modelle verwendet',
            'Opt-in-System für die Nutzung von KI-Funktionen',
            'Volle Transparenz bei KI-Entscheidungsprozessen'
          ]
        }
      }
    },
    pricing: {
      title: 'Preise',
      description: 'Transparente Preismodelle für jede Anforderung',
      plans: {
        free: {
          title: 'Free',
          price: 'Kostenlos',
          features: [
            '100 Einträge',
            '10 KI-Anfragen',
            'Basis-Support'
          ],
          cta: 'Jetzt starten'
