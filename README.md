# The Aztec Quiz

A full-stack quiz application about the Aztec network, built with:
- React (Vite)
- Node.js/Express
- SQLite database
- Tailwind CSS

## Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

## Installation and Setup

### Option 1: Run Server and Client Separately

#### Server Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database with questions:
   ```bash
   npm run seed
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:3000`

#### Client Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Client runs on `http://localhost:5173`

### Option 2: Run Both Together (Recommended)

1. From the project root directory:
   ```bash
   npm install
   cd server && npm install && npm run seed && cd ..
   cd client && npm install && cd ..
   ```
2. Start both servers in separate terminals:
   - Terminal 1:
     ```bash
     cd server && npm run dev
     ```
   - Terminal 2:
     ```bash
     cd client && npm run dev
     ```

## Development Scripts

### Server
- `npm run dev`: Start development server
- `npm run seed`: Seed the database
- `npm test`: Run tests

### Client
- `npm run dev`: Start Vite dev server
- `npm run build`: Create production build
- `npm run preview`: Preview production build

## Project Structure
- `client/`: React frontend
- `server/`: Node.js backend
