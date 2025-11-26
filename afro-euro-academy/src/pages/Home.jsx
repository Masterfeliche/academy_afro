import { useState } from 'react';
import { faqs } from '../data';

// Note: Ensure you have react-icons installed or remove the icon spans if not needed yet
// npm install react-icons

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-light text-dark font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              <span className="text-secondary">AFRO-EURO</span> SOCCER ACADEMY
            </h1>
            <h2 className="text-2xl text-blue-300 mb-6 font-semibold">One Academy. Two Continents. Infinite Possibilities.</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience a unique fusion of African flair and European technique.
            </p>
            <a href="#contact" className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded font-bold text-lg transition">Join the Team</a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="pics/daven2.png" alt="Academy Hero" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 border-b-2 border-secondary inline-block mx-auto pb-2">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <span role="img" aria-label="skill">⚡</span>, title: "Skill Development", desc: "Intensive technical training." },
            { icon: <span role="img" aria-label="fitness">❤️</span>, title: "Fitness & Nutrition", desc: "Personalized fitness plans." },
            { icon: <span role="img" aria-label="trophy">🏆</span>, title: "Game Exposure", desc: "Tournaments & Scouting." },
            { icon: <span role="img" aria-label="community">🌍</span>, title: "Community", desc: "Inclusion for all backgrounds." },
            { icon: <span role="img" aria-label="online">💻</span>, title: "Online Learning", desc: "Video analysis & remote coaching." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition text-center border border-gray-200">
              <div className="text-4xl text-secondary mb-4 flex justify-center">{item.icon}</div>
              <h5 className="text-xl font-bold text-primary mb-2">{item.title}</h5>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION (Added Here) */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="bg-light p-8 rounded shadow-md">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-secondary inline-block pb-2">About Our Academy</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At <span className="font-bold text-dark">AFRO-EURO Soccer Academy</span>, we are more than just a training ground—we are a community of passionate athletes, mentors, and dreamers united by the love of the game.
              </p>

              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-bold text-primary mb-1">Our Philosophy</h5>
                  <p className="text-gray-600 text-sm">We believe in developing well-rounded players by nurturing talent, discipline, and character—on and off the field.</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-primary mb-1">Our Mission</h5>
                  <p className="text-gray-600 text-sm">To identify, train, and empower young talent across Africa through quality coaching, competitive exposure, and personal mentorship.</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-primary mb-1">Our Vision</h5>
                  <p className="text-gray-600 text-sm">To become Africa’s leading grassroots football academy, producing top-tier players who inspire change in their communities.</p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex justify-center">
              <img 
                src="pics/pexels-jean-daniel-2961301.jpg" 
                alt="Football Academy" 
                className="rounded-full shadow-2xl w-80 h-80 object-cover border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
             {["Granton Said", "Riziki Mbunda", "Leonce Msimbe", "Tuntu Said"].map((name, i) => (
               <div key={i} className="text-center p-4 bg-white rounded shadow hover:shadow-md transition">
                 <img src="wallsssss/aj.png" className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-gray-100" />
                 <h5 className="font-bold text-lg">{name}</h5>
                 <p className="text-sm text-gray-500">Coach / Leadership</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-16 bg-white container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((num) => (
             <div key={num} className="relative group overflow-hidden rounded shadow-md aspect-square">
               <img src={`pics/photo_${num}_2025-07-11_14-29-26.jpg`} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" loading="lazy" />
               <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition">
                 <span className="text-white font-sm">Academy Moment</span>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 container mx-auto px-4 bg-light">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-primary font-semibold text-left"
              >
                {faq.q}
                {openFaq === index ? <span className="text-xl">➖</span> : <span className="text-xl">➕</span>}
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-10 items-center">
             <div>
               <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
               <p className="mb-6 text-gray-600">Reach out for tryouts, partnerships, or any questions.</p>
               <ul className="space-y-4">
                 <li className="font-bold">🏢 Headquarters: <span className="font-normal">123 Champion St.</span></li>
                 <li className="font-bold">📞 Phone: <span className="font-normal text-primary">+255 762 674 000</span></li>
                 <li className="font-bold">✉️ Email: <span className="font-normal text-primary">info@afroeuroacademy.com</span></li>
               </ul>
             </div>
             <form className="bg-light p-8 rounded shadow-lg">
               <div className="mb-4">
                 <label className="block text-sm font-bold mb-2">Name</label>
                 <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
               </div>
               <div className="mb-4">
                 <label className="block text-sm font-bold mb-2">Email</label>
                 <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
               </div>
               <button className="w-full bg-secondary text-white font-bold py-2 rounded hover:bg-orange-600">Send Message</button>
             </form>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;