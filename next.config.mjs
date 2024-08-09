import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["randomuser.me", "www.freepik.com" ], 
        
      },
};

export default withNextVideo(nextConfig);