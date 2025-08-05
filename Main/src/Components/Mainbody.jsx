import { Link } from 'react-router-dom'

const Mainbody = () => {
    return (
        <>
        <section className="bg-gray-100 min-h-[60vh] flex items-center justify-center border-t border-blue-100">
            <div className="text-center px-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-4 drop-shadow-lg">
                    Welcome to <span className="text-yellow-400">YourBlog</span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-900 mb-8 font-medium">
                    Discover inspiring stories, insightful articles, and a vibrant community. Dive in and let your curiosity thrive!
                </p>
                <Link to="/Services" className="inline-block bg-yellow-300 text-blue-950 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors text-lg">
                    Start Reading
                </Link>
            </div>
        </section>
        </>
    )
}
export default Mainbody;