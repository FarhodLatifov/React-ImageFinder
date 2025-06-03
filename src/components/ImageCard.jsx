import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-[1.03] hover:shadow-xl transition duration-300 flex flex-col">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="w-full h-56 object-cover object-center"
      />
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h2 className="font-semibold text-gray-800 text-lg mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z"/></svg>
            {image.user}
          </h2>
          <ul className="text-gray-600 text-sm flex flex-wrap gap-3">
            <li className="flex items-center gap-1">
              👁 <strong>{image.views}</strong>
            </li>
            <li className="flex items-center gap-1">
              ⬇️ <strong>{image.downloads}</strong>
            </li>
            <li className="flex items-center gap-1">
              ❤️ <strong>{image.likes}</strong>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {image.tags.split(",").map((tag, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium hover:bg-purple-200 transition"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;