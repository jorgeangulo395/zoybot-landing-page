/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
} // <--- ¡Asegúrate de que NO haya coma aquí!

export default nextConfig
