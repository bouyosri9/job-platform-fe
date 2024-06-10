import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import cities from "../../../../../jsons/cities.json" // Update the path accordingly


export default function CreateJob() {
  const { api } = useAuth(); // Access the Axios instance from the context

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/job-posts`,
        formData
      );
      if (response.status === 201) {
        // Job post created successfully
        // Redirect or show success message
      }
    } catch (error) {
      console.error("Error creating job post:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Create Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          required
        />
        <div>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
            required
          >
            <option value="">Select Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
}
