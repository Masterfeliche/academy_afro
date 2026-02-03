import React, { useState, useEffect, useContext, createContext } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, 
  Trophy, Users, Calendar, Shield, Heart, CheckCircle, 
  CreditCard, Globe, ChevronRight, Star, AlertCircle, ArrowRight,
  Camera, Globe2, Play, Image as ImageIcon
} from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * 1. UTILITIES & CONFIGURATION
 * ------------------------------------------------------------------
 */

const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- TRANSLATION DICTIONARY ---
const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About', programs: 'Programs', 
      training: 'Schedule', fees: 'Fees', gallery: 'Media',
      partners: 'Partners', contact: 'Contact', join: 'Join Now'
    },
    hero: {
      tag: 'Premier Football Academy in Tanzania',
      title_start: 'Talent • Discipline •',
      title_end: 'Opportunity',
      desc: 'Bridging the gap between African talent and European football standards. Join the academy that builds complete players.',
      cta_primary: 'Register Now',
      cta_secondary: 'Our Programs'
    },
    stats: {
      players: 'Players Trained',
      partners: 'Partner Clubs',
      tours: 'Intl. Tours',
      years: 'Years Active'
    },
    gallery_page: {
      title: 'Pitch Side',
      subtitle: 'The Academy Lens: Captured moments of glory, sweat, and triumph.',
      cat_all: 'All Moments',
      cat_match: 'Match Day',
      cat_training: 'Training',
      social_title: 'Join the Conversation',
      social_text: 'Follow @AfroEuroAcademy on Instagram for live stories.'
    },
    sections: {
      values: 'Our Core Values',
      news: 'Academy News & Updates',
      coach_title: 'Head Coach',
      coach_quote: "We don't just train players; we raise responsible citizens."
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani', about: 'Kuhusu Sisi', programs: 'Programu', 
      training: 'Ratiba', fees: 'Ada', gallery: 'Matukio',
      partners: 'Wadau', contact: 'Mawasiliano', join: 'Jiunge Sasa'
    },
    hero: {
      tag: 'Chuo Bora cha Soka Tanzania',
      title_start: 'Kipaji • Nidhamu •',
      title_end: 'Fursa',
      desc: 'Tunajenga daraja kati ya vipaji vya Afrika na viwango vya soka vya Ulaya. Jiunge na chuo kinachojenga wachezaji kamili.',
      cta_primary: 'Jisajili Sasa',
      cta_secondary: 'Programu Zetu'
    },
    stats: {
      players: 'Wachezaji',
      partners: 'Vilabu Wadau',
      tours: 'Ziara za Nje',
      years: 'Miaka ya Uzoefu'
    },
    gallery_page: {
      title: 'Uwanjani',
      subtitle: 'Jicho la Chuo: Matukio ya ushindi, mazoezi, na furaha.',
      cat_all: 'Yote',
      cat_match: 'Mechi',
      cat_training: 'Mazoezi',
      social_title: 'Ungana Nasi',
      social_text: 'Tufuate @AfroEuroAcademy Instagram kwa matukio ya hivi punde.'
    },
    sections: {
      values: 'Misingi Yetu',
      news: 'Habari na Matukio',
      coach_title: 'Kocha Mkuu',
      coach_quote: "Hatufundishi mpira tu; tunalea raia wema wa kesho."
    }
  }
};

// --- LANGUAGE CONTEXT ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'sw' : 'en');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    keys.forEach(key => {
      value = value ? value[key] : null;
    });
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useTranslation = () => useContext(LanguageContext);

/**
 * ------------------------------------------------------------------
 * 2. REUSABLE UI COMPONENTS
 * ------------------------------------------------------------------
 */

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    // Primary is now ORANGE (Action color)
    primary: "border-transparent text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 shadow-sm",
    // Secondary is BLUE (Brand color)
    secondary: "border-transparent text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-500",
    // Outline matches the brand blue
    outline: "border-blue-200 text-blue-700 bg-white hover:bg-blue-50 focus:ring-blue-500"
  };
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className, bg = 'white' }) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-slate-50", // Keep light gray for neutrality
    dark: "bg-blue-950 text-white" // Deep Navy Blue for dark sections
  };
  return (
    <section className={cn("py-16 lg:py-24", backgrounds[bg], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, align = 'center' }) => (
  <div className={cn("mb-12", align === 'center' ? 'text-center' : 'text-left')}>
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-900 dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto dark:text-slate-400">
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, className }) => (
  <div className={cn("bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow", className)}>
    {children}
  </div>
);

/**
 * ------------------------------------------------------------------
 * 3. LAYOUT COMPONENTS
 * ------------------------------------------------------------------
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useTranslation();
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.training'), path: '/training' },
    { name: t('nav.fees'), path: '/fees' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center border-2 border-orange-500">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-blue-900">AFRO EURO</span>
                <span className="text-xs font-bold tracking-wider text-orange-500">SOCCER ACADEMY</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  location.pathname === link.path ? "text-blue-700 font-bold" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center px-3 py-1 rounded-full bg-slate-50 text-xs font-bold text-blue-700 hover:bg-blue-50 transition-colors border border-slate-200"
              title="Switch Language"
            >
              <Globe2 className="h-3 w-3 mr-1" />
              {lang === 'en' ? 'SW' : 'EN'}
            </button>

            <Link to="/register">
              <Button size="sm" className="px-4 py-2 text-sm font-bold shadow-orange-200">{t('nav.join')}</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button 
              onClick={toggleLang}
              className="flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-blue-900"
            >
              {lang === 'en' ? 'Kiswahili' : 'English'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-orange-500 hover:bg-blue-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register" className="block w-full mt-4">
              <Button className="w-full justify-center">{t('nav.join')}</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-blue-950 text-slate-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-white text-lg">AFRO EURO</span>
          </div>
          <p className="text-sm text-slate-400">
            Nurturing talent, building character, and creating international opportunities for Tanzanian youth.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-orange-400">Programs</Link></li>
            <li><Link to="/schedule" className="hover:text-orange-400">Schedule</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-400">Media Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Phone className="h-4 w-4 mr-2 text-orange-500" /> +255 123 456 789</li>
            <li className="flex items-center"><Mail className="h-4 w-4 mr-2 text-orange-500" /> info@afroeuro.co.tz</li>
            <li className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-orange-500" /> Dar es Salaam, Tanzania</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">Follow Us</h3>
          <p className="text-xs text-slate-500 mb-2">Join our digital community</p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
            <Instagram className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900 mt-8 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Afro Euro Soccer Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

/**
 * ------------------------------------------------------------------
 * 4. NEW & UPDATED PAGE COMPONENTS
 * ------------------------------------------------------------------
 */

const GalleryPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { type: 'image', category: 'match', src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-2" },
    { type: 'image', category: 'training', src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-2" },
    { type: 'image', category: 'match', src: "https://images.unsplash.com/photo-1510051640316-54350f39c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-1" },
    { type: 'social', span: "row-span-1 col-span-2 md:col-span-1" },
    { type: 'image', category: 'training', src: "https://images.unsplash.com/photo-1517466787929-bc90951d6dbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-1" },
    { type: 'image', category: 'community', src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-1" },
    { type: 'image', category: 'match', src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-2" },
    { type: 'image', category: 'training', src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", span: "row-span-1" },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === 'social' || item.category === filter);

  return (
    <>
      <div className="bg-blue-950 text-white py-20 text-center">
        <Camera className="h-12 w-12 text-orange-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">{t('gallery_page.title')}</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">{t('gallery_page.subtitle')}</p>
      </div>

      <Section>
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'match', 'training'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all capitalize",
                filter === cat 
                  ? "bg-blue-700 text-white shadow-lg ring-2 ring-blue-700 ring-offset-2" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-orange-500"
              )}
            >
              {t(`gallery_page.cat_${cat}`)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, idx) => {
            if (item.type === 'social') {
               return (
                 <div key={idx} className={cn("bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl p-6 flex flex-col justify-center items-center text-white text-center hover:opacity-95 transition-opacity cursor-pointer relative overflow-hidden group", item.span)}>
                   <div className="transform group-hover:scale-110 transition-transform duration-300">
                     <Instagram className="h-10 w-10 mb-3 mx-auto" />
                     <h4 className="font-bold text-lg mb-1">{t('gallery_page.social_title')}</h4>
                     <p className="text-xs opacity-90 leading-tight">{t('gallery_page.social_text')}</p>
                   </div>
                   <a href="#" className="absolute inset-0 z-10" aria-label="Visit Instagram"></a>
                 </div>
               );
            }
            
            return (
              <div key={idx} className={cn("relative group overflow-hidden rounded-xl bg-slate-200", item.span)}>
                <img 
                  src={item.src} 
                  alt="Gallery Moment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">{item.category}</span>
                  <p className="text-white font-medium text-sm">Captured Moment</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

const HomePage = () => {
  const { t, lang } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-blue-950 h-[700px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Football training" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center pt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30 backdrop-blur-sm">
            {t('hero.tag')}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            {t('hero.title_start')} <span className="text-orange-500">{t('hero.title_end')}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mb-10 leading-relaxed drop-shadow-md">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button className="w-full sm:w-auto h-14 text-lg shadow-lg shadow-orange-900/20">{t('hero.cta_primary')}</Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="w-full sm:w-auto h-14 text-lg border-blue-400 text-blue-100 bg-transparent hover:bg-blue-900/50 hover:text-white">
                {t('hero.cta_secondary')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats - Overlapping Hero */}
      <Section bg="white" className="border-b border-slate-100 relative -mt-10 z-10 pt-0 pb-0">
        <div className="bg-white shadow-xl rounded-2xl p-8 transform -translate-y-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: t('stats.players'), value: '500+' },
              { label: t('stats.partners'), value: '12' },
              { label: t('stats.tours'), value: '8' },
              { label: t('stats.years'), value: '10+' },
            ].map((stat, i) => (
              <div key={i} className={i % 2 !== 0 ? "border-none" : ""}>
                <div className="text-4xl font-extrabold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Academy Values */}
      <Section bg="white" className="pt-8">
        <SectionHeader title={t('sections.values')} align="center" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
            <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'Discipline' : 'Nidhamu'}</h3>
            <p className="text-slate-600">{lang === 'en' ? 'We believe character builds talent. Punctuality and respect are non-negotiable.' : 'Tunaamini tabia hujenga kipaji. Kuwahi na heshima ni vitu vya msingi.'}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'Teamwork' : 'Ushirikiano'}</h3>
            <p className="text-slate-600">{lang === 'en' ? 'No individual is bigger than the team. We play together, we win together.' : 'Hakuna mchezaji mkubwa kuliko timu. Tunacheza pamoja, tunashinda pamoja.'}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
            <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'Excellence' : 'Ubora'}</h3>
            <p className="text-slate-600">{lang === 'en' ? 'Striving for the highest European standards in every training session.' : 'Tunazingatia viwango vya juu vya Ulaya katika kila mazoezi.'}</p>
          </div>
        </div>
      </Section>

      {/* Featured Programs */}
      <Section bg="gray">
        <SectionHeader title="Our Programs" subtitle="Structured development pathways for every age and skill level." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Youth Development", icon: Users, desc: "Long-term development for ages 6-18 focusing on technical skills." },
            { title: "Holiday Camps", icon: Calendar, desc: "Intensive training sessions during school holidays to boost performance." },
            { title: "Elite Squad", icon: Trophy, desc: "Specialized high-performance training for selected players aiming for pros." },
          ].map((prog) => (
            <Card key={prog.title} className="p-6 text-center hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-transparent hover:border-t-orange-500">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                <prog.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{prog.title}</h3>
              <p className="text-slate-500 mb-6">{prog.desc}</p>
              <Link to="/programs" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center group">
                Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Meet the Coach & News Split */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coach Profile */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1546519638-68e109498eec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Head Coach" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-orange-500 font-bold uppercase text-xs tracking-wider">{t('sections.coach_title')}</p>
              <h3 className="font-bold text-lg text-blue-900">Coach Emmanuel</h3>
              <p className="text-sm text-slate-500 italic mt-2">"{t('sections.coach_quote')}"</p>
            </div>
          </div>

          {/* News Feed */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">{t('sections.news')}</h2>
            <div className="space-y-6">
              {[
                { date: "Oct 15", title: "U17 Team qualifies for Regional Finals", cat: "Match Result" },
                { date: "Nov 02", title: "Registrations Open for December Holiday Camp", cat: "Announcement" },
                { date: "Nov 20", title: "Scouts from Sweden Visiting Next Month", cat: "Opportunity" }
              ].map((news, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg border border-slate-100 hover:bg-blue-50 transition-colors cursor-pointer group">
                  <div className="flex-shrink-0 w-16 text-center bg-slate-100 rounded p-2 group-hover:bg-blue-200 transition-colors">
                    <span className="block text-xs font-bold text-slate-500 uppercase">{news.date.split(' ')[0]}</span>
                    <span className="block text-xl font-bold text-blue-900">{news.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-500 uppercase mb-1 block">{news.cat}</span>
                    <h4 className="font-bold text-slate-800 hover:text-blue-700 transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="gray">
        <SectionHeader title="What Parents Say" />
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <Card key={i} className="p-8 bg-white border-none shadow-md">
              <div className="flex text-orange-400 mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "Afro Euro has transformed my son's discipline both on and off the pitch. The coaches are professional and truly care about the kids' development."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-700 font-bold">
                  {i === 1 ? 'JM' : 'AS'}
                </div>
                <div>
                  <p className="font-bold text-blue-900">{i === 1 ? 'John M.' : 'Aisha S.'}</p>
                  <p className="text-sm text-slate-500">Parent of U12 Player</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

const AboutPage = () => (
  <>
    <div className="bg-blue-950 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">About Afro Euro</h1>
      <p className="text-xl text-blue-200">More than just a football academy.</p>
    </div>
    
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Afro Euro Soccer Academy is legally registered (NSC 146, BMT) with a vision to nurture young talent in Tanzania. We use sports as a vehicle to fight poverty, drug abuse, and diseases by keeping youth engaged in productive activities.
          </p>
          <ul className="space-y-4">
            {[
              "Professional Coaching Standards",
              "Character Building & Discipline",
              "International Exposure",
              "Community Impact"
            ].map(item => (
              <li key={item} className="flex items-center text-slate-700">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
           <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Team meeting" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>

    <Section bg="gray">
      <SectionHeader title="Why Choose Us?" subtitle="We provide a pathway to professional football." />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: "International Exposure", desc: "We organize tours to South Africa, Dubai, Norway, and Sweden to expose players to global standards." },
          { icon: Shield, title: "Certified & Safe", desc: "Registered with the National Sports Council and BMT. Safety is our top priority." },
          { icon: Heart, title: "Holistic Approach", desc: "We focus on health, education, and life skills alongside football training." },
        ].map(feat => (
          <div key={feat.title} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-transparent hover:border-t-orange-500 transition-all">
            <feat.icon className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-blue-900">{feat.title}</h3>
            <p className="text-slate-500">{feat.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </>
);

const ProgramsPage = () => (
  <Section>
    <SectionHeader title="Training Programs" subtitle="Designed for every stage of development." />
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Youth Development", age: "6 - 16 Years", time: "Year-Round", price: "Monthly Fee", features: ["Basic Skills", "Teamwork", "Weekend Matches"] },
        { title: "Holiday Program", age: "6 - 18 Years", time: "Jun/Dec Holidays", price: "Fixed Fee", features: ["Intensive Training", "Fitness Focus", "Mini Tournaments"] },
        { title: "Elite Development", age: "Selected Players", time: "Ongoing", price: "Scholarship/Fee", features: ["Advanced Tactics", "Video Analysis", "Scouting Opportunities"] },
      ].map((prog) => (
        <Card key={prog.title} className="flex flex-col">
          <div className="p-6 bg-blue-900 text-white">
            <h3 className="text-2xl font-bold">{prog.title}</h3>
            <p className="text-orange-400 font-medium mt-1">{prog.age}</p>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-6 flex-1">
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mb-3">Includes</p>
              <ul className="space-y-3">
                {prog.features.map(f => (
                  <li key={f} className="flex items-center text-slate-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/register" className="mt-auto">
              <Button className="w-full">Register Interest</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const TrainingPage = () => (
  <>
    <SectionHeader title="Training Schedule & Essentials" className="mt-12" />
    
    {/* Schedule */}
    <Section>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-blue-700 p-4 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg flex items-center"><Calendar className="mr-2 h-5 w-5"/> Weekly Timetable</h3>
          <span className="text-sm bg-orange-500 px-3 py-1 rounded-full font-bold">Phase 1: Jan - May</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Activity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {[
                { day: "Monday", time: "16:00 - 18:00", activity: "U10 & U12 Technical Drills" },
                { day: "Wednesday", time: "16:00 - 18:00", activity: "U14 & U16 Tactical Play" },
                { day: "Friday", time: "15:30 - 17:30", activity: "All Groups Fitness & Conditioning" },
                { day: "Saturday", time: "08:00 - 11:00", activity: "Match Day / Internal League" },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-900">{row.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-600">{row.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-600">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-orange-50 text-orange-900 text-sm flex items-start border-t border-orange-100">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 text-orange-600" />
          <p>Sunday schedule is flexible to accommodate church services and family time. Holiday schedules (June, Dec) will be announced separately.</p>
        </div>
      </div>
    </Section>

    {/* Requirements & Safety Grid */}
    <Section bg="gray">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Requirements */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Shield className="h-6 w-6 text-blue-600 mr-2" /> Mandatory Gear
          </h3>
          <Card className="p-6">
            <ul className="space-y-4">
              {[
                "Official Academy Uniform (Jersey & Shorts)",
                "Long Football Socks (Blue/Orange)",
                "Shin Guards (Compulsory for safety)",
                "Football Boots (Studs suitable for grass/turf)",
                "Personal Water Bottle (1 Liter min)"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold mt-0.5 mr-3">
                    {i + 1}
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Health & Safety */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Heart className="h-6 w-6 text-orange-500 mr-2" /> Health & Safety
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h4 className="font-bold text-blue-900 mb-1">Medical Disclosure</h4>
              <p className="text-sm text-slate-600">Guardians must disclose conditions like Asthma, Sickle Cell, or Heart Conditions during registration.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-1">First Aid</h4>
              <p className="text-sm text-slate-600">Basic first aid is available on-site. Serious injuries are referred to our partner medical facility immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

const FeesPage = () => (
  <Section>
    <SectionHeader title="Tuition & Fees" subtitle="Invest in your child's future." />
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
      <Card className="p-8 border-orange-500 border-t-4">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Registration</h3>
        <p className="text-3xl font-bold text-orange-600 mb-4">Tsh 50,000<span className="text-sm text-slate-400 font-normal"> / once</span></p>
        <p className="text-slate-500 text-sm mb-6">One-time payment for new players. Includes administrative costs and player ID.</p>
        <ul className="space-y-2 mb-6 text-sm text-slate-600">
          <li className="flex"><CheckCircle className="h-4 w-4 mr-2 text-orange-500"/> Valid for lifetime of membership</li>
          <li className="flex"><CheckCircle className="h-4 w-4 mr-2 text-orange-500"/> Includes Welcome Pack</li>
        </ul>
      </Card>
      
      <Card className="p-8 border-blue-900 border-t-4">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Monthly Training</h3>
        <p className="text-3xl font-bold text-blue-900 mb-4">Tsh 30,000<span className="text-sm text-slate-400 font-normal"> / month</span></p>
        <p className="text-slate-500 text-sm mb-6">Covers pitch rental, coaching fees, and equipment maintenance.</p>
        <ul className="space-y-2 mb-6 text-sm text-slate-600">
          <li className="flex"><CheckCircle className="h-4 w-4 mr-2 text-blue-900"/> 12 Sessions per month</li>
          <li className="flex"><CheckCircle className="h-4 w-4 mr-2 text-blue-900"/> Access to all facilities</li>
        </ul>
      </Card>
    </div>

    <div className="max-w-2xl mx-auto bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
      <CreditCard className="h-10 w-10 text-slate-400 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-blue-900 mb-4">Payment Details</h3>
      <div className="bg-white p-4 rounded border border-slate-200 inline-block text-left w-full max-w-sm">
        <div className="flex justify-between py-2 border-b border-slate-100">
          <span className="text-slate-500">Bank Name</span>
          <span className="font-medium">CRDB Bank</span>
        </div>
        <div className="flex justify-between py-2 border-b border-slate-100">
          <span className="text-slate-500">Account Name</span>
          <span className="font-medium">AFRO EURO SPORTS</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-slate-500">Account Number</span>
          <span className="font-mono font-bold text-blue-900">0150XXXXXXX</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        Please use the Player's Name as the reference. Keep your receipt. <br/>
        <span className="text-red-500 font-medium">Note: Registration fees are non-refundable.</span>
      </p>
    </div>
  </Section>
);

const PartnersPage = () => (
  <Section>
    <SectionHeader title="Global Connections" subtitle="Opening doors to the world of professional football." />
    
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Partner Clubs</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['Azam FC', 'Valencia FC', 'Barcelona Nigeria', 'Norwegian Clubs', 'Swedish Academies'].map((club) => (
            <div key={club} className="h-24 bg-slate-50 rounded border border-slate-100 flex items-center justify-center p-4 text-center">
              <span className="font-bold text-slate-300 text-sm">{club}</span>
              {/* Replace spans with actual logos in production */}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6 text-blue-900">International Tours</h3>
        <ul className="space-y-4">
          {[
            { country: "South Africa", event: "Youth Cup" },
            { country: "Dubai", event: "Winter Training Camp" },
            { country: "Sweden", event: "Gothia Cup" },
          ].map((tour) => (
            <li key={tour.country} className="flex items-center justify-between bg-white p-4 rounded shadow-sm border border-slate-100">
              <span className="font-medium text-blue-900">{tour.country}</span>
              <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-bold">{tour.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const ContactPage = () => (
  <div className="min-h-screen bg-slate-50">
    <Section>
      <SectionHeader title="Get in Touch" />
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8 bg-blue-900 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-slate-300">+255 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-300">info@afroeuro.co.tz</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-slate-300">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm text-slate-400">Follow us on social media for daily updates.</p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-6 w-6 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="How can we help?" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </Section>
  </div>
);

const RegisterPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0,0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Registration Received!</h2>
          <p className="text-slate-600 mb-6">Thank you for registering. Our team will contact you shortly to finalize the enrollment process.</p>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900">Player Registration</h1>
          <p className="mt-2 text-slate-600">Join the Afro Euro Soccer Academy family.</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-200">
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-lg font-medium text-white flex items-center">
              <Users className="mr-2 h-5 w-5" /> Player Information
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Player First Name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Player Last Name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                <input required type="date" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Program Interest</label>
                <select className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2">
                  <option>Youth Development</option>
                  <option>Holiday Program</option>
                  <option>Elite Squad</option>
                </select>
              </div>

              <div className="sm:col-span-6 border-t border-slate-100 pt-6 mt-2">
                <h3 className="text-lg font-medium text-blue-900 mb-4">Guardian Details</h3>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Guardian Name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                <input required type="tel" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="+255..." />
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-slate-700">Emergency Contact (if different)</label>
                <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" />
              </div>

              <div className="sm:col-span-6 border-t border-slate-100 pt-6 mt-2">
                <h3 className="text-lg font-medium text-blue-900 mb-4 flex items-center text-orange-600">
                  <Heart className="h-5 w-5 mr-2" /> Medical Information
                </h3>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-slate-700">
                  Does the player have any medical conditions? (Asthma, Allergies, etc.)
                </label>
                <div className="mt-1 text-xs text-slate-500 mb-2">Please be honest for the safety of the player.</div>
                <textarea required rows={3} className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="Write 'None' if applicable."></textarea>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <Button type="submit" className="w-full sm:w-auto">Submit Registration</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- APP ROOT ---

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/gallery" element={<GalleryPage />} /> 
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;