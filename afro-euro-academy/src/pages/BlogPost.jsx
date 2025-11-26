import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { BiArrowBack, BiCalendar, BiUser } from 'react-icons/bi';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <div className="bg-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-hero-gradient text-white py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold px-4">{post.title}</h1>
        <div className="mt-4 flex justify-center items-center gap-4 text-sm text-gray-300">
          <span className="flex items-center"><BiCalendar className="mr-1"/> {post.date}</span>
          <span>|</span>
          <span className="flex items-center"><BiUser className="mr-1"/> {post.author}</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded mb-8" />
          
          <div className="prose max-w-none text-gray-800">
            {post.content.map((block, idx) => {
              if (block.type === 'h5') return <h5 key={idx} className="text-xl font-bold text-primary mt-6 mb-2">{block.text}</h5>;
              return <p key={idx} className="mb-4 leading-relaxed">{block.text}</p>;
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
             <Link to="/blog" className="flex items-center text-secondary font-bold hover:underline">
               <BiArrowBack className="mr-2" /> Back to Blog
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;