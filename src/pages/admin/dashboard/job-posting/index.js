import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [jobPosts, setJobPosts] = useState([]);
  const { token, api } = useAuth();

  const fetchJobPosts = async () => {
    try {
      const response = await api.get("/api/job-posts"); // Use the Axios instance with the token included
      setJobPosts(response.data.length ? response.data : []);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  };
  useEffect(() => {
    if (token) fetchJobPosts();
  }, [token]); // Fetch job posts whenever the token changes

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => router.push("create")}
        >
          Create Job
        </button>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Job Posts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Company</th>
                  <th className="py-2 px-4 border-b">Location</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobPosts?.map((post) => (
                  <tr key={post._id}>
                    <td className="py-2 px-4 border-b">{post.title}</td>
                    <td className="py-2 px-4 border-b">{post.company}</td>
                    <td className="py-2 px-4 border-b">{post.location}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-500 hover:underline">
                        Edit
                      </button>{" "}
                      |
                      <button className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {jobPosts.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No job posts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
