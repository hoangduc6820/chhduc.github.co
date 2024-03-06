import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li><Link to="/users">User Management</Link></li>
                <li><Link to="/activity-log">Activity Log</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
