import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Allow access from local network devices
    port: 5173,        // Optional: you can change this port if needed
    strictPort: true,  // Optional: fail if port is already in use
  },
})
