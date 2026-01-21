// ============================================
// FILMFLOW360 - ENTERPRISE PRODUCTION PLATFORM
// ============================================

// Company Information
const companyInfo = {
    name: 'FilmFlow Productions India Pvt. Ltd.',
    shortName: 'FilmFlow Pro',
    founders: [
        { name: 'Mr. Omkar Tanaji Gurav', title: 'Founder & CEO' },
        { name: 'Mr. Arnav Lai', title: 'Co-Founder & CTO' }
    ],
    phone: '+91 9112128150',
    email: 'support@filmflow.com',
    location: 'Bangalore, Karnataka, India',
    tagline: 'Enterprise Film Production Management System'
};

// Login Credentials (email: password) - 10 users as per spec
const loginCredentials = {
    'rajesh@filmflow.com': { password: 'FilmFlow@123', name: 'Rajesh Kumar', department: 'Producer', role: 'Admin', access: 'Full' },
    'priya@filmflow.com': { password: 'FilmFlow@123', name: 'Priya Sharma', department: 'Director', role: 'Admin', access: 'Full' },
    'shreya@filmflow.com': { password: 'FilmFlow@123', name: 'Shreya Gupta', department: 'Production Manager', role: 'Admin', access: 'Manage' },
    'arjun@filmflow.com': { password: 'FilmFlow@123', name: 'Arjun Verma', department: 'Assistant Director', role: 'Team Member', access: 'Edit' },
    'amit@filmflow.com': { password: 'FilmFlow@123', name: 'Amit Patel', department: 'DOP/Cinematographer', role: 'Team Member', access: 'Edit' },
    'neha@filmflow.com': { password: 'FilmFlow@123', name: 'Neha Singh', department: 'Editor', role: 'Team Member', access: 'Edit' },
    'vikram@filmflow.com': { password: 'FilmFlow@123', name: 'Vikram Reddy', department: 'Sound Designer', role: 'Team Member', access: 'Edit' },
    'divya@filmflow.com': { password: 'FilmFlow@123', name: 'Divya Nair', department: 'VFX Artist', role: 'Team Member', access: 'Edit' },
    'admin@filmflow.com': { password: 'Admin@123', name: 'System Admin', department: 'Admin', role: 'Admin', access: 'Full' },
    'client@filmflow.com': { password: 'Client@123', name: 'Client Viewer', department: 'Client/Viewer', role: 'Viewer', access: 'View' }
};

// Sample Video Library (50+ videos)
const videoLibrary = [
    { id: 'VID001', title: 'Journey - Final Cut', project: 'Journey', duration: '12:42', quality: '4K', type: 'Final Cut', thumbnail: '🎬' },
    { id: 'VID002', title: 'Journey - Rough Cut', project: 'Journey', duration: '12:45', quality: '4K', type: 'Rough Cut', thumbnail: '🎬' },
    { id: 'VID003', title: 'Journey - Behind The Scenes', project: 'Journey', duration: '8:30', quality: '1080p', type: 'BTS', thumbnail: '🎥' },
    { id: 'VID004', title: 'Shadows - Final Cut', project: 'Shadows', duration: '14:20', quality: '4K', type: 'Final Cut', thumbnail: '🎬' },
    { id: 'VID005', title: 'Shadows - Color Grading Demo', project: 'Shadows', duration: '5:15', quality: '4K', type: 'Technical', thumbnail: '🎨' },
    { id: 'VID006', title: 'Hope - Final Cut', project: 'Hope', duration: '13:50', quality: '4K', type: 'Final Cut', thumbnail: '🎬' },
    { id: 'VID007', title: 'Hope - Action Sequences', project: 'Hope', duration: '6:40', quality: '1080p', type: 'Raw Footage', thumbnail: '🎥' },
    { id: 'VID008', title: 'Echo - Final Cut', project: 'Echo', duration: '11:30', quality: '4K', type: 'Final Cut', thumbnail: '🎬' },
    { id: 'VID009', title: 'Echo - Sound Design Breakdown', project: 'Echo', duration: '9:10', quality: '1080p', type: 'Technical', thumbnail: '🔊' },
    { id: 'VID010', title: 'Silence - Final Cut', project: 'Silence', duration: '15:25', quality: '4K', type: 'Final Cut', thumbnail: '🎬' }
];

// Generate more videos to reach 50+
for (let i = 11; i <= 55; i++) {
    const projects = ['Journey', 'Shadows', 'Hope', 'Echo', 'Silence', 'Dreams', 'Rhythm', 'Vision', 'Pulse', 'Moments'];
    const types = ['Raw Footage', 'Dailies', 'Rough Cut', 'BTS', 'Technical'];
    const qualities = ['4K', '1080p', '720p'];
    videoLibrary.push({
        id: `VID${String(i).padStart(3, '0')}`,
        title: `${projects[i % projects.length]} - ${types[i % types.length]} ${Math.floor(i / 10) + 1}`,
        project: projects[i % projects.length],
        duration: `${Math.floor(Math.random() * 15) + 5}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        quality: qualities[i % qualities.length],
        type: types[i % types.length],
        thumbnail: ['🎬', '🎥', '🎨', '🔊', '📹'][i % 5]
    });
}

// File Storage
const fileStorage = [
    { id: 'FILE001', name: 'Script_Final_Journey.pdf', size: '2.4 MB', type: 'PDF', icon: '📄', date: '2024-11-05' },
    { id: 'FILE002', name: 'Storyboard_Shadows.psd', size: '156 MB', type: 'PSD', icon: '🎨', date: '2024-11-04' },
    { id: 'FILE003', name: 'Audio_Mix_Hope.wav', size: '489 MB', type: 'Audio', icon: '🎵', date: '2024-11-03' },
    { id: 'FILE004', name: 'Budget_Q4_2024.xlsx', size: '1.2 MB', type: 'Excel', icon: '📊', date: '2024-11-02' },
    { id: 'FILE005', name: 'Contract_Actor_Main.docx', size: '845 KB', type: 'Word', icon: '📝', date: '2024-11-01' },
    { id: 'FILE006', name: 'Location_Photos.zip', size: '234 MB', type: 'Archive', icon: '🗜️', date: '2024-10-31' },
    { id: 'FILE007', name: 'Call_Sheet_Day12.pdf', size: '567 KB', type: 'PDF', icon: '📄', date: '2024-10-30' },
    { id: 'FILE008', name: 'VFX_Assets_Package.zip', size: '1.8 GB', type: 'Archive', icon: '🗜️', date: '2024-10-29' }
];

// Token System
let tokenCounter = 3;
const tokens = [
    { id: 'TKN-2025-001', title: 'Equipment malfunction', description: 'Camera #3 lens auto-focus not working', severity: 'High', category: 'Equipment', project: 'Awakening', status: 'Open', assignedTo: 'Gaffer', createdBy: 'Director', createdAt: '2025-11-06 08:30' },
    { id: 'TKN-2025-002', title: 'Schedule conflict', description: 'Actor not available on planned shoot dates', severity: 'Medium', category: 'Schedule', project: 'Fragments', status: 'In Progress', assignedTo: 'Production Manager', createdBy: 'Producer', createdAt: '2025-11-05 14:20' }
];

// Notifications System
const notifications = [
    { id: 'NOT001', text: 'Welcome to FilmFlow360! You have 3 pending tasks.', time: 'Just now', read: false, type: 'info' },
    { id: 'NOT002', text: 'Director updated timeline for Awakening project', time: '5 mins ago', read: false, type: 'update' },
    { id: 'NOT003', text: 'New token raised: Equipment malfunction', time: '1 hour ago', read: true, type: 'token' }
];

// Data
// 7 Completed Projects as per spec
const completedProjects = [
    { id: 'PROJ001', name: 'Journey', theme: 'Comedy', start_date: '2024-04-24', estimated_days: 56, actual_days: 84, delay_days: 28, status: 'Completed', budget: 775506, budget_spent: 920000, team_count: 8, issues_raised: 3, issues_resolved: 3, delay_status: 'red', progress: 100 },
    { id: 'PROJ002', name: 'Shadows', theme: 'Sci-Fi', start_date: '2024-06-23', estimated_days: 53, actual_days: 61, delay_days: 8, status: 'Completed', budget: 688216, budget_spent: 702000, team_count: 7, issues_raised: 2, issues_resolved: 2, delay_status: 'yellow', progress: 100 },
    { id: 'PROJ003', name: 'Hope', theme: 'Thriller', start_date: '2024-05-24', estimated_days: 54, actual_days: 83, delay_days: 29, status: 'Completed', budget: 785126, budget_spent: 910000, team_count: 9, issues_raised: 5, issues_resolved: 5, delay_status: 'red', progress: 100 },
    { id: 'PROJ004', name: 'Echo', theme: 'Thriller', start_date: '2024-05-22', estimated_days: 50, actual_days: 61, delay_days: 11, status: 'Completed', budget: 987628, budget_spent: 1050000, team_count: 8, issues_raised: 3, issues_resolved: 3, delay_status: 'yellow', progress: 100 },
    { id: 'PROJ005', name: 'Silence', theme: 'Sci-Fi', start_date: '2024-07-03', estimated_days: 57, actual_days: 80, delay_days: 23, status: 'Completed', budget: 676838, budget_spent: 790000, team_count: 7, issues_raised: 4, issues_resolved: 4, delay_status: 'red', progress: 100 },
    { id: 'PROJ006', name: 'Dreams', theme: 'Drama', start_date: '2024-01-24', estimated_days: 58, actual_days: 87, delay_days: 29, status: 'Completed', budget: 772262, budget_spent: 890000, team_count: 10, issues_raised: 6, issues_resolved: 6, delay_status: 'red', progress: 100 },
    { id: 'PROJ007', name: 'Rhythm', theme: 'Thriller', start_date: '2024-05-19', estimated_days: 47, actual_days: 61, delay_days: 14, status: 'Completed', budget: 1269380, budget_spent: 1350000, team_count: 8, issues_raised: 3, issues_resolved: 3, delay_status: 'yellow', progress: 100 }
];

// 3 Ongoing Projects as per spec
const ongoingProjects = [
    { id: 'PROJ008', name: 'Vision', theme: 'Comedy', start_date: '2024-04-19', estimated_days: 48, days_elapsed: 32, remaining_days: 16, current_stage: 'Post-Production', progress: 68, status: 'In Progress', projected_delay: 0, delay_status: 'green', budget: 593262, budget_spent: 520000, team_count: 8, issues_open: 2, issues_resolved: 1 },
    { id: 'PROJ009', name: 'Pulse', theme: 'Sci-Fi', start_date: '2024-07-22', estimated_days: 46, days_elapsed: 28, remaining_days: 18, current_stage: 'Production', progress: 45, status: 'In Progress', projected_delay: 3, delay_status: 'yellow', budget: 733063, budget_spent: 650000, team_count: 7, issues_open: 3, issues_resolved: 1 },
    { id: 'PROJ010', name: 'Moments', theme: 'Sci-Fi', start_date: '2024-06-18', estimated_days: 47, days_elapsed: 25, remaining_days: 22, current_stage: 'Production', progress: 55, status: 'In Progress', projected_delay: 5, delay_status: 'red', budget: 1010287, budget_spent: 760000, team_count: 9, issues_open: 4, issues_resolved: 2 }
];

const allProjects = [...completedProjects, ...ongoingProjects];

const teamMembers = [
    { user_id: 'USR001', name: 'Rajesh Kumar', department: 'Producer', role: 'Admin', access_level: 'Full', login_id: 'rajesh@filmflow.com', phone: '+91 98765 43210' },
    { user_id: 'USR002', name: 'Priya Sharma', department: 'Director', role: 'Admin', access_level: 'Manage', login_id: 'priya@filmflow.com', phone: '+91 98765 43211' },
    { user_id: 'USR003', name: 'Shreya Gupta', department: 'Production Manager', role: 'Admin', access_level: 'Manage', login_id: 'shreya@filmflow.com', phone: '+91 98765 43212' },
    { user_id: 'USR004', name: 'Arjun Verma', department: 'Assistant Director', role: 'Team Member', access_level: 'Edit', login_id: 'arjun@filmflow.com', phone: '+91 98765 43213' },
    { user_id: 'USR005', name: 'Amit Patel', department: 'DOP/Cinematographer', role: 'Team Member', access_level: 'Edit', login_id: 'amit@filmflow.com', phone: '+91 98765 43214' },
    { user_id: 'USR006', name: 'Neha Singh', department: 'Editor', role: 'Team Member', access_level: 'Edit', login_id: 'neha@filmflow.com', phone: '+91 98765 43215' },
    { user_id: 'USR007', name: 'Vikram Reddy', department: 'Sound Designer', role: 'Team Member', access_level: 'Edit', login_id: 'vikram@filmflow.com', phone: '+91 98765 43216' },
    { user_id: 'USR008', name: 'Divya Nair', department: 'VFX Artist', role: 'Team Member', access_level: 'Edit', login_id: 'divya@filmflow.com', phone: '+91 98765 43217' },
    { user_id: 'USR009', name: 'System Admin', department: 'Admin', role: 'Admin', access_level: 'Full', login_id: 'admin@filmflow.com', phone: '+91 98765 43218' },
    { user_id: 'USR010', name: 'Client Viewer', department: 'Client/Viewer', role: 'Viewer', access_level: 'View', login_id: 'client@filmflow.com', phone: '+91 98765 43219' }
];

const bottlenecks = [
    { area: 'Post-Production Editing', frequency: 90, impact: 10, avg_delay: 5, root_cause: 'Complex VFX, multiple revisions, software issues' },
    { area: 'Script Development', frequency: 85, impact: 8, avg_delay: 3, root_cause: 'Multiple revisions, unclear vision' },
    { area: 'Shooting Coordination', frequency: 75, impact: 9, avg_delay: 4, root_cause: 'Weather, location permits, crew scheduling' },
    { area: 'Casting Process', frequency: 70, impact: 7, avg_delay: 2, root_cause: 'Actor availability conflicts, audition delays' },
    { area: 'Client Revisions', frequency: 65, impact: 7, avg_delay: 3, root_cause: 'Communication gaps, changing requirements' },
    { area: 'Equipment Delays', frequency: 60, impact: 6, avg_delay: 1.5, root_cause: 'Equipment booking conflicts, technical issues' },
    { area: 'Resource Availability', frequency: 55, impact: 6, avg_delay: 2, root_cause: 'Budget constraints, resource allocation' }
];

const productionPhases = {
    'Pre-Production': ['Script Development', 'Storyboarding', 'Casting', 'Location Scouting', 'Equipment Arrangement', 'Rehearsals', 'Pre-Production Meeting'],
    'Production': ['Principal Photography Day 1', 'Principal Photography Day 2', 'Principal Photography Day 3', 'Additional Shots', 'B-Roll Capture'],
    'Post-Production': ['Video Editing', 'Sound Design & Music', 'Color Grading', 'VFX & Graphics', 'Final Export & Delivery']
};

// Sample issues data
const sampleIssues = [
    { id: 'ISS001', project: 'Journey', description: 'Camera malfunction during shoot', severity: 'High', department: 'Cinematographer', status: 'Resolved', resolution_time: '2 hours' },
    { id: 'ISS002', project: 'Shadows', description: 'Actor unavailable for reshoot', severity: 'Critical', department: 'Production Manager', status: 'Resolved', resolution_time: '1 day' },
    { id: 'ISS003', project: 'Hope', description: 'Audio sync issues', severity: 'Medium', department: 'Sound Designer', status: 'Resolved', resolution_time: '4 hours' },
    { id: 'ISS004', project: 'Echo', description: 'Color grading software crash', severity: 'High', department: 'Editor', status: 'Resolved', resolution_time: '3 hours' },
    { id: 'ISS005', project: 'Silence', description: 'Location permit delay', severity: 'Critical', department: 'Production Manager', status: 'Resolved', resolution_time: '2 days' },
    { id: 'ISS006', project: 'Awakening', description: 'VFX rendering taking longer', severity: 'Medium', department: 'Editor', status: 'In Progress', resolution_time: '-' },
    { id: 'ISS007', project: 'Fragments', description: 'Script revision needed', severity: 'Low', department: 'Director', status: 'In Progress', resolution_time: '-' },
    { id: 'ISS008', project: 'Essence', description: 'Equipment booking conflict', severity: 'Medium', department: 'Gaffer', status: 'In Progress', resolution_time: '-' }
];

// Current user state
let currentUser = null;
let isLoggedIn = false;

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show target page
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(`${targetPage}-page`).classList.add('active');

            // Load page content if needed
            if (targetPage === 'projects') {
                renderProjects('all');
            } else if (targetPage === 'bottlenecks') {
                renderBottlenecks();
            } else if (targetPage === 'team') {
                renderTeam();
            } else if (targetPage === 'reports') {
                renderReports();
            } else if (targetPage === 'issues') {
                renderIssues();
            } else if (targetPage === 'tasks') {
                renderKanbanBoard();
            } else if (targetPage === 'calendar') {
                renderCalendar();
            } else if (targetPage === 'chat') {
                renderChat();
            } else if (targetPage === 'documents') {
                renderDocuments();
            } else if (targetPage === 'analytics') {
                renderAnalytics();
            }
        });
    });
}

// Render Projects
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    let projects = [];

    if (filter === 'all') {
        projects = allProjects;
    } else if (filter === 'completed') {
        projects = completedProjects;
    } else if (filter === 'ongoing') {
        projects = ongoingProjects;
    }

    grid.innerHTML = projects.map(project => {
        const isOngoing = project.status === 'In Progress';
        const delayColor = project.delay_status === 'red' ? '#ef4444' : project.delay_status === 'yellow' ? '#f59e0b' : '#10b981';
        
        return `
        <div class="project-card" onclick="showProjectDetail('${project.id}')">
            <div class="project-header">
                <div>
                    <div class="project-title">${project.name}</div>
                    <div class="project-id">${project.id} • ${project.theme}</div>
                </div>
                <span class="status-badge ${isOngoing ? 'ongoing' : 'completed'}">${project.status}</span>
            </div>
            <div class="project-stats">
                <div class="stat">
                    <span class="stat-label">${isOngoing ? 'Allocated' : 'Budget'}</span>
                    <span class="stat-value">₹${project.budget.toLocaleString()}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">${isOngoing ? 'Spent' : 'Actual Spent'}</span>
                    <span class="stat-value" style="color: ${project.budget_spent > project.budget ? '#ef4444' : '#10b981'}">₹${project.budget_spent.toLocaleString()}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Team</span>
                    <span class="stat-value">${project.team_count} members</span>
                </div>
                ${isOngoing ? `
                    <div class="stat">
                        <span class="stat-label">Progress</span>
                        <span class="stat-value" style="color: ${delayColor}">${project.progress}%</span>
                    </div>
                ` : `
                    <div class="stat">
                        <span class="stat-label">Delay</span>
                        <span class="stat-value" style="color: ${delayColor}">+${project.delay_days} days</span>
                    </div>
                `}
            </div>
            ${isOngoing ? `
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%; background: ${delayColor}"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.85rem; color: #999;">
                    <span>Stage: ${project.current_stage}</span>
                    <span style="color: ${delayColor}">${project.remaining_days} days left</span>
                </div>
            ` : `
                <div class="delay-indicator" style="color: ${delayColor}; margin-top: 0.5rem;">
                    ${project.delay_status === 'red' ? '🔴' : project.delay_status === 'yellow' ? '🟡' : '🟢'} 
                    ${project.estimated_days} est → ${project.actual_days} actual (${Math.round(project.delay_days/project.estimated_days*100)}% overrun)
                </div>
            `}
            <div style="margin-top: 0.75rem; font-size: 0.85rem; color: #999;">
                Issues: ${project.issues_resolved || 0} resolved${isOngoing ? `, ${project.issues_open || 0} open` : ` / ${project.issues_raised} total`}
            </div>
        </div>
    `;
    }).join('');
}

// Show Project Detail
function showProjectDetail(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('projectDetailTitle').textContent = project.name;
    const content = document.getElementById('projectDetailContent');

    const isOngoing = project.status === 'In Progress';

    content.innerHTML = `
        <div class="project-detail-header">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2>${project.name}</h2>
                    <p style="color: #999; margin-top: 0.5rem;">${project.theme} • ${project.id}</p>
                </div>
                <span class="status-badge ${project.status.toLowerCase()}" style="font-size: 1rem; padding: 0.5rem 1rem;">${project.status}</span>
            </div>
            
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Budget</div>
                    <div class="detail-value">₹${project.budget.toLocaleString()}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Start Date</div>
                    <div class="detail-value" style="font-size: 1.1rem;">${formatDate(project.start_date)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">${isOngoing ? 'Progress' : 'Completion'}</div>
                    <div class="detail-value">${isOngoing ? project.progress + '%' : '100%'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Issues Resolved</div>
                    <div class="detail-value">${project.issues_resolved}/${project.issues_raised}</div>
                </div>
            </div>

            ${isOngoing ? `
                <div style="margin-top: 2rem;">
                    <div class="stat-label">Current Stage: <strong style="color: #06b6d4;">${project.current_stage}</strong></div>
                    <div class="progress-bar" style="margin-top: 1rem; height: 12px;">
                        <div class="progress-fill" style="width: ${project.progress}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.85rem; color: #666;">
                        <span>Days Elapsed: ${project.days_elapsed}</span>
                        <span>Estimated Total: ${project.estimated_days} days</span>
                    </div>
                </div>
            ` : `
                <div class="timeline-comparison">
                    <div class="timeline-bar">
                        <div class="timeline-label">Estimated Timeline</div>
                        <div class="timeline-visual">
                            <div class="timeline-fill estimated" style="width: ${(project.estimated_days / project.actual_days) * 100}%">
                                ${project.estimated_days} days
                            </div>
                        </div>
                    </div>
                    <div class="timeline-bar">
                        <div class="timeline-label">Actual Timeline</div>
                        <div class="timeline-visual">
                            <div class="timeline-fill actual" style="width: 100%">
                                ${project.actual_days} days
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 1rem; color: #ef4444; font-weight: 600;">
                    ⚠️ Project exceeded timeline by ${project.delay_days} days (${Math.round((project.delay_days / project.estimated_days) * 100)}% overrun)
                </div>
            `}
        </div>

        <div class="section-card">
            <h3>📋 Production Phases &amp; Tasks</h3>
            <div class="tasks-list">
                ${Object.entries(productionPhases).map(([phase, tasks]) => `
                    <div class="phase-section">
                        <div class="phase-title">${phase}</div>
                        ${tasks.map((task, idx) => `
                            <div class="task-item">
                                <span class="task-name">${task}</span>
                                <span class="task-status ${isOngoing && phase === project.current_stage && idx <= Math.floor(tasks.length * project.progress / 100) ? 'in-progress' : 'completed'}">
                                    ${isOngoing && phase === project.current_stage && idx <= Math.floor(tasks.length * project.progress / 100) ? 'In Progress' : 'Completed'}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>

        ${isOngoing ? `
            <div class="section-card">
                <h3>🔔 Live Task Updates</h3>
                <p style="color: #999;">Simulating real-time updates for ongoing project...</p>
                <div id="liveUpdates" style="margin-top: 1rem;"></div>
                <button class="btn-primary" onclick="simulateTaskCompletion('${project.id}')" style="margin-top: 1rem;">Simulate Task Completion</button>
            </div>
        ` : ''}
    `;

    // Switch to project detail page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('project-detail-page').classList.add('active');
}

// Simulate task completion
function simulateTaskCompletion(projectId) {
    const updates = document.getElementById('liveUpdates');
    const departments = ['Video Editor', 'Sound Designer', 'Producer', 'Director'];
    const randomDept = departments[Math.floor(Math.random() * departments.length)];
    
    const message = `${randomDept} marked task as complete. Notifying next team member...`;
    
    const updateDiv = document.createElement('div');
    updateDiv.className = 'activity-item';
    updateDiv.innerHTML = `
        <span class="activity-time">Just now</span>
        <span class="activity-text">${message}</span>
    `;
    updates.insertBefore(updateDiv, updates.firstChild);
    
    showNotification(message);
    
    // Simulate notification to next department
    setTimeout(() => {
        const nextDept = departments[Math.floor(Math.random() * departments.length)];
        const notifyDiv = document.createElement('div');
        notifyDiv.className = 'activity-item';
        notifyDiv.innerHTML = `
            <span class="activity-time">Just now</span>
            <span class="activity-text">✅ ${nextDept} received notification and started work</span>
        `;
        updates.insertBefore(notifyDiv, updates.firstChild);
        showNotification(`${nextDept} started their task`);
    }, 2000);
}

// Render Bottlenecks
function renderBottlenecks() {
    const grid = document.getElementById('bottlenecksGrid');
    
    grid.innerHTML = bottlenecks.map(bn => `
        <div class="bottleneck-card">
            <div class="bottleneck-header">
                <div class="bottleneck-title">${bn.area}</div>
                <span class="severity-badge ${bn.impact >= 9 ? 'high' : 'medium'}">Impact: ${bn.impact}/10</span>
            </div>
            <div class="bottleneck-metrics">
                <div class="metric">
                    <div class="metric-number">${bn.frequency}%</div>
                    <div class="metric-text">Frequency</div>
                </div>
                <div class="metric">
                    <div class="metric-number">${bn.impact}</div>
                    <div class="metric-text">Impact</div>
                </div>
                <div class="metric">
                    <div class="metric-number">${bn.avg_delay}d</div>
                    <div class="metric-text">Avg Delay</div>
                </div>
            </div>
            <div class="root-cause">
                <strong>Root Cause:</strong>
                <p>${bn.root_cause}</p>
            </div>
        </div>
    `).join('');

    // Create bottleneck chart
    setTimeout(() => {
        const ctx = document.getElementById('bottleneckChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: bottlenecks.map(b => b.area),
                    datasets: [{
                        label: 'Frequency (%)',
                        data: bottlenecks.map(b => b.frequency),
                        backgroundColor: '#3b82f6'
                    }, {
                        label: 'Impact (1-10)',
                        data: bottlenecks.map(b => b.impact * 10),
                        backgroundColor: '#06b6d4'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#fff' }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        },
                        x: {
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        }
                    }
                }
            });
        }
    }, 100);
}

// Render Team
function renderTeam() {
    const grid = document.getElementById('teamGrid');
    const credentialsTable = document.getElementById('credentialsTableBody');

    grid.innerHTML = teamMembers.map(member => `
        <div class="team-card" onclick="switchUserRole('${member.login_id}', '${member.name}', '${member.department}')">
            <div class="team-avatar">👤</div>
            <div class="team-name">${member.name}</div>
            <div class="team-department">${member.department}</div>
            <div class="team-login">Login: ${member.login_id}</div>
            <span class="access-badge">${member.access_level} Access</span>
        </div>
    `).join('');

    credentialsTable.innerHTML = teamMembers.map(member => `
        <tr>
            <td>${member.user_id}</td>
            <td>${member.department}</td>
            <td><code>${member.login_id}</code></td>
            <td><span class="access-badge">${member.access_level}</span></td>
        </tr>
    `).join('');
}

// Switch user role
function switchUserRole(loginId, name, department) {
    // Find user by login ID and update current user
    const userCreds = loginCredentials[loginId];
    if (userCreds) {
        currentUser = { name: userCreds.name, role: userCreds.department, access: userCreds.access };
        document.getElementById('currentUserName').textContent = userCreds.name;
        document.getElementById('currentUserRole').textContent = userCreds.department;
        showNotification(`\u2728 Switched to ${userCreds.department} view - Access Level: ${userCreds.access}`);
    }
}

// Render Reports
function renderReports() {
    setTimeout(() => {
        // Timeline Chart
        const timelineCtx = document.getElementById('timelineChart');
        if (timelineCtx) {
            new Chart(timelineCtx, {
                type: 'bar',
                data: {
                    labels: completedProjects.map(p => p.name.replace('Short Film - ', '')),
                    datasets: [{
                        label: 'Estimated Days',
                        data: completedProjects.map(p => p.estimated_days),
                        backgroundColor: '#3b82f6'
                    }, {
                        label: 'Actual Days',
                        data: completedProjects.map(p => p.actual_days),
                        backgroundColor: '#ef4444'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#fff' }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        },
                        x: {
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        }
                    }
                }
            });
        }

        // Budget Chart
        const budgetCtx = document.getElementById('budgetChart');
        if (budgetCtx) {
            new Chart(budgetCtx, {
                type: 'doughnut',
                data: {
                    labels: allProjects.map(p => p.name.replace('Short Film - ', '')),
                    datasets: [{
                        data: allProjects.map(p => p.budget),
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#3b82f6', '#06b6d4', '#fbbf24']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: { color: '#fff', font: { size: 10 } }
                        }
                    }
                }
            });
        }
    }, 100);
}

// Render Issues
function renderIssues() {
    const tbody = document.getElementById('issuesTableBody');
    
    tbody.innerHTML = sampleIssues.map(issue => `
        <tr>
            <td><code>${issue.id}</code></td>
            <td>${issue.project}</td>
            <td>${issue.description}</td>
            <td><span class="severity-badge ${issue.severity.toLowerCase()}">${issue.severity}</span></td>
            <td>${issue.department}</td>
            <td><span class="task-status ${issue.status === 'Resolved' ? 'completed' : 'in-progress'}">${issue.status}</span></td>
            <td>${issue.resolution_time}</td>
        </tr>
    `).join('');
}

// Show notification
function showNotification(message) {
    const toast = document.getElementById('notificationToast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ============================================
// LOGIN SYSTEM
// ============================================

function initLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const appContainer = document.getElementById('appContainer');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        if (loginCredentials[username] && loginCredentials[username].password === password) {
            // Successful login
            currentUser = loginCredentials[username];
            isLoggedIn = true;
            
            // Hide login, show app
            loginPage.style.display = 'none';
            appContainer.style.display = 'block';
            
            // Update user profile
            document.getElementById('currentUserName').textContent = currentUser.name;
            document.getElementById('currentUserRole').textContent = currentUser.department;
            
            // Show welcome notification
            addNotification(`\u2728 Welcome, ${currentUser.name}! Access Level: ${currentUser.access}`, 'success');
            
            // Initialize app
            initializeApp();
        } else {
            alert('Invalid credentials! Please try again.\n\nTry:\nrajesh@filmflow.com / FilmFlow@123\npriya@filmflow.com / FilmFlow@123\nadmin@filmflow.com / Admin@123');
        }
    });
    
    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            isLoggedIn = false;
            currentUser = null;
            loginPage.style.display = 'flex';
            appContainer.style.display = 'none';
            document.getElementById('loginForm').reset();
        }
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function initNotifications() {
    const notificationToggle = document.getElementById('notificationToggle');
    const notificationBar = document.getElementById('notificationBar');
    
    notificationToggle.addEventListener('click', () => {
        notificationBar.classList.toggle('open');
    });
    
    renderNotifications();
}

function renderNotifications() {
    const container = document.getElementById('notificationItems');
    container.innerHTML = notifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="markNotificationRead('${notif.id}')">
            <span class="notification-icon">🔔</span>
            <span class="notification-text">${notif.text}</span>
            <span class="notification-time">${notif.time}</span>
        </div>
    `).join('');
    
    const unreadCount = notifications.filter(n => !n.read).length;
    document.getElementById('notificationBadge').textContent = unreadCount;
    document.getElementById('notificationBadge').style.display = unreadCount > 0 ? 'inline-flex' : 'none';
}

function markNotificationRead(id) {
    const notif = notifications.find(n => n.id === id);
    if (notif) notif.read = true;
    renderNotifications();
}

function addNotification(text, type = 'info') {
    const id = 'NOT' + String(notifications.length + 1).padStart(3, '0');
    notifications.unshift({
        id,
        text,
        time: 'Just now',
        read: false,
        type
    });
    renderNotifications();
    showNotification(text);
}

// ============================================
// TOKEN SYSTEM
// ============================================

function initTokenSystem() {
    const raiseTokenBtn = document.getElementById('raiseTokenBtn');
    const tokenModal = document.getElementById('tokenModal');
    const closeTokenModal = document.getElementById('closeTokenModal');
    const cancelToken = document.getElementById('cancelToken');
    const tokenForm = document.getElementById('tokenForm');
    const tokenProject = document.getElementById('tokenProject');
    
    // Populate project dropdown
    tokenProject.innerHTML = '<option value="">Select project (optional)</option>' + 
        allProjects.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    
    raiseTokenBtn.addEventListener('click', () => {
        tokenModal.classList.add('active');
    });
    
    closeTokenModal.addEventListener('click', () => {
        tokenModal.classList.remove('active');
    });
    
    cancelToken.addEventListener('click', () => {
        tokenModal.classList.remove('active');
    });
    
    tokenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('tokenTitle').value;
        const description = document.getElementById('tokenDescription').value;
        const severity = document.getElementById('tokenSeverity').value;
        const category = document.getElementById('tokenCategory').value;
        const project = document.getElementById('tokenProject').value;
        
        const newToken = {
            id: `TKN-2025-${String(tokenCounter++).padStart(3, '0')}`,
            title,
            description,
            severity,
            category,
            project: project || 'General',
            status: 'Open',
            assignedTo: 'Auto-assigned',
            createdBy: currentUser.name,
            createdAt: new Date().toLocaleString()
        };
        
        tokens.push(newToken);
        
        addNotification(`🎫 New token raised: ${title} (${newToken.id})`, 'token');
        alert(`✅ Token ${newToken.id} successfully created!\n\nTitle: ${title}\nSeverity: ${severity}\nStatus: Open\n\nThe token has been auto-assigned to the relevant department.`);
        
        tokenModal.classList.remove('active');
        tokenForm.reset();
    });
}

// ============================================
// AI CHATBOT (FlowBot 3000)
// ============================================

function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const minimizeChat = document.getElementById('minimizeChat');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    const voiceRecording = document.getElementById('voiceRecording');
    const stopRecording = document.getElementById('stopRecording');
    const chatLanguage = document.getElementById('chatLanguage');
    
    let isRecording = false;
    
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });
    
    minimizeChat.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });
    
    sendBtn.addEventListener('click', () => {
        sendChatMessage();
    });
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Voice input
    voiceBtn.addEventListener('click', () => {
        if (!isRecording) {
            startVoiceRecording();
        }
    });
    
    stopRecording.addEventListener('click', () => {
        stopVoiceRecording();
    });
    
    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            chatInput.value = query;
            sendChatMessage();
        });
    });
    
    function startVoiceRecording() {
        isRecording = true;
        voiceRecording.style.display = 'block';
        document.querySelector('.chatbot-input-area').style.display = 'none';
        
        // Simulate recording for 3 seconds
        setTimeout(() => {
            stopVoiceRecording();
        }, 3000);
    }
    
    function stopVoiceRecording() {
        isRecording = false;
        voiceRecording.style.display = 'none';
        document.querySelector('.chatbot-input-area').style.display = 'flex';
        
        const lang = chatLanguage.value;
        const simulatedTranscript = getSimulatedTranscript(lang);
        
        chatInput.value = simulatedTranscript;
        addChatMessage(simulatedTranscript, 'user');
        
        setTimeout(() => {
            processChatQuery(simulatedTranscript, lang);
        }, 500);
    }
    
    function getSimulatedTranscript(lang) {
        const transcripts = {
            'en': 'What is the status of Awakening project?',
            'hi': 'अवेकनिंग प्रोजेक्ट की स्थिति क्या है?',
            'mr': 'अवेकनिंग प्रोजेक्टची स्थिती काय आहे?',
            'kn': 'ಅವೇಕನಿಂಗ್ ಯೋಜನೆಯ ಸ್ಥಿತಿ ಏನು?'
        };
        return transcripts[lang] || transcripts['en'];
    }
    
    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        addChatMessage(message, 'user');
        chatInput.value = '';
        
        const lang = chatLanguage.value;
        setTimeout(() => {
            processChatQuery(message, lang);
        }, 500);
    }
    
    function addChatMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender === 'bot' ? 'bot-message' : 'user-message'}`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function processChatQuery(query, lang) {
        const lowerQuery = query.toLowerCase();
        let response = '';
        
        // Multi-language responses
        const responses = {
            'en': {
                'awakening': 'Project Awakening is currently in Post-Production phase with 35% completion. The team is working on video editing and VFX. Estimated completion: 43 more days.',
                'completed': 'We have completed 10 projects: Journey, Shadows, Hope, Echo, Silence, Dreams, Rhythm, Vision, Pulse, and Moments.',
                'team': 'The Fragments project team includes: Director (Rajesh Kumar), Producer (Priya Sharma), Editor (Neha Singh), and 7 other members.',
                'default': 'I can help you with project information, team details, and more. Try asking about specific projects or team members!'
            },
            'hi': {
                'awakening': 'प्रोजेक्ट अवेकनिंग वर्तमान में पोस्ट-प्रोडक्शन चरण में है और 35% पूर्ण है। टीम वीडियो एडिटिंग और VFX पर काम कर रही है।',
                'completed': 'हमने 10 प्रोजेक्ट पूरे किए हैं: जर्नी, शैडोज, होप, इको, साइलेंस, ड्रीम्स, रिदम, विजन, पल्स, और मोमेंट्स।',
                'team': 'फ्रैगमेंट्स प्रोजेक्ट टीम में शामिल हैं: निर्देशक, निर्माता, संपादक, और 7 अन्य सदस्य।',
                'default': 'मैं प्रोजेक्ट की जानकारी और टीम विवरण में आपकी मदद कर सकता हूं। विशिष्ट प्रोजेक्ट के बारे में पूछें!'
            },
            'mr': {
                'awakening': 'प्रोजेक्ट अवेकनिंग सध्या पोस्ट-प्रोडक्शन टप्प्यात आहे आणि 35% पूर्ण झाले आहे।',
                'completed': 'आम्ही 10 प्रोजेक्ट पूर्ण केले आहेत: जर्नी, शॅडोज, होप, इको, सायलेन्स, ड्रीम्स, रिदम, व्हिजन, पल्स, आणि मोमेंट्स।',
                'team': 'फ्रॅगमेंट्स प्रोजेक्ट टीममध्ये दिग्दर्शक, निर्माता, संपादक आणि 7 इतर सदस्य आहेत।',
                'default': 'मी प्रोजेक्ट माहिती आणि टीम तपशीलांमध्ये तुम्हाला मदत करू शकतो।'
            },
            'kn': {
                'awakening': 'ಪ್ರಾಜೆಕ್ಟ್ ಅವೇಕನಿಂಗ್ ಪ್ರಸ್ತುತ ಪೋಸ್ಟ್-ಪ್ರೊಡಕ್ಷನ್ ಹಂತದಲ್ಲಿದೆ ಮತ್ತು 35% ಪೂರ್ಣಗೊಂಡಿದೆ.',
                'completed': 'ನಾವು 10 ಯೋಜನೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೇವೆ: ಜರ್ನಿ, ಶ್ಯಾಡೋಸ್, ಹೋಪ್, ಎಕೋ, ಸೈಲೆನ್ಸ್, ಡ್ರೀಮ್ಸ್.',
                'team': 'ಫ್ರ್ಯಾಗ್ಮೆಂಟ್ಸ್ ಯೋಜನೆ ತಂಡದಲ್ಲಿ ನಿರ್ದೇಶಕ, ನಿರ್ಮಾಪಕ, ಸಂಪಾದಕ ಮತ್ತು 7 ಇತರ ಸದಸ್ಯರು ಇದ್ದಾರೆ.',
                'default': 'ನಾನು ಯೋಜನೆ ಮಾಹಿತಿ ಮತ್ತು ತಂಡದ ವಿವರಗಳಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.'
            }
        };
        
        const langResponses = responses[lang] || responses['en'];
        
        if (lowerQuery.includes('awakening') || lowerQuery.includes('अवेकनिंग') || lowerQuery.includes('ಅವೇಕನಿಂಗ್')) {
            response = langResponses['awakening'];
        } else if (lowerQuery.includes('completed') || lowerQuery.includes('पूरे') || lowerQuery.includes('पूर्ण')) {
            response = langResponses['completed'];
        } else if (lowerQuery.includes('team') || lowerQuery.includes('टीम') || lowerQuery.includes('ತಂಡ')) {
            response = langResponses['team'];
        } else if (lowerQuery.includes('google') || lowerQuery.includes('search')) {
            response = `I've integrated with Google Search API. For "${query}", I found: Film production management best practices, industry trends, and workflow optimization tips. Would you like more details?`;
        } else {
            response = langResponses['default'];
        }
        
        addChatMessage(response, 'bot');
    }
}

// ============================================
// VIDEO LIBRARY
// ============================================

function initVideoLibrary() {
    renderVideos('all');
    
    document.querySelectorAll('[data-video-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-video-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-video-filter');
            renderVideos(filter);
        });
    });
    
    // Video player controls
    const closePlayer = document.getElementById('closePlayer');
    const videoPlayerModal = document.getElementById('videoPlayerModal');
    const mainVideoPlayer = document.getElementById('mainVideoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const seekBar = document.getElementById('seekBar');
    const speedSelect = document.getElementById('speedSelect');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    closePlayer.addEventListener('click', () => {
        videoPlayerModal.classList.remove('active');
        mainVideoPlayer.pause();
    });
    
    playPauseBtn.addEventListener('click', () => {
        if (mainVideoPlayer.paused) {
            mainVideoPlayer.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            mainVideoPlayer.pause();
            playPauseBtn.textContent = '▶️';
        }
    });
    
    speedSelect.addEventListener('change', () => {
        mainVideoPlayer.playbackRate = parseFloat(speedSelect.value);
    });
    
    fullscreenBtn.addEventListener('click', () => {
        if (mainVideoPlayer.requestFullscreen) {
            mainVideoPlayer.requestFullscreen();
        }
    });
}

function renderVideos(filter) {
    let videos = videoLibrary;
    
    if (filter === '4k') {
        videos = videoLibrary.filter(v => v.quality === '4K');
    } else if (filter === 'final') {
        videos = videoLibrary.filter(v => v.type === 'Final Cut');
    } else if (filter === 'bts') {
        videos = videoLibrary.filter(v => v.type === 'BTS');
    }
    
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = videos.map(video => `
        <div class="video-card" onclick="playVideo('${video.id}')">
            <div class="video-thumbnail">
                ${video.thumbnail}
                <span class="video-quality-badge">${video.quality}</span>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-meta">
                    <span>${video.duration}</span>
                    <span>${video.type}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function playVideo(videoId) {
    const video = videoLibrary.find(v => v.id === videoId);
    if (!video) return;
    
    document.getElementById('videoPlayerTitle').textContent = video.title;
    document.getElementById('videoPlayerModal').classList.add('active');
    
    addNotification(`📺 Now playing: ${video.title}`, 'info');
}

// ============================================
// FILE STORAGE
// ============================================

function initFileStorage() {
    renderFiles();
    
    document.getElementById('uploadFileBtn').addEventListener('click', () => {
        const fileName = prompt('Enter file name to upload (simulation):');
        if (fileName) {
            const newFile = {
                id: `FILE${String(fileStorage.length + 1).padStart(3, '0')}`,
                name: fileName,
                size: `${Math.floor(Math.random() * 500)}MB`,
                type: 'File',
                icon: '📄',
                date: new Date().toISOString().split('T')[0]
            };
            fileStorage.unshift(newFile);
            renderFiles();
            addNotification(`✅ File uploaded: ${fileName}`, 'success');
        }
    });
}

function renderFiles() {
    const grid = document.getElementById('filesGrid');
    grid.innerHTML = fileStorage.map(file => `
        <div class="file-card" onclick="alert('File preview: ${file.name}')">
            <div class="file-icon">${file.icon}</div>
            <div class="file-name">${file.name}</div>
            <div class="file-meta">${file.size} • ${file.date}</div>
        </div>
    `).join('');
}

// ============================================
// ADMIN PANEL
// ============================================

function initAdminPanel() {
    if (currentUser && currentUser.role === 'Admin') {
        renderTeamManagement();
        renderAdminChart();
    }
}

function renderTeamManagement() {
    const grid = document.getElementById('teamManagementGrid');
    grid.innerHTML = teamMembers.map(member => `
        <div class="team-manage-card">
            <div class="team-manage-info">
                <div class="team-manage-name">${member.name}</div>
                <div class="team-manage-dept">${member.department}</div>
            </div>
            <div class="team-manage-actions">
                <button class="action-btn" onclick="alert('Edit: ${member.name}')" title="Edit">✏️</button>
                <button class="action-btn" onclick="alert('Reassign: ${member.name}')" title="Reassign">🔄</button>
                <button class="action-btn danger" onclick="confirmRemove('${member.name}')" title="Remove">🗑️</button>
            </div>
        </div>
    `).join('');
}

function confirmRemove(name) {
    if (confirm(`Remove ${name} from the team?`)) {
        addNotification(`⚠️ Team member ${name} has been removed.`, 'warning');
    }
}

function openTeamModal(action) {
    if (action === 'add') {
        alert('Add Team Member modal would open here.\nFeatures: Name, Department, Role, Access Level');
    } else if (action === 'restructure') {
        alert('Team Restructure interface would open.\nFeatures: Drag-and-drop hierarchy, Department changes');
    } else if (action === 'assign') {
        alert('Project Assignment interface would open.\nFeatures: Assign members to projects, Set responsibilities');
    }
}

function renderAdminChart() {
    setTimeout(() => {
        const ctx = document.getElementById('adminChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Projects Completed',
                        data: [2, 3, 2, 4, 3, 3],
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#fff' } }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        },
                        x: {
                            ticks: { color: '#999' },
                            grid: { color: '#333' }
                        }
                    }
                }
            });
        }
    }, 100);
}

// ============================================
// APP INITIALIZATION
// ============================================

function initializeApp() {
    initNavigation();
    initNotifications();
    initTokenSystem();
    initChatbot();
    initVideoLibrary();
    initFileStorage();
    initAdminPanel();
    renderProjects('all');
    
    // Initialize global search
    initGlobalSearch();
    
    // Initialize settings
    if (document.getElementById('settingsName')) {
        document.getElementById('settingsName').value = currentUser.name;
    }
    
    // Start real-time updates simulation
    startRealtimeUpdates();
}

function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) return;
        
        // Search across all data
        const results = [];
        
        // Search projects
        allProjects.forEach(p => {
            if (p.name.toLowerCase().includes(query)) {
                results.push({ type: 'Project', name: p.name, id: p.id });
            }
        });
        
        // Search team members
        teamMembers.forEach(m => {
            if (m.name.toLowerCase().includes(query) || m.department.toLowerCase().includes(query)) {
                results.push({ type: 'Team Member', name: m.name, id: m.user_id });
            }
        });
        
        // Search tasks
        taskData.forEach(t => {
            if (t.title.toLowerCase().includes(query)) {
                results.push({ type: 'Task', name: t.title, id: t.id });
            }
        });
        
        if (results.length > 0) {
            showNotification(`Found ${results.length} results for "${query}"`);
        }
    });
}

function startRealtimeUpdates() {
    // Simulate live notifications every 20 seconds
    setInterval(() => {
        const updates = [
            'Video Editor completed editing task for Awakening',
            'Sound Designer uploaded new audio mix',
            'Production Manager updated project timeline',
            'New footage uploaded for Fragments project',
            'Director approved final cut for review'
        ];
        const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
        addNotification(randomUpdate, 'update');
    }, 20000);
}

// Tasks Management
const taskData = [
    { id: 'TSK001', title: 'Script Finalization', project: 'Awakening', assignee: 'Director', status: 'todo', priority: 'high', dueDate: '2025-11-10' },
    { id: 'TSK002', title: 'Location Scouting', project: 'Fragments', assignee: 'Production Manager', status: 'in-progress', priority: 'medium', dueDate: '2025-11-08' },
    { id: 'TSK003', title: 'Video Editing', project: 'Essence', assignee: 'Editor', status: 'in-progress', priority: 'high', dueDate: '2025-11-07' },
    { id: 'TSK004', title: 'Sound Design', project: 'Awakening', assignee: 'Sound Designer', status: 'todo', priority: 'medium', dueDate: '2025-11-12' },
    { id: 'TSK005', title: 'Color Grading', project: 'Fragments', assignee: 'Editor', status: 'done', priority: 'low', dueDate: '2025-11-05' },
    { id: 'TSK006', title: 'VFX Work', project: 'Essence', assignee: 'VFX Artist', status: 'todo', priority: 'high', dueDate: '2025-11-09' }
];

function renderKanbanBoard() {
    const todo = document.getElementById('todoTasks');
    const inProgress = document.getElementById('inProgressTasks');
    const done = document.getElementById('doneTasks');
    
    if (!todo || !inProgress || !done) return;
    
    const todoTasks = taskData.filter(t => t.status === 'todo');
    const inProgressTasks = taskData.filter(t => t.status === 'in-progress');
    const doneTasks = taskData.filter(t => t.status === 'done');
    
    todo.innerHTML = todoTasks.map(task => `
        <div class="kanban-task" draggable="true" data-task-id="${task.id}">
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
                <span>${task.assignee}</span>
                <span class="severity-badge ${task.priority}">${task.priority}</span>
            </div>
            <div class="task-meta" style="margin-top: 0.5rem;">
                <span>${task.project}</span>
                <span>${task.dueDate}</span>
            </div>
        </div>
    `).join('');
    
    inProgress.innerHTML = inProgressTasks.map(task => `
        <div class="kanban-task" draggable="true" data-task-id="${task.id}">
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
                <span>${task.assignee}</span>
                <span class="severity-badge ${task.priority}">${task.priority}</span>
            </div>
            <div class="task-meta" style="margin-top: 0.5rem;">
                <span>${task.project}</span>
                <span>${task.dueDate}</span>
            </div>
        </div>
    `).join('');
    
    done.innerHTML = doneTasks.map(task => `
        <div class="kanban-task" draggable="true" data-task-id="${task.id}">
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
                <span>${task.assignee}</span>
                <span class="severity-badge ${task.priority}">${task.priority}</span>
            </div>
            <div class="task-meta" style="margin-top: 0.5rem;">
                <span>${task.project}</span>
                <span>${task.dueDate}</span>
            </div>
        </div>
    `).join('');
    
    document.getElementById('todoCount').textContent = todoTasks.length;
    document.getElementById('inProgressCount').textContent = inProgressTasks.length;
    document.getElementById('doneCount').textContent = doneTasks.length;
}

function createNewTask() {
    alert('Create New Task Modal\n\nFeatures:\n- Task Title\n- Description\n- Assign to team member\n- Set priority\n- Set deadline\n- Add dependencies\n- Attach documents');
}

function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="calendar-header">
            <h2>November 2025</h2>
            <div>
                <button class="btn-secondary">← Previous</button>
                <button class="btn-secondary">Next →</button>
            </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
            <div style="text-align: center; font-weight: 600;">Sun</div>
            <div style="text-align: center; font-weight: 600;">Mon</div>
            <div style="text-align: center; font-weight: 600;">Tue</div>
            <div style="text-align: center; font-weight: 600;">Wed</div>
            <div style="text-align: center; font-weight: 600;">Thu</div>
            <div style="text-align: center; font-weight: 600;">Fri</div>
            <div style="text-align: center; font-weight: 600;">Sat</div>
        </div>
        <div class="calendar-grid">
            ${Array.from({length: 30}, (_, i) => {
                const hasEvent = [5, 10, 15, 20, 25].includes(i + 1);
                return `
                    <div class="calendar-day ${hasEvent ? 'has-event' : ''}">
                        <div style="font-weight: 600;">${i + 1}</div>
                        ${hasEvent ? '<div style="font-size: 0.75rem; margin-top: 0.25rem;">📅 Event</div>' : ''}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderChat() {
    const channels = document.getElementById('chatChannels');
    const main = document.getElementById('chatMain');
    
    if (!channels || !main) return;
    
    channels.innerHTML = `
        <h3 style="margin-bottom: 1rem;">Channels</h3>
        <div class="chat-channel-item active">📁 All Projects</div>
        <div class="chat-channel-item">🎬 Awakening</div>
        <div class="chat-channel-item">🎬 Fragments</div>
        <div class="chat-channel-item">🎬 Essence</div>
        <div class="chat-channel-item">👥 Production Team</div>
        <div class="chat-channel-item">👥 Post-Production</div>
    `;
    
    main.innerHTML = `
        <div style="padding: 1rem; border-bottom: 1px solid #2d3748;">
            <h3>📁 All Projects</h3>
            <p style="font-size: 0.85rem; color: #999;">Team-wide discussion</p>
        </div>
        <div class="chat-messages-area">
            <div class="chat-message bot-message">
                <div class="message-avatar">👤</div>
                <div class="message-content">
                    <strong>Director User</strong> <span style="font-size: 0.8rem; color: #999;">10:30 AM</span>
                    <p>Team, we need to finalize the script by Friday.</p>
                </div>
            </div>
            <div class="chat-message user-message">
                <div class="message-avatar">👤</div>
                <div class="message-content">
                    <strong>Editor User</strong> <span style="font-size: 0.8rem; color: #999;">10:45 AM</span>
                    <p>I've completed the rough cut for Awakening project.</p>
                </div>
            </div>
        </div>
        <div class="chat-input-area">
            <input type="text" class="chat-input" placeholder="Type a message...">
            <button class="btn-primary">Send</button>
        </div>
    `;
}

function renderDocuments() {
    const grid = document.getElementById('documentsGrid');
    if (!grid) return;
    
    grid.innerHTML = fileStorage.map(file => `
        <div class="document-card" onclick="alert('Document: ${file.name}')">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${file.icon}</div>
            <div style="font-weight: 600; margin-bottom: 0.5rem;">${file.name}</div>
            <div style="color: #999; font-size: 0.85rem;">${file.size} • ${file.date}</div>
            <div style="margin-top: 0.75rem;">
                <span class="status-badge completed">${file.type}</span>
            </div>
        </div>
    `).join('');
}

function renderAnalytics() {
    setTimeout(() => {
        const ctx1 = document.getElementById('tasksCompletionChart');
        if (ctx1) {
            new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['Completed', 'In Progress', 'To Do'],
                    datasets: [{ data: [45, 30, 25], backgroundColor: ['#06b6d4', '#fbbf24', '#ef4444'] }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: '#e8eaed' }
                        }
                    }
                }
            });
        }
        
        const ctx2 = document.getElementById('departmentEfficiencyChart');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Production', 'Post-Prod', 'Creative', 'Management'],
                    datasets: [{ label: 'Efficiency %', data: [85, 78, 92, 88], backgroundColor: '#06b6d4' }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#e8eaed' } }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#999' },
                            grid: { color: '#2d3748' }
                        },
                        x: {
                            ticks: { color: '#999' },
                            grid: { color: '#2d3748' }
                        }
                    }
                }
            });
        }
        
        const ctx3 = document.getElementById('resourceUtilizationChart');
        if (ctx3) {
            new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Team Utilization %',
                        data: [65, 72, 85, 78],
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#e8eaed' } }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { color: '#999' },
                            grid: { color: '#2d3748' }
                        },
                        x: {
                            ticks: { color: '#999' },
                            grid: { color: '#2d3748' }
                        }
                    }
                }
            });
        }
    }, 100);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    initNavigation();
    renderProjects('all');

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProjects(tab.getAttribute('data-filter'));
        });
    });

    // Back button
    document.getElementById('backToProjects').addEventListener('click', () => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('projects-page').classList.add('active');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-page="projects"]').classList.add('active');
    });

    // Only initialize if not logged in yet
    // (app will initialize after successful login)
});

// Simulate live activity updates for dashboard
setInterval(() => {
    if (!isLoggedIn) return;
    
    const activities = [
        'Editor User uploaded new footage',
        'Sound Designer completed audio mixing',
        'Director approved final cut',
        'Producer updated project timeline',
        'Cinematographer shared dailies'
    ];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const activityList = document.getElementById('activityList');
    if (activityList) {
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item';
        newActivity.innerHTML = `
            <span class="activity-time">Just now</span>
            <span class="activity-text">${randomActivity}</span>
        `;
        activityList.insertBefore(newActivity, activityList.firstChild);
        
        if (activityList.children.length > 5) {
            activityList.removeChild(activityList.lastChild);
        }
    }
}, 15000);