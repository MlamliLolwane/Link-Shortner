import { NavLink } from "react-router";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import { useEffect, useRef, useState } from 'react';
import apiClient from "../../apiClient";

function Home() {
    const canvasRef = useRef(null);
    const buttonRef = useRef(null);
    const [data, setData] = useState("");

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        fetchData(userId);
        // Example data — replace with your dynamic values
    }, []);

    useEffect(() => {
        const months = data.monthlyClicks?.map(click => click.month) || [];
        const clicks = data.monthlyClicks?.map(click => click.count) || [];

        console.log(clicks)

        const chart = new window.Chart(canvasRef.current, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Clicks per Month',
                    data: clicks,
                    backgroundColor: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: 0,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Clicks Overview',
                    },
                    legend: {
                        display: true,
                        position: 'top',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });

        // Cleanup on unmount
        return () => chart.destroy();
    }, [data]);

    useEffect(() => {
        const tooltipTrigger = new window.bootstrap.Tooltip(buttonRef.current);

        // Optional cleanup to avoid memory leaks
        return () => {
            tooltipTrigger.dispose();
        };
    }, []);

    async function fetchData(userId) {
        const response = await apiClient.get(`dashboard/${userId}`);

        setData(response.data);
    }

    return (
        <>
            <AuthenticatedNavbar />
            <main>
                <div className="container m-5 mx-auto">
                    <h4 className="pb-3">Dashboard</h4>
                    <div className="row mb-5">
                        <div className="col-md">
                            <NavLink to="/authenticated/links">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Links</h5>
                                        <h3 className="card-text turquoise-font">{data.totalLinks ?? "loading..."}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md">
                            <NavLink data-bs-toggle="tooltip" ref={buttonRef}
                                data-bs-placement="top"
                                title="Item not clickable!">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Clicks Generated</h5>
                                        <h3 className="card-text turquoise-font">{data.totalClicks ?? "loading..."}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md">
                            <NavLink to="/authenticated/referrers">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Referrers</h5>
                                        <h3 className="card-text turquoise-font">{data.uniqueReferrers ?? "loading..."}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <canvas ref={canvasRef}></canvas>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;