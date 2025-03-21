import { useState } from "react";
import TicketPreview from "./TicketPreview";

function TicketForm() {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [error, setError] = useState("");
  const [ticketGenerated, setTicketGenerated] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setError("Only JPG and PNG formats are allowed.");
        return;
      }
      if (file.size > 500 * 1024) {
        setError("File size should not exceed 500KB.");
        return;
      }
      setAvatar(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fullName || !email || !github) {
      setError("All fields are required.");
      return;
    }
    if (!avatar) {
      setError("Avatar required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }
    setError("");
    setTicketGenerated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      {!ticketGenerated ? (
        <div className="bg-opacity-50 p-6 rounded-lg shadow-lg w-full max-w-xl text-white">
          <div className="flex justify-center mb-3">
            <img src="/logo-full.svg" alt="Logo" />
          </div>

          <h1 className="text-xx-large font-bold text-center">Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className="text-sm text-gray-400 mb-3 text-center">Secure your spot at next year’s biggest coding conference.</p>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <div className="">
            <label htmlFor="">Upload Avatar</label>
            <label className="block border-dashed border-2 border-gray-500 p-6 rounded-lg cursor-pointer mb-3 relative">
              {avatar ? (
                <img src={avatar} alt="Avatar Preview" className="w-24 h-24 rounded-full mx-auto" />
              ) : (
                <div className="text-gray-400 text-center">Drag and drop or click to upload</div>
              )}
              <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleFileUpload} />
            </label>

            <label htmlFor="">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 border rounded-md mb-3 text-white" />

            <label htmlFor="">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" className="w-full p-3 border rounded-md mb-3 text-white" />

            <label htmlFor="">Github Username</label>
            <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="@yourusername" className="w-full p-3 border rounded-md mb-3 text-white" />

            <button onClick={handleSubmit} className="w-full bg-orange-500 p-3 rounded-md text-black font-bold hover:bg-orange-600">Generate My Ticket</button>
          </div>
        </div>
      ) : (
        <TicketPreview fullName={fullName} email={email} github={github} avatar={avatar} />
      )}
    </div>
  );
}

export default TicketForm