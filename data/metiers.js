// Configuration centralisée des pages métier Esmy
// Pour ajouter un métier : copier un bloc, modifier le slug et le contenu.
// Pour modifier un métier : éditer uniquement les champs nécessaires.

export const METIERS = {
  boulangerie: {
    slug: 'boulangerie',
    emoji: '🥖',
    nomMetier: 'boulangerie',
    nomMetierPluriel: 'boulangeries',
    clientsType: 'clients du matin',
    hero: {
      eyebrow: 'Pour les boulangeries',
      title: 'Plus d\'avis Google pour votre',
      titleEm: 'boulangerie.',
      sub: 'Vos clients repartent avec leur baguette sans penser à laisser un avis. Esmy change ça — avec une mécanique ludique qui transforme chaque visite en un moment mémorable.'
    },
    painPoints: [
      {
        title: 'Clients du matin pressés',
        desc: 'Le rush du matin ne laisse pas le temps de demander un avis. Esmy le fait pour vous, discrètement.'
      },
      {
        title: 'Concurrence locale féroce',
        desc: 'Votre fiche Google est scrutée avant chaque achat. Une note supérieure à celle du boulanger voisin change tout.'
      },
      {
        title: 'Peu de temps pour répondre',
        desc: 'Vous préparez votre pâte à 4h du matin. L\'IA prépare les réponses aux avis — vous validez en un clic.'
      }
    ],
    lotsExemples: [
      { ico: '🥐', name: 'Croissant offert', desc: 'Lors de votre prochaine visite' },
      { ico: '☕', name: 'Café offert', desc: 'Avec votre viennoiserie' },
      { ico: '🥖', name: 'Pain spécial', desc: 'Offert à partir de 10€ d\'achat' }
    ],
    faq: [
      {
        q: 'Comment augmenter les avis Google de ma boulangerie ?',
        a: 'En offrant à chaque client une raison ludique de se souvenir de sa visite — comme une roue de fortune accessible via un QR code en caisse. Esmy permet de récompenser vos clients sans condition, puis leur propose (optionnellement) de partager leur expérience sur Google. La récompense est donnée pour la visite, pas pour l\'avis.'
      },
      {
        q: 'Puis-je offrir un pain ou un café en échange d\'un avis Google ?',
        a: 'Non — Google interdit formellement d\'offrir une récompense conditionnée à l\'écriture d\'un avis. C\'est exactement pour ça qu\'Esmy fonctionne différemment : la récompense est offerte pour remercier le client de sa visite, quelle que soit son intention de laisser un avis ou non. C\'est la seule approche conforme aux règles Google.'
      },
      {
        q: 'Combien coûte Esmy pour une boulangerie ?',
        a: 'Le plan Starter est à 33€/mois pour un établissement — adapté à la majorité des boulangeries. Sans engagement, 14 jours gratuits au démarrage.'
      },
      {
        q: 'L\'IA peut-elle répondre automatiquement aux avis ?',
        a: 'Non, jamais. L\'IA d\'Esmy prépare une suggestion de réponse dans votre ton de communication, mais rien n\'est publié sans votre validation explicite en un clic. Cette approche respecte les politiques de Google et vous garantit un contrôle total sur votre image.'
      },
      {
        q: 'Comment installer Esmy dans ma boulangerie ?',
        a: 'L\'installation prend environ 10 minutes. Vous recevez un QR code à imprimer et placer en caisse ou sur vos sacs. Le client scanne, joue à la roue, et reçoit son lot. Vos avis Google arrivent dans votre tableau de bord — c\'est tout.'
      }
    ],
    meta: {
      title: 'Esmy pour boulangeries — Plus d\'avis Google pour votre boulangerie',
      description: 'Esmy aide les boulangeries à développer leur présence Google grâce à la gamification et aux suggestions IA de réponses aux avis. 33€/mois, sans engagement.'
    }
  },

  restaurant: {
    slug: 'restaurant',
    emoji: '🍽️',
    nomMetier: 'restaurant',
    nomMetierPluriel: 'restaurants',
    clientsType: 'clients au moment de l\'addition',
    hero: {
      eyebrow: 'Pour les restaurants',
      title: 'Plus d\'avis Google pour votre',
      titleEm: 'restaurant.',
      sub: 'À la fin du repas, vos clients sont ravis — mais 95% d\'entre eux ne laisseront jamais d\'avis. Esmy leur donne une raison ludique de le faire, sans pression ni incitation.'
    },
    painPoints: [
      {
        title: 'Les clients satisfaits ne laissent pas d\'avis',
        desc: 'Statistiquement, seuls les clients mécontents prennent le temps d\'écrire. Esmy rééquilibre naturellement la balance.'
      },
      {
        title: 'Avis négatifs sans réponse',
        desc: 'Un avis négatif sans réponse est un signal très négatif. L\'IA prépare des réponses empathiques — vous validez.'
      },
      {
        title: 'Concurrence massive sur Google Maps',
        desc: 'En 2026, votre note et vos avis comptent autant que votre carte. Esmy vous aide à piloter votre réputation en ligne.'
      }
    ],
    lotsExemples: [
      { ico: '🍷', name: 'Verre de vin offert', desc: 'Lors de votre prochain repas' },
      { ico: '🍰', name: 'Dessert offert', desc: 'Pour deux personnes' },
      { ico: '🍕', name: '-10% sur l\'addition', desc: 'Valable 30 jours' }
    ],
    faq: [
      {
        q: 'Comment collecter plus d\'avis Google pour mon restaurant ?',
        a: 'Un QR code placé sur l\'addition ou le set de table donne accès à une roue de fortune — vos clients repartent avec un lot, et beaucoup choisissent ensuite de partager leur expérience sur Google. L\'ensemble est conforme aux règles Google : la récompense est offerte pour la visite, pas conditionnée à l\'avis.'
      },
      {
        q: 'Est-ce que proposer un dessert gratuit pour un avis est autorisé ?',
        a: 'Non, Google interdit toute récompense conditionnée à un avis. Esmy respecte cette règle : le dessert ou tout autre lot est offert pour remercier le client, indépendamment de son avis. C\'est une différence fondamentale qui protège votre fiche Google des sanctions.'
      },
      {
        q: 'Comment répondre efficacement à un avis négatif ?',
        a: 'Esmy prépare automatiquement une réponse empathique et constructive adaptée au contenu de l\'avis, dans votre ton de communication. Vous relisez, modifiez si besoin, et publiez en un clic. Répondre aux avis négatifs avec élégance améliore significativement la perception de votre restaurant.'
      },
      {
        q: 'Le plan Pro est-il adapté à mon restaurant ?',
        a: 'Le plan Starter (33€/mois) convient si vous avez un seul établissement. Le plan Pro (69€/mois) est adapté si vous gérez plusieurs restaurants ou si vous voulez la roue de fortune personnalisée avec vos couleurs et vos lots sur-mesure.'
      },
      {
        q: 'Combien de temps pour voir des résultats ?',
        a: 'En pratique, nos utilisateurs constatent les premiers avis supplémentaires dès la première semaine. L\'impact sur la note moyenne se voit sur 2-3 mois, le temps que suffisamment de nouveaux avis viennent pondérer l\'historique.'
      }
    ],
    meta: {
      title: 'Esmy pour restaurants — Plus d\'avis Google pour votre restaurant',
      description: 'Esmy aide les restaurants à développer leurs avis Google et à répondre efficacement grâce à l\'IA. Gamification éthique, conforme aux règles Google.'
    }
  },

  coiffeur: {
    slug: 'coiffeur',
    emoji: '💇',
    nomMetier: 'salon de coiffure',
    nomMetierPluriel: 'salons de coiffure',
    clientsType: 'clients en fin de prestation',
    hero: {
      eyebrow: 'Pour les salons de coiffure',
      title: 'Plus d\'avis Google pour votre',
      titleEm: 'salon.',
      sub: 'Vos clients partent avec une nouvelle coupe, heureux — mais rarement avec l\'envie spontanée de laisser un avis. Esmy leur donne un petit coup de pouce ludique, en toute transparence.'
    },
    painPoints: [
      {
        title: 'Une énorme concurrence locale',
        desc: 'Un client cherche "coiffeur près de moi" — votre note Google est le premier critère de choix. Chaque étoile compte.'
      },
      {
        title: 'Clients fidèles invisibles en ligne',
        desc: 'Vos habitués reviennent depuis des années mais n\'ont jamais laissé d\'avis. Esmy les invite naturellement à le faire.'
      },
      {
        title: 'Pas le temps de gérer les réponses',
        desc: 'Entre deux coupes, l\'IA prépare les réponses à vos avis. Vous validez entre deux clients, c\'est tout.'
      }
    ],
    lotsExemples: [
      { ico: '💆', name: 'Soin du cuir chevelu', desc: 'Offert lors de votre prochaine visite' },
      { ico: '🎁', name: '-15% sur votre prochaine coupe', desc: 'Valable 2 mois' },
      { ico: '✂️', name: 'Frange offerte', desc: 'Entretien gratuit entre 2 visites' }
    ],
    faq: [
      {
        q: 'Comment avoir plus d\'avis Google pour mon salon de coiffure ?',
        a: 'Avec Esmy, vos clients scannent un QR code à l\'encaissement. Ils jouent à une roue de fortune et repartent avec un petit lot — un soin, une réduction, ou un extra. Beaucoup choisissent ensuite de partager leur expérience sur Google. Le lot est toujours offert, quel que soit leur choix de laisser ou non un avis.'
      },
      {
        q: 'Google m\'a-t-il déjà pénalisé pour avoir offert des récompenses ?',
        a: 'Si vous avez offert des récompenses conditionnées à des avis positifs, c\'est possible. Google interdit cette pratique (le "review gating"). Esmy est construit pour éviter exactement ce risque : la récompense est offerte pour la visite, sans condition sur la note ou l\'avis. C\'est la seule approche qui respecte les règles de Google.'
      },
      {
        q: 'Combien de temps pour configurer Esmy dans mon salon ?',
        a: 'Environ 10 minutes. Vous créez votre compte, vous personnalisez vos lots, vous imprimez votre QR code et vous le placez en caisse ou sur votre miroir. C\'est opérationnel dès le premier client.'
      },
      {
        q: 'L\'IA peut-elle s\'adapter au ton de mon salon ?',
        a: 'Oui — vous définissez votre ton (chaleureux, professionnel, décontracté, enthousiaste) et vous pouvez ajouter des précisions sur votre salon (spécialités, événements, valeurs). L\'IA prépare alors des réponses qui sonnent comme vous, pas comme un robot.'
      },
      {
        q: 'Quel est le ROI pour un salon de coiffure ?',
        a: 'Une seule étoile gagnée sur Google peut générer entre 5% et 9% de revenus supplémentaires selon une étude Harvard Business Review. Pour un salon facturant 150 000€/an, c\'est 7 500€ à 13 500€ de chiffre d\'affaires additionnel — pour un abonnement Esmy de 400€/an.'
      }
    ],
    meta: {
      title: 'Esmy pour coiffeurs — Plus d\'avis Google pour votre salon',
      description: 'Esmy aide les salons de coiffure à gagner des avis Google et à répondre avec l\'IA. Gamification éthique, conformité Google, à partir de 33€/mois.'
    }
  },

  'institut-beaute': {
    slug: 'institut-beaute',
    emoji: '💆',
    nomMetier: 'institut de beauté',
    nomMetierPluriel: 'instituts de beauté',
    clientsType: 'clientes après leur soin',
    hero: {
      eyebrow: 'Pour les instituts de beauté',
      title: 'Plus d\'avis Google pour votre',
      titleEm: 'institut.',
      sub: 'Vos clientes ressortent détendues et rayonnantes. Esmy transforme ce moment de bien-être en une petite attention mémorable — avec une mécanique respectueuse de votre clientèle premium.'
    },
    painPoints: [
      {
        title: 'Une clientèle exigeante et discrète',
        desc: 'Vos clientes recherchent confidentialité et qualité. Esmy s\'intègre avec élégance, sans être intrusif ni bruyant.'
      },
      {
        title: 'Bouche-à-oreille essentiel',
        desc: 'Les instituts vivent de la recommandation. Une fiche Google forte capte les nouvelles clientes qui cherchent un spa ou un institut confidentiel.'
      },
      {
        title: 'Peu de temps pour piloter le digital',
        desc: 'Entre les soins et la gestion du planning, vous n\'avez pas 2h par semaine pour répondre aux avis. L\'IA s\'en occupe — vous validez.'
      }
    ],
    lotsExemples: [
      { ico: '🌸', name: 'Massage de 15 min', desc: 'Offert lors de votre prochaine visite' },
      { ico: '💄', name: 'Soin des mains', desc: 'Offert avec votre prochain soin du visage' },
      { ico: '🌿', name: '-20% sur un soin', desc: 'Valable 2 mois' }
    ],
    faq: [
      {
        q: 'Est-ce qu\'Esmy s\'adapte à un institut confidentiel ?',
        a: 'Oui — la roue de fortune est entièrement personnalisable (couleurs, lots, ton). Vous pouvez choisir un design discret, aligné avec votre identité. Aucune démarche intrusive auprès de vos clientes : elles scannent un QR code uniquement si elles le souhaitent, en fin de soin.'
      },
      {
        q: 'Mes clientes viennent pour un moment de détente — est-ce que la roue ne casse pas cette ambiance ?',
        a: 'Au contraire : la roue est présentée comme une petite attention, un remerciement pour leur visite. Le lot est offert sans condition, ce qui maintient l\'esprit de générosité de votre institut. C\'est souvent très apprécié, surtout si le lot les invite à revenir (massage court, soin des mains offert...).'
      },
      {
        q: 'Puis-je offrir un soin en échange d\'un avis Google ?',
        a: 'Non — Google interdit toute récompense conditionnée à un avis. C\'est la grande différence d\'Esmy : la récompense est offerte pour remercier la cliente de sa visite, qu\'elle choisisse ou non de partager son expérience. C\'est la seule approche conforme aux règles Google Business Profile.'
      },
      {
        q: 'Combien ça coûte et quelle est la rentabilité ?',
        a: '33€/mois pour un institut, sans engagement. Si vous facturez 60 000€/an, gagner 0,5★ sur Google peut vous rapporter 2 500€ à 4 500€ de chiffre d\'affaires supplémentaire selon HBR. Le retour sur investissement est généralement positif dès le 2ème mois.'
      },
      {
        q: 'L\'IA respecte-t-elle la confidentialité de mes clientes ?',
        a: 'Absolument. Esmy est 100% conforme RGPD. Vos données clients et celles de vos clientes ne sont jamais revendues ni partagées. Vous gardez la propriété de toutes vos données et pouvez les supprimer à tout moment.'
      }
    ],
    meta: {
      title: 'Esmy pour instituts de beauté — Plus d\'avis Google',
      description: 'Esmy aide les instituts de beauté à développer leur présence Google de manière élégante et conforme. Gamification discrète, IA de réponses, 33€/mois.'
    }
  },

  pizzeria: {
    slug: 'pizzeria',
    emoji: '🍕',
    nomMetier: 'pizzeria',
    nomMetierPluriel: 'pizzerias',
    clientsType: 'clients après leur repas',
    hero: {
      eyebrow: 'Pour les pizzerias',
      title: 'Plus d\'avis Google pour votre',
      titleEm: 'pizzeria.',
      sub: 'Vos pizzas cartonnent — mais votre fiche Google ne le reflète pas. Esmy transforme vos clients satisfaits en ambassadeurs, avec une roue de fortune qui les remercie de leur visite.'
    },
    painPoints: [
      {
        title: 'Forte concurrence dans le quartier',
        desc: 'Entre les chaînes, les pizzerias artisanales et la livraison, votre note Google fait la différence sur les recherches "pizza près de moi".'
      },
      {
        title: 'Livraison = peu d\'interaction',
        desc: 'En livraison, vous ne voyez jamais vos clients. Un QR code sur le carton permet de rester en contact après la pizza.'
      },
      {
        title: 'Clients pressés en salle',
        desc: 'À la fin du repas, vos clients veulent payer et partir. La roue prend 30 secondes et laisse un souvenir sympathique.'
      }
    ],
    lotsExemples: [
      { ico: '🍕', name: 'Pizza offerte', desc: 'Pour 2 pizzas achetées' },
      { ico: '🥤', name: 'Boisson offerte', desc: 'Lors de votre prochaine visite' },
      { ico: '🍰', name: 'Tiramisu offert', desc: 'Avec votre prochain repas' }
    ],
    faq: [
      {
        q: 'Comment ma pizzeria peut-elle se démarquer sur Google ?',
        a: 'Les pizzerias avec plus de 50 avis récents et une note supérieure à 4.5 captent en moyenne 3x plus de clics. Esmy vous aide à collecter ces avis naturellement, en remerciant chaque client de sa visite avec une petite attention — qu\'il choisisse ensuite de laisser un avis ou non.'
      },
      {
        q: 'Puis-je mettre le QR code sur ma boîte à pizza ?',
        a: 'Oui, c\'est même l\'une des meilleures utilisations d\'Esmy pour une pizzeria. Un QR code imprimé sur le carton permet à vos clients en livraison ou en emporter de jouer à la roue après leur repas — le moment idéal où ils se souviennent de leur expérience.'
      },
      {
        q: 'Offrir une pizza pour un avis, est-ce autorisé ?',
        a: 'Non, Google l\'interdit formellement. Esmy contourne ce problème : la pizza (ou tout autre lot) est offerte pour remercier le client, sans condition de laisser un avis. Le client peut partager son expérience s\'il le souhaite — mais son lot est déjà acquis. C\'est la seule approche conforme.'
      },
      {
        q: 'Quel plan pour une pizzeria multi-sites ?',
        a: 'Le plan Pro (69€/mois) couvre jusqu\'à 3 pizzerias, avec un tableau de bord centralisé. Au-delà, le plan Agence est adapté — avec tarification sur-mesure et support prioritaire.'
      },
      {
        q: 'L\'IA répond-elle bien aux critiques sur la pâte ou la cuisson ?',
        a: 'Oui — l\'IA comprend le contexte de chaque avis et prépare une réponse adaptée. Pour une critique sur la cuisson, elle proposera une réponse empathique qui reconnaît le problème et invite le client à revenir. Vous relisez et modifiez si besoin avant de publier.'
      }
    ],
    meta: {
      title: 'Esmy pour pizzerias — Plus d\'avis Google pour votre pizzeria',
      description: 'Esmy aide les pizzerias à collecter plus d\'avis Google et à y répondre grâce à l\'IA. Gamification conforme Google, à partir de 33€/mois sans engagement.'
    }
  }
}

export const METIERS_LIST = Object.values(METIERS)
