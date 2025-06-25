export default function Projects() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Project One</h2>
          <p className="text-base">A brief description of your first project. Highlight the tech stack and your role.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Project Two</h2>
          <p className="text-base">A brief description of your second project. Mention any challenges and solutions.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </main>
  );
}
