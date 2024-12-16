const About = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-10 my-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        About This Project
      </h1>

      <p className="text-gray-700 text-lg leading-7 mb-6">
        Welcome to the <strong>Notes Application</strong>, a fully functional,
        responsive web application built to manage your personal notes
        efficiently. This project demonstrates modern web development practices,
        combining a clean design, robust backend, and advanced frontend
        techniques.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        🛠 Features
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">

        <li>Create, read, update, and delete notes (CRUD functionality).</li>

        <li>
          Rich Text Editor for creating and editing notes using{" "}
          <strong>Draft.js</strong>.
        </li>

        <li>Search and filter notes for better accessibility.</li>

        <li>
          Responsive design using <strong>Tailwind CSS</strong>.
        </li>

        <li>
          Dynamic routing and API integration with <strong>Next.js</strong> and{" "}
          <strong>Express.js</strong>.
        </li>

        <li>MySQL database for efficient data storage.</li>

        <li>
          Interactive and user-friendly modals for deleting notes with
          animations.
        </li>

        <li>
          Notifications for success and error messages using{" "}
          <strong>React Toastify</strong>.
        </li>

        <li>
          Skeleton loading screens for better user experience during data
          fetching.
        </li>

      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        🚀 Technologies Used
      </h2>

      <div className="grid grid-cols-2 gap-4 text-gray-700 text-lg">

        <div>
          <strong>Frontend:</strong>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <strong>Backend:</strong>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
          </ul>
        </div>

      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        📂 File Structure
      </h2>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        The project is structured for scalability and maintainability, with
        separate folders for components, pages, backend models, controllers, and
        routes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        ✨ What I Learned
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
        <li>Setting up and managing a full-stack web application.</li>
        <li>
          Building RESTful APIs with Express.js and integrating them with a
          frontend.
        </li>
        <li>
          Implementing advanced frontend features like modals and skeleton
          loaders.
        </li>
        <li>Handling database operations with MySQL.</li>
        <li>
          Using Tailwind CSS for creating responsive and visually appealing
          designs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        🔗 GitHub Repository
      </h2>
      
      <p className="text-gray-700 text-lg leading-7">
        You can find the complete source code for this project on my GitHub
        profile. Check it out here:

        <br />

        <a
          href="https://github.com/Mo-Ibra/mern-notes-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Notes App GitHub Repository
        </a>
        .
      </p>
    </div>
  );
};

export default About;