import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Waste Management System',
    contactEmail: 'admin@example.com',
    theme: 'light',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const handleSaveSettings = () => {
    // Simpan perubahan (misalnya kirim ke API atau local storage)
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <header className="flex justify-between items-center mb-3 bg-green-700 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Setting</h1>
      </header>
      <form className="space-y-4">
        <div>
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
            Contact Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={handleSaveSettings}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
