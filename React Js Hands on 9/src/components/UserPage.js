

export default function UserPage(){
        return (

            <div
      style={{
        backgroundImage: "url(/img/img2.jpg)",
        height: "650px",
        padding: "50px",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.5)",
          padding: "10px",
          margin: "50px",
          color: "white",
        }}
      >
        <h1 className="text-strong">UserPage!</h1>
        <p>Welcome to Ticket Booking App</p>
        <div
          className="bg-light text-dark"
          style={{ width: "500px", margin: "0 auto", padding: "30px" }}
        >
          <h4>Flight Details</h4>
          <ul>
            <li>FlightNumber: 1001</li>
            <li>SeatNumber: 25-B</li>
            <li>ReferenceNumber: NAI-123450-xxx</li>
          </ul>
          <br />
          <span className="opacity-50">Last updated 3 mins ago</span>
          <br />
          <br />
          <img src="/img/img3.jpg" width={500} height={280}/>
        </div>
      </div>
    </div>


        )

}