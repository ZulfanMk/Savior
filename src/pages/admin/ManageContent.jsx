import React from 'react';

const ManageContent = () => {
  const contents = [
    { id: 1, title: 'Recycling Tips', category: 'Education', date: '2024-11-20' },
    { id: 2, title: 'Community Cleanup', category: 'Event', date: '2024-11-15' },
    { id: 3, title: 'Waste Management Statistics', category: 'Report', date: '2024-11-10' },
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <header className="flex justify-between items-center bg-green-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Content</h1>
      </header>
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:bg-green-600">
          Add New Content
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content, index) => (
            <tr key={content.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b">{content.title}</td>
              <td className="py-2 px-4 border-b">{content.category}</td>
              <td className="py-2 px-4 border-b text-center">{content.date}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContent;
