import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardCard from "./Common/DashboardCard";
import Heading from "./Common/Heading";
import { IoBag } from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import { IoNewspaperOutline } from "react-icons/io5";

const BLOGS_MONTHLY_TARGET = 1; // Monthly Target for each category
const SERVICES_MONTHLY_TARGET = 2; // Monthly Target for each category
const PACKAGES_MONTHLY_TARGET = 3; // Monthly Target for each category

const AdminDashboard = () => {
    const blogsData = useSelector((state) => state.blogs.blogs);
    const servicesData = useSelector((state) => state.services.services);
    const packagesData = useSelector((state) => state.packages.packages);

    const [selectedMonth, setSelectedMonth] = useState("");
    const [filteredCounts, setFilteredCounts] = useState({
        services: servicesData.length,
        packages: packagesData.length,
        blogs: blogsData.length,
    });

    // Function to filter data based on selected month
    const getFilteredCounts = (selectedMonth) => {
        if (!selectedMonth) {
            return {
                services: servicesData.length,
                packages: packagesData.length,
                blogs: blogsData.length,
            };
        }

        const [year, month] = selectedMonth.split("-");

        const filterByMonth = (items) =>
            items?.filter((item) => {
                const itemDate = new Date(item.createdAt);
                return (
                    itemDate.getFullYear().toString() === year &&
                    (itemDate.getMonth() + 1).toString().padStart(2, "0") ===
                        month
                );
            }).length;

        return {
            services: filterByMonth(servicesData),
            packages: filterByMonth(packagesData),
            blogs: filterByMonth(blogsData),
        };
    };

    // Function to calculate percentage progress
    const calculatePercentage = (count, MONTHLY_TARGET) => {
        return ((count / MONTHLY_TARGET) * 100).toFixed(1);
    };

    // Handle Month Change
    const handleMonthChange = (event) => {
        const month = event.target.value;
        setSelectedMonth(month);
        const counts = getFilteredCounts(month);
        setFilteredCounts(counts);
    };

    return (
        <div>
            <Heading text={"Dashboard"} />

            {/* Month Filter */}
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2 text-gray-700">
                    Filter by Month:
                </label>
                <input
                    type="month"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="border p-2 rounded-md w-full"
                />
            </div>

            {/* Admin Dashboard Cards */}
            <div className="grid grid-cols-3 gap-2 mt-2">
                <DashboardCard
                    Icon={<IoBag />}
                    heading={"Total Services"}
                    iconColor={"blue"}
                    count={filteredCounts.services}
                    growth={filteredCounts.services >= SERVICES_MONTHLY_TARGET}
                    growthData={`${calculatePercentage(
                        filteredCounts.services,
                        SERVICES_MONTHLY_TARGET
                    )}%`}
                />
                <DashboardCard
                    Icon={<TfiPackage />}
                    heading={"Total Packages"}
                    iconColor={"green"}
                    count={filteredCounts.packages}
                    growth={filteredCounts.packages >= PACKAGES_MONTHLY_TARGET}
                    growthData={`${calculatePercentage(
                        filteredCounts.packages,
                        PACKAGES_MONTHLY_TARGET
                    )}%`}
                />
                <DashboardCard
                    Icon={<IoNewspaperOutline />}
                    heading={"Total Blogs"}
                    iconColor={"red"}
                    count={filteredCounts.blogs}
                    growth={filteredCounts.blogs >= BLOGS_MONTHLY_TARGET}
                    growthData={`${calculatePercentage(
                        filteredCounts.blogs,
                        BLOGS_MONTHLY_TARGET
                    )}%`}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
