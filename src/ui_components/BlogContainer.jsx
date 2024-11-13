import BlogCard from "./BlogCard"

const BlogContainer = () => {
  return (
    <section className="padding-x py-6  max-container">
    <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
      🍔Latest Posts
    </h2>

    <div className="flex items-center gap-6 justify-center flex-wrap">
      <BlogCard />
      <BlogCard />
      <BlogCard />

      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </section>
  )
}

export default BlogContainer
