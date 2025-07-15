import React from "react";

const projects = [
  {
    title: "Machine Learning Car Price",
    link: "https://github.com/yourname/ml-car-price",
    description: "Mô hình dự đoán giá xe ô tô sử dụng Random Forest."
  },
  {
    title: "E-Commerce Website",
    link: "https://github.com/yourname/ecommerce-site",
    description: "Website bán hàng online với React và Node.js."
  },
  {
    title: "Personal Blog",
    link: "https://github.com/yourname/personal-blog",
    description: "Blog cá nhân viết bằng Next.js hỗ trợ markdown."
  }
];

export default function SimplePortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 max-w-3xl mx-auto font-sans">
      <header className="mb-10 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">Trung Hiếu</h1>
        <p className="text-gray-600 mt-2">Kỹ sư phần mềm | Yêu thích công nghệ | Đam mê học hỏi</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dự án tiêu biểu</h2>
        <ul className="space-y-4">
          {projects.map((proj, index) => (
            <li key={index} className="border-b pb-4">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:underline">
                {proj.title}
              </a>
              <p className="text-gray-700 mt-1">{proj.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-10 text-center text-sm text-gray-500">
        © 2025 Trung Hiếu | <a href="mailto:youremail@example.com" className="hover:underline">Liên hệ</a> | <a href="https://github.com/yourname" className="hover:underline">GitHub</a>
      </footer>
    </div>
  );
}
