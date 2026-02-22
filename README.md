# MCA NITW

The official web portal for the MCA department at NIT Warangal -- featuring alumni networking, student profiles, study materials, placement cell coordination, and academic resources.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Material UI](https://img.shields.io/badge/MUI-007FFF?style=flat&logo=mui&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

## Overview

A full-stack MERN application serving as the central web portal for MCA students at NIT Warangal. The platform connects current students with alumni, provides access to study materials, coordinates placement activities, and manages student/faculty information.

## Features

- **Alumni Network** -- Browse alumni profiles with individual detail pages
- **Student Directory** -- Current student information and profiles
- **Study Materials** -- Centralized academic resource repository
- **Placement Cell** -- Placement coordination and updates
- **CR Cell** -- Class Representative coordination panel
- **Authentication** -- Secure user login and registration
- **Light/Dark Mode** -- Theme toggle for comfortable viewing
- **Contact Management** -- Faculty and staff contact information
- **Responsive Design** -- Works on desktop and mobile devices

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router 7, Material-UI (MUI) 6, Bootstrap 5 |
| Backend | Node.js, Express 4, MongoDB, Mongoose |
| Auth | bcryptjs password hashing |
| Formatting | Prettier |

## Pages

| Page | Description |
|------|-------------|
| Home | Landing page with department overview |
| About | Department information and history |
| Alumni | Alumni directory with individual profiles |
| Students | Current student information |
| Study Material | Academic resources organized by subject |
| Placement Cell | Placement activities and coordination |
| CR Cell | Class representative panel |
| Authentication | Login and signup forms |
| Contact | Faculty and staff contact cards |
| Full Profile | Detailed user profile view |

## Project Structure

```
mca_nitw/
├── client/                      # React frontend
│   └── src/
│       ├── pages/
│       │   ├── home/           # Landing page
│       │   ├── About/          # Department info
│       │   ├── Alumni/         # Alumni directory
│       │   ├── Authentication/ # Login/Signup
│       │   ├── Students/       # Student listing
│       │   ├── StudyMaterial/  # Resources
│       │   ├── Contact/        # Contact cards
│       │   ├── PlacementCell/  # Placement info
│       │   ├── CRCell/         # CR coordination
│       │   ├── Fullprofile/    # User profiles
│       │   └── Error/          # Error page
│       ├── components/
│       │   ├── navbar/         # Top navigation
│       │   ├── footer/         # Page footer
│       │   ├── sidenavbar/     # Side navigation
│       │   └── mode/           # Dark/light toggle
│       └── Layout/             # Auth navigation, fallbacks
├── server/
│   ├── models/
│   │   └── User.js             # User Mongoose schema
│   └── server.js               # Express entry point
├── package.json                 # Root scripts
└── .prettierrc                  # Code formatting
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9.8+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/MCA-NITW/mca_nitw.git
cd mca_nitw

# Install all dependencies and set up environment
npm install
npm run set-env
```

### Running

```bash
# Start both frontend and backend
npm run dev

# Backend only
npm run backend-start

# Frontend only
npm run frontend-start

# Format code
npm run format
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |

## Contributing

Contributions from MCA-NITW members and external collaborators are welcome.

### For Organization Members

1. Create a branch from `develop`: `feature-<description>`
2. Implement and test your changes
3. Create a Pull Request to `develop`

### For External Contributors

1. Fork the repository
2. Create a branch from `develop`: `feature-<description>`
3. Implement and test your changes
4. Create a Pull Request to `develop`

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Organization

This project is maintained by [MCA-NITW](https://github.com/MCA-NITW), the GitHub organization for the MCA department at the National Institute of Technology, Warangal.

## License

This project is licensed under the [MIT License](LICENSE).
