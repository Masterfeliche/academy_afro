import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogList = () => {
  return (
    <div className="min-h-screen bg-light">
      <div className="bg-hero-gradient text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2"><span className="text-secondary">Academy Blog</span></h1>
        <p className="text-xl">Latest news, stories, and insights</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="inline-block bg-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;