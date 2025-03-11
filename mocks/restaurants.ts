import { Restaurant } from "@/types";

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Enoristorante Boccaccio",
    description:
      "Ristorante a conduzione familiare che privilegia la cucina tipica maremmana, con escursioni nella cucina nazionale ed internazionale.",
    stars: 4.5,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a4/ea/e3/chicche-e-bottarga.jpg?w=900&h=500&s=1",
    location: "Caldana, Provincia di Grosseto",
    cuisine: "Cucina maremmana, italiana e internazionale",
    priceRange: "€€",
    specialties: [
      "Cinghiale in umido",
      "Pappardelle al ragù di lepre",
      "Tagliata di manzo",
    ],
  },
  {
    id: 2,
    name: "Ristorante Era Ora",
    description:
      "Ristorante situato nel cuore di Massa Marittima, noto per la sua cucina creativa che combina tradizione e innovazione.",
    stars: 4.6,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/8d/a3/59/millefoglie-di-patate.jpg?w=900&h=500&s=1",
    location: "Massa Marittima, Provincia di Grosseto",
    cuisine: "Cucina toscana contemporanea",
    priceRange: "€€€",
    specialties: [
      "Baccalà mantecato",
      "Risotto ai funghi porcini",
      "Filetto di cinta senese",
    ],
  },
  {
    id: 3,
    name: "Caino",
    description:
      "Ristorante stellato Michelin che offre piatti elaborati con prodotti d’eccellenza nel verde della Maremma.",
    stars: 5.0,
    image:
      "https://static.gamberorosso.it/media/k2/items/src/b76a4b03c6ff359d9a320f6695f0f41e.jpg",
    location: "Montemerano, Provincia di Grosseto",
    cuisine: "Cucina gourmet toscana",
    priceRange: "€€€€",
    specialties: [
      "Piccione arrosto",
      "Tortelli di patate al tartufo",
      "Zuppa di pesce",
    ],
  },
  {
    id: 4,
    name: "Trattoria Enrico Bartolini",
    description:
      "Elegante osteria gourmet situata nella tenuta La Badiola, che offre con creatività e leggerezza le tradizioni della Maremma.",
    stars: 4.8,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ee/29/ee/external-view.jpg?w=900&h=500&s=1",
    location: "Castiglione della Pescaia, Provincia di Grosseto",
    cuisine: "Cucina toscana rivisitata",
    priceRange: "€€€",
    specialties: [
      "Pici all'aglione",
      "Cacciucco alla livornese",
      "Bistecca alla fiorentina",
    ],
  },
  {
    id: 5,
    name: "Il Cantuccio",
    description:
      "Locale accogliente che propone piatti tipici della tradizione maremmana, preparati con ingredienti locali.",
    stars: 4.4,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f6/d8/67/ristorante-il-cantuccio.jpg?w=900&h=500&s=1",
    location: "Scarlino, Provincia di Grosseto",
    cuisine: "Cucina tradizionale toscana",
    priceRange: "€€",
    specialties: [
      "Acquacotta",
      "Tortelli maremmani",
      "Cinghiale alla cacciatora",
    ],
  },
  {
    id: 6,
    name: "La Solita Zuppa",
    description:
      "Ristorante noto per le sue zuppe tradizionali e piatti tipici toscani, serviti in un ambiente rustico e accogliente.",
    stars: 4.5,
    image:
      "https://res.cloudinary.com/tf-lab/image/upload/restaurant/7d48f05b-d30e-46a4-b95f-b67b6775ffd7/aea6e1b3-8542-460b-88f1-71a891784946.jpg",
    location: "Grosseto, Provincia di Grosseto",
    cuisine: "Cucina toscana",
    priceRange: "€€",
    specialties: ["Ribollita", "Zuppa di farro", "Pappa al pomodoro"],
  },
  {
    id: 7,
    name: "Il Gambero Rosso",
    description:
      "Ristorante di pesce situato sul lungomare, famoso per la freschezza dei suoi prodotti e la vista panoramica.",
    stars: 4.7,
    image: "https://static.gamberorosso.it/2020/08/orb-leccino-1024x768.jpg",
    location: "Orbetello, Provincia di Grosseto",
    cuisine: "Cucina di mare",
    priceRange: "€€€",
    specialties: [
      "Spaghetti alle vongole",
      "Frittura di paranza",
      "Zuppa di pesce",
    ],
  },
  {
    id: 8,
    name: "Osteria del Mare",
    description:
      "Locale informale che offre piatti di pesce freschissimo, con un'ampia selezione di vini locali.",
    stars: 4.3,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/3c/7c/34/vista-mare.jpg?w=900&h=-1&s=1",
    location: "Follonica, Provincia di Grosseto",
    cuisine: "Cucina marinara",
    priceRange: "€€",
    specialties: ["Risotto alla pescatora", "Polpo alla griglia", "Cacciucco"],
  },
  {
    id: 9,
    name: "La Vecchia Maremma",
    description:
      "Ristorante che propone piatti tipici della tradizione maremmana, in un ambiente rustico e accogliente.",
    stars: 4.2,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a5/6c/bb/vista-esterna-con-l-ampio.jpg?w=900&h=-1&s=1",
    location: "Grosseto, Provincia di Grosseto",
    cuisine: "Cucina tradizionale toscana",
    priceRange: "€€",
    specialties: [
      "Pappardelle al cinghiale",
      "Trippa alla maremmana",
      "Fegatelli di maiale",
    ],
  },
];
