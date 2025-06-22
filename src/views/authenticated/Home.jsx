import { NavLink } from "react-router";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import { useEffect, useRef } from 'react';

function Home() {
    const canvasRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Example data — replace with your dynamic values
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const clicks = [120, 90, 150, 80, 200, 170];

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
    }, []);

    useEffect(() => {
        const tooltipTrigger = new window.bootstrap.Tooltip(buttonRef.current);

        // Optional cleanup to avoid memory leaks
        return () => {
            tooltipTrigger.dispose();
        };
    }, []);

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
                                        <h3 className="card-text turquoise-font">5</h3>
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
                                        <h3 className="card-text turquoise-font">78</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md">
                            <NavLink to="/authenticated/referrers">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Referrers</h5>
                                        <h3 className="card-text turquoise-font">7</h3>
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