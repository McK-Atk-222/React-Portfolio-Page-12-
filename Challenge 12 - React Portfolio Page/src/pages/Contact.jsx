export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <p>Email:</p>
        <input
          type="text"
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <p>Message:</p>
        <input
          type="text"
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
}
