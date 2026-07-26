import { useImages } from './ImageContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { image1, setImage1, image2, setImage2 } = useImages();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 pb-4 border-b border-gray-100 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Photo Dashboard</h1>
          <Link to="/" className="text-sm bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center w-full sm:w-auto">
            View Live Site
          </Link>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Base Docked Image (Image 1)</label>
            <p className="text-xs text-gray-500 mb-4">This is the background image that appears normally.</p>
            <input 
              type="text" 
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8702a] focus:border-transparent outline-none transition-all"
              placeholder="e.g. /bike1.png or https://..."
            />
            <div className="mt-4 h-48 w-full sm:w-72 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
              {image1 ? (
                <img src={image1} alt="Preview 1" className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">No image</div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Highlighted Reveal Image (Image 2)</label>
            <p className="text-xs text-gray-500 mb-4">This is the image revealed by the cursor spotlight.</p>
            <input 
              type="text" 
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8702a] focus:border-transparent outline-none transition-all"
              placeholder="e.g. /bike2.png or https://..."
            />
            <div className="mt-4 h-48 w-full sm:w-72 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
              {image2 ? (
                <img src={image2} alt="Preview 2" className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">No image</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
