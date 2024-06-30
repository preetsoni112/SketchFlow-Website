import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(data);
  }, [data]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-green-900 mt-10">
          GitHub Profile
        </h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-10 w-full max-w-md">
          <div className="p-6 flex flex-col items-center">
            <img
              src={profile.avatar_url}
              alt="GitHub Profile"
              className="w-32 h-32 rounded-full shadow-md"
            />
            <h2 className="mt-4 text-3xl font-semibold text-gray-800">
              {profile.name}
            </h2>
            <p className="mt-2 text-xl text-gray-600">@{profile.login}</p>
            <p className="mt-4 text-lg text-gray-600">{profile.bio}</p>
            <p className="mt-4 text-lg text-gray-600">
              Followers: {profile.followers}
            </p>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-900 text-white py-2 px-4 rounded-lg"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubData = async () => {
  const response = await fetch("https://api.github.com/users/Preetsoni112");
  return response.json();
};
