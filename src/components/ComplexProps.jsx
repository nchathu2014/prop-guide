import { useState } from "react";
import { useTheme } from "./ThemeToggler";

function UserProfileCard({ user, theme, actions }) {
  
  return (
    <div
      className={`p-6 rounded-xl ${theme?.backgroundColor} ${theme?.textColor} ${theme?.avatarBg} ${theme?.badgeBg} shadow-lg `}
    >
      <div>
        {user.avatar}{" "}
        <span className="font-semibold">
          {user.name} <span className="text-sm">({user.role})</span>
        </span>
        <div>{user.email}</div>
        <div>{user.status}</div>
        <div className={`bg-gray-50 rounded-xl py-1 px-2`}>
          <h3 className="font-bold text-emerald-800">Stats</h3>

          {user.stats && (
            <div>
              {Object.entries(user.stats).map(([key, val]) => (
                <div key={key}>
                  <strong>{key}:</strong> {val}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`${actions.primary.className} py-2 px-3 rounded-sm mt-2 mr-1`}
            >
              {actions.primary.label}
            </button>
          )}

           {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`${actions.secondary.className} py-2 px-3 rounded-sm mt-2 border`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ComplexProps() {
  const [message, setMessage] = useState("");
  const {themeTextColors, themeBgColors} = useTheme()
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <section className={`p-8 shadow-xl rounded-2xl ${themeBgColors}   `}>
      <h2 className={`text-3xl font-bold  mb-5 ${themeTextColors}`}>Complex Props</h2>

      <div>
        <h3 className={`text-xl font-bold mb-5 ${themeTextColors}`}>
          User Profile Cards: <span className="font-normal">{message}</span>
        </h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2  rounded-xl">
          {users?.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </section>
  );
}
