import React from 'react'

function App() {
    return (
        <div className="flex h-screen bg-white">
            {/* Left Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 p-6">
                {/* Logo */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">
                        <span className="text-teal-600">Vin</span>
                        <span className="text-black">Shik</span>
                    </h1>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-2">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-blue-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Home
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Calendar
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Map
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Clients
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Jobs
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Quotes
                    </a>

                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        My Services
                    </a>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8">
                {/* Top Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back, Julie 👋</h1>
                        <p className="text-gray-600 text-lg">Here's what you need to focus on today</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>

                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>

                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Active Jobs Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-medium text-gray-600">Active Jobs</h3>
                            <div className="flex items-center text-green-600 text-sm">
                                <span className="font-medium">+12.2%</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">43.7k</div>
                        <div className="flex items-end space-x-1 h-16">
                            <div className="w-3 h-8 bg-blue-500 rounded-sm"></div>
                            <div className="w-3 h-10 bg-blue-500 rounded-sm"></div>
                            <div className="w-3 h-12 bg-blue-500 rounded-sm"></div>
                            <div className="w-3 h-14 bg-blue-500 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Jobs In Progress Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-medium text-gray-600">Jobs In Progress</h3>
                            <div className="flex items-center text-red-600 text-sm">
                                <span className="font-medium">-31.1%</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L12 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">92.3k</div>
                        <div className="flex items-end space-x-1 h-16">
                            <div className="w-3 h-6 bg-orange-500 rounded-sm"></div>
                            <div className="w-3 h-10 bg-orange-500 rounded-sm"></div>
                            <div className="w-3 h-8 bg-orange-500 rounded-sm"></div>
                            <div className="w-3 h-12 bg-orange-500 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Finished Jobs Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-medium text-gray-600">Finished Jobs</h3>
                            <div className="flex items-center text-green-600 text-sm">
                                <span className="font-medium">+3.3%</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">66.3k</div>
                        <div className="flex items-end space-x-1 h-16">
                            <div className="w-3 h-8 bg-green-500 rounded-sm"></div>
                            <div className="w-3 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-3 h-10 bg-green-500 rounded-sm"></div>
                            <div className="w-3 h-7 bg-green-500 rounded-sm"></div>
                        </div>
                    </div>

                    {/* New Leads Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-sm font-medium text-gray-600">New Leads</h3>
                            <div className="flex items-center text-green-600 text-sm">
                                <span className="font-medium">+31.1%</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-6">92.3k</div>
                        <div className="flex items-end space-x-1 h-16">
                            <div className="w-3 h-10 bg-purple-500 rounded-sm"></div>
                            <div className="w-3 h-8 bg-purple-500 rounded-sm"></div>
                            <div className="w-3 h-12 bg-purple-500 rounded-sm"></div>
                            <div className="w-3 h-9 bg-purple-500 rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
