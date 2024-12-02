import React from 'react';

const ManageUsers = () => {
  const users = [
    { id: 1, name: 'Andi', address: 'Jl. Bandung No. 1', email: 'andi@example.com', gender: 'Laki-laki' },
    { id: 2, name: 'Siti', address: 'Jl. Surabaya No. 2', email: 'siti@example.com', gender: 'Perempuan' },
    { id: 3, name: 'Budi', address: 'Jl. Jakarta No. 3', email: 'budi@example.com', gender: 'Laki-laki' },
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <header className="flex justify-between items-center mb-3 bg-green-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Users</h1>
      </header>
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
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

export default ManageUsers;
