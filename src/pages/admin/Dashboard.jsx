import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-green-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="mt-6">
        {/* Summary Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <img
                src="/src/assets/images/icons/tree.svg"
                alt="Tree Icon"
                className="w-8 h-8"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">total transaction amount</h2>
              <p className="text-green-600 text-2xl font-bold">Rp 1.234000</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <img
                src="/src/assets/images/icons/recycle.svg"
                alt="Recycle Icon"
                className="w-8 h-8"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Recycled Waste</h2>
              <p className="text-green-600 text-2xl font-bold">3,567 kg</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <img
                src="/src/assets/images/icons/community.svg"
                alt="Community Icon"
                className="w-8 h-8"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Active Communities</h2>
              <p className="text-green-600 text-2xl font-bold">48</p>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-green-700">Recent Activities</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-between">
              <span>Waste Recycling Initiative - Surabaya</span>
              <span className="text-green-500">2 days ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Waste Recycling Initiative - Surabaya</span>
              <span className="text-green-500">5 days ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Waste Recycling Initiative - Surabaya</span>
              <span className="text-green-500">1 week ago</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
