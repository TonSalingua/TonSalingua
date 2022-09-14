export default function BookDetails(props) {
    const blogs = [
      {
        title: "React Learning",
        page: "670",
      },
      {
        title: "Deep Dive Vuex",
        page: "800",
      },
      {
        title: "Mongo Essentials",
        page: "450",
      },
    ];
  
    return (
      <div className="border border-success border-end-0 border-top-0 border-bottom-0 px-5 ">
        <span className="strong">Blog Details</span>
        {blogs.map((blog) => (
          <div>
            <h3>{blog.title}</h3>
            <p className="small">{blog.page}</p>
          </div>
        ))}
      </div>
    );
  }