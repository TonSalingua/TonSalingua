export default function BlogDetails(props) {
    const blogs = [
      {
        title: "React Learning",
        author: "Stephen Biz",
        description: "Welcome to learning React",
      },
      {
        title: "Installation",
        author: "Schewzdenier",
        description: "You can install React from npm",
      },
    ];
  
    return (
      <div className="border border-success border-end-0 border-top-0 border-bottom-0 p-1 ">
        <span className="strong">Blog Details</span>
        {blogs.map((blog) => (
          <div>
            <h3>{blog.title}</h3>
            <p className="bold">{blog.author}</p>
            <p className="small">{blog.description}</p>
          </div>
        ))}
      </div>
    );
  }