export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg mb-4">Feel free to reach out to me for collaboration or just to say hi!</p>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="Your Messageg"
          className="border rounded px-3 py-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition"
        >
          Send
        </button>
      </form>
    </main>
  );
}
