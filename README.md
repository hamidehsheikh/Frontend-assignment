# Frontend Assignment

This React application is inspired by <a href="https://finanzvergleich.com/kreditkarte/kreditkarten-vergleich/">Finanzvergleich's Kreditkarten Vergleich</a>. It aims to replicate all UI features and functionalities from the source. Alongside React, I've utilized Tailwind CSS as a CSS framework, Heroicons for icons, and json-server to provide mock data.

## Installation

1. Clone the repository.
2. Run the following commands:

```bash
npm install
cp .env.example .env
npm run start
```

3. To launch the mock server, run the following command:

```bash
npx json-server db.json -p 3001
```

\*\* If running on a different port, ensure to update the port number in .env as `REACT_APP_SERVER_URL`.

## Todo:

- Enhance responsiveness for different devices.
- Utilize a state management tool like React Query for managing API calls.
