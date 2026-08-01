/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',//告诉Next.js将应用程序导出为静态HTML文件（在out文件夹里），
    // 而不是使用服务器端渲染（SSR）或增量静态生成（ISR）
};

export default nextConfig;
