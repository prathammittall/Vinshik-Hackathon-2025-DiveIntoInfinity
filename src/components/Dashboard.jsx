import React, { useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { TrendingUp, TrendingDown } from 'lucide-react'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function Dashboard({ isSidebarOpen = true }) {
    const [dashboardData] = useState([
        {
            id: 1,
            title: "Active Jobs",
            value: "43.7k",
            percentage: "-12.2%",
            trend: "down",
            color: "blue",
            bars: [8, 14, 10, 10, 13, 10, 10]
        },
        {
            id: 2,
            title: "Jobs In Progress",
            value: "92.3k",
            percentage: "-31.1%",
            trend: "down",
            color: "orange",
            bars: [7, 13, 8, 8, 12, 7, 8]
        },
        {
            id: 3,
            title: "Finished Jobs",
            value: "66.3k",
            percentage: "+3.3%",
            trend: "up",
            color: "green",
            bars: [7, 13, 8, 8, 12, 7, 8]
        },
        {
            id: 4,
            title: "New Leads",
            value: "92.3k",
            percentage: "+31.1%",
            trend: "up",
            color: "purple",
            bars: [7, 13, 8, 8, 12, 8, 10]
        }
    ]);

    const getColorClass = (color) => {
        switch (color) {
            case 'blue': return 'bg-blue-500';
            case 'orange': return 'bg-orange-500';
            case 'green': return 'bg-green-500';
            case 'purple': return 'bg-purple-500';
            default: return 'bg-gray-500';
        }
    };

    const getChartColor = (color) => {
        switch (color) {
            case 'blue': return 'rgba(59, 130, 246, 0.8)';
            case 'orange': return 'rgba(249, 115, 22, 0.8)';
            case 'green': return 'rgba(34, 197, 94, 0.8)';
            case 'purple': return 'rgba(147, 51, 234, 0.8)';
            default: return 'rgba(107, 114, 128, 0.8)';
        }
    };

    const getTrendIcon = (trend, id) => {
        if (trend === 'up') {
            return <TrendingUp className="w-6 h-6 mr-2 p-1.5 bg-green-100 rounded-full" />;
        } else {
            // Special case: first card (Active Jobs) shows decreasing trend in green
            if (id === 1) {
                return <TrendingDown className="w-6 h-6 mr-2 p-1.5 bg-green-100 rounded-full" />;
            } else {
                return <TrendingDown className="w-6 h-6 mr-2 p-1.5 bg-red-100 rounded-full" />;
            }
        }
    };

    const DashboardCard = ({ data }) => {
        const chartData = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    data: data.bars,
                    backgroundColor: getChartColor(data.color),
                    borderColor: getChartColor(data.color).replace('0.8', '1'),
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false,
                },
            ],
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        display: false,
                    },
                    beginAtZero: true,
                },
            },
            elements: {
                bar: {
                    borderWidth: 0,
                },
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                },
            },
            datasets: {
                bar: {
                    barThickness: 4,
                    maxBarThickness: 8,
                    categoryPercentage: 0.6,
                    barPercentage: 0.8,
                },
            },
        };

        return (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">{data.title}</h3>
                    <div className={`flex items-center text-sm ${data.id === 1 ? 'text-green-600' : data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {getTrendIcon(data.trend, data.id)}
                        <span className="font-medium">{data.percentage}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-gray-900">{data.value}</div>
                    <div className="h-10 w-14">
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-16'} p-8 mt-16`}>
            {/* Top Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back, Julie 👋</h1>
                    <p className="text-gray-600 text-lg">Here's what you need to focus on today</p>
                </div>

                <div className="flex items-center space-x-4">


                </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardData.map((data) => (
                    <DashboardCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard
