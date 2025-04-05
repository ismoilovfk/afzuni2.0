import martinLogo from '../assets/images/martin-logo.jpg';
import vanyaLogo from '../assets/images/vanya.png';
import voronLogo from '../assets/images/voron.png';
import stambaLogo from '../assets/images/stamba.png';
import pasteroniLogo from '../assets/images/pasteroni.png';
import sibbaltLogo from '../assets/images/sibbalt.png';
import mikadoLogo from '../assets/images/mikado.jpg';
import hlebpromLogo from '../assets/images/hlebprom.jpg';
import barakatLogo from '../assets/images/Logo-Baraket-Isfara.png';
import sibyksysLogo from '../assets/images/sibyksys.png';

const partnersData = {
  martin: {
    name: "Мартин",
    description: "Компания «МАРТИН» за годы своей деятельности завоевала признание как среди экспертов, так и среди потребителей по всему миру. Они предлагают своим клиентам продукцию исключительно собственного производства, которой по праву гордятся. Основные принципы их работы включают максимальную прозрачность сделок, высококлассный сервис и доброжелательное отношение к партнёрам.",
    products: [
      { name: "Семечки", url: "https://martinglobalfoods.com/products-categories/semechki_martin" },
      { name: "Чипсы", url: "https://martinglobalfoods.com/products-categories/chipsy" },
      { name: "Лемонады", url: "https://martinglobalfoods.com/products-categories/limonad_martin" },
      { name: "Макароны", url: "https://martinglobalfoods.com/products-categories/makarony_martin_s_g" },
      { name: "Орехи", url: "https://martinglobalfoods.com/products-categories/orehi_ot_martina" }
    ],
    logo: martinLogo,
    website: "https://martinglobalfoods.com/",
    shortInfo: "Более 20 лет на рынке кондитерских изделий",
    partnerSince: 2010,
    id: "martin"
  },
  "dyadya-vanya": {
    name: "ДЯДЯ ВАНЯ",
    description: "Компания «Дядя Ваня» создала бренд, отражающий фундаментальные ценности: семья, традиции, вера, забота о близких, душевность и доброжелательность. Независимо от того, где ты находишься и чем занимаешься, бренд «Дядя Ваня» напоминает, что однажды внутри каждого может прозвучать: «Время вернуться домой!»",
    products: [
      { name: "Огурчики", url: "https://dyadya-vanya.ru/products/ogurcy" },
      { name: "Томаты", url: "https://dyadya-vanya.ru/products/tomaty" },
      { name: "Горошек", url: "https://dyadya-vanya.ru/products/goroshek" },
      { name: "Кукуруза", url: "https://dyadya-vanya.ru/products/kukuruza" },
      { name: "Уксусы", url: "https://dyadya-vanya.ru/products/vinegar" }
    ],
    logo: vanyaLogo,
    website: "https://dyadya-vanya.ru/",
    shortInfo: "Консервированные овощи высшего качества",
    partnerSince: 2008,
    id: "dyadya-vanya"
  },
  vorontsovskie: {
    name: "Воронцовские",
    description: "Компания использует традиционную технологию производства, доведя процесс приготовления до совершенства, чтобы обеспечить высокое качество и отличный вкус своих сухариков и гренок. Они готовят продукцию из ароматного хлеба, выпекаемого по специальной рецептуре, с тщательным контролем качества, осуществляемым специалистами-технологами.",
    products: [
      { name: "Сухарики", url: "https://vorontsovskie.ru/catalog/sukhariki/" },
      { name: "Гренки", url: "https://vorontsovskie.ru/catalog/grenki/" },
      { name: "Бородинские гренки", url: "https://vorontsovskie.ru/catalog/borodinskie-grenki/" },
      { name: "Пшеничные", url: "https://vorontsovskie.ru/catalog/pshenichnye/" }
    ],
    logo: voronLogo,
    website: "https://vorontsovskie.ru/",
    shortInfo: "Лучшие сухарики и гренки",
    partnerSince: 2007,
    id: "vorontsovskie"
  },
  stamba: {
    name: "Stamba",
    description: "Компания Stamba с 2016 года занимается собственным производством и уже более 5 лет создаёт отличные снеки из лучших российских ингредиентов. Они гордятся своими достижениями и благодарны каждому члену своей команды. Stamba располагает самым современным заводом в России по производству чипсов. Собрав мировой опыт, передовые технологии и усовершенствовав все процессы, они представили на рынок бренд Bruto — современные и вкусные снеки.",
    products: [
      { name: "КРАФТСНЕКИ​", url: "https://stamba.su/nashi-brendy" },
      { name: "BRUTO FLAVOR", url: "https://stamba.su/nashi-brendy" },
      { name: "GOURMET LINE", url: "https://stamba.su/nashi-brendy" },
      { name: "BLACK EDITION", url: "https://stamba.su/nashi-brendy" }
    ],
    logo: stambaLogo,
    website: "https://stamba.su/",
    shortInfo: "Современные и вкусные снеки с 2016 года",
    partnerSince: 2016,
    id: "stamba"
  },
  pasteroni: {
    name: "Pasteroni",
    description: "Pasteroni – это макаронные изделия премиум-качества, изготовленные из отборных сортов пшеницы. Компания предлагает широкий ассортимент пасты для различных кулинарных целей, сохраняя итальянские традиции изготовления и добавляя современные технологии.",
    products: [
      { name: "КОРОТКАЯ ПАСТА", url: "https://pasteroni.com/catalog" },
      { name: "ДЛИННАЯ ПАСТА", url: "https://pasteroni.com/catalog" },
      { name: "ПАСТА ДЛЯ ЗАПЕКАНИЯ", url: "https://pasteroni.com/catalog" },
      { name: "ПАСТА ДЛЯ СУПА", url: "https://pasteroni.com/catalog" }
    ],
    logo: pasteroniLogo,
    website: "https://pasteroni.com/",
    shortInfo: "Паста премиум-качества",
    partnerSince: 2009,
    id: "pasteroni"
  },
  sibbalt: {
    name: "Сибирская Балтика",
    description: "Сибирская Балтика – компания, специализирующаяся на производстве качественных продуктов питания из Сибири, с использованием локальных ингредиентов и традиционных рецептов.",
    products: [],
    logo: sibbaltLogo,
    website: "https://sibbalt.ru/",
    shortInfo: "Качественные продукты из Сибири",
    partnerSince: 2012,
    id: "sibbalt"
  },
  mikado: {
    name: "Mikado",
    description: "Mikado – производитель широкого ассортимента кондитерских изделий, включая печенье, вафли и шоколадные продукты.",
    products: [],
    logo: mikadoLogo,
    website: "https://mikado.ru/",
    shortInfo: "Кондитерские изделия высокого качества",
    partnerSince: 2015,
    id: "mikado"
  },
  hlebprom: {
    name: "Хлебпром",
    description: "Хлебпром – один из крупнейших производителей хлебобулочных и кондитерских изделий в России, предлагает широкий ассортимент выпечки, тортов и пирожных.",
    products: [],
    logo: hlebpromLogo,
    website: "https://hlebprom.ru/",
    shortInfo: "Хлебобулочные и кондитерские изделия",
    partnerSince: 2011,
    id: "hlebprom"
  },
  barakat: {
    name: "Баракат Исфара",
    description: "Баракат Исфара – компания, специализирующаяся на производстве и поставке традиционных таджикских сладостей и сухофруктов высокого качества.",
    products: [],
    logo: barakatLogo,
    website: "https://barakat-isfara.tj/",
    shortInfo: "Традиционные таджикские сладости и сухофрукты",
    partnerSince: 2014,
    id: "barakat"
  },
  sibyksys: {
    name: "СИБУКСУСЬ",
    description: "СИБУКСУСЬ – компания, производящая различные виды уксуса, соусов и приправ для кулинарии.",
    products: [],
    logo: sibyksysLogo,
    website: "https://sibyksys.ru/",
    shortInfo: "Уксус, соусы и приправы",
    partnerSince: 2013,
    id: "sibyksys"
  }
};

export default partnersData; 