export default function Contact() {
  return (
    <div className="mt-3 mx-3">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="mb-3 w-25">
        <p className="form-label">Name:</p>
        <input
          type="text"
          // value={input}
          name="text"
          className="contact-input form-control"
          // onChange={handleChange}
        ></input>
        </div>
        <div className="mb-3 w-50">
        <p className="form-label">Email:</p>
        <input
          type="email"
          // value={input}
          name="text"
          className="contact-input form-control"
          // onChange={handleChange}
        ></input>
        </div>
        <div className="mb-3 w-75">
        <p className="form-label">Message:</p>
        <textarea
          type="text"
          // value={input}
          name="text"
          className="contact-input form-control"
          // onChange={handleChange}
        ></textarea>
        </div>
        <div>
        <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
