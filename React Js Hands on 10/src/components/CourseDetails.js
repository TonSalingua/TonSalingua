export default function CourseDetails(props) {
    const blogs = [
      {
        title: "Vue",
        Date: "4/5/2022",
      },
      {
        title: "React",
        Date: "6/3/2022",
      },
    ];
  
    return (
      <div className="border-0 px-1 ">
        <span className="strong">Course Details</span>
        {blogs.map((blog) => (
          <div>
            <h3>{blog.title}</h3>
            <p className="small">{blog.Date}</p>
          </div>
        ))}
      </div>
    );
  }