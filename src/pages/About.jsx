import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">ABOUT ME</h1>

        {/* Professional Summary */}
        <p className="about-summary">
          I am a motivated and detail-oriented MERN Stack Developer with
          hands-on experience in building full-stack web applications. I have
          worked on real-world projects using React.js, Node.js, Express.js, and
          MongoDB, and I enjoy turning ideas into functional and user-friendly
          applications. As a fresher, I am eager to learn, grow, and contribute
          to innovative development teams.
        </p>

        {/* Career Objective */}
        <h2 className="about-heading">Career Objective</h2>
        <p className="about-text">
          My goal is to begin my career as an entry-level MERN Stack Developer
          in an organization where I can apply my technical knowledge,
          strengthen my problem-solving skills, and continuously improve through
          real-world project experience while adding value to the team.
        </p>

        {/* What I Do */}
        <h2 className="about-heading">Key Responsibilities & Skills</h2>
        <ul className="about-list">
          <li>
            Develop responsive and interactive user interfaces using React.js
          </li>
          <li>Create backend REST APIs using Node.js and Express.js</li>
          <li>Design and manage databases using MongoDB</li>
          <li>Integrate frontend and backend for seamless data flow</li>
          <li>Debug and improve application performance</li>
          <li>Collaborate with team members using version control (GitHub)</li>
          <li>Follow clean coding practices and version control</li>
        </ul>

        {/* Strengths */}
        <h2 className="about-heading">My Strengths</h2>
        <ul className="about-list">
          <li>Clear and improving communication skills</li>
          <li>Strong problem-solving and logical thinking</li>
          <li>Quick learner with a positive and adaptive mindset</li>
          <li>Good teamwork and collaboration abilities</li>
          <li>Leadership experience as a college vice-captain</li>
        </ul>

        {/* Learning & Growth */}
        <h2 className="about-heading">Learning & Growth</h2>
        <p className="about-text">
          I strongly believe in continuous learning and skill development. I
          regularly practice coding, build projects, and explore modern
          development tools to improve my technical abilities. I am open to
          feedback and always eager to enhance both my technical and
          professional skills.
        </p>
      </div>
    </section>
  );
};

export default About;
