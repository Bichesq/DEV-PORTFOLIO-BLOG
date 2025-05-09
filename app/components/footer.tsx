export default function Footer() {
    return (
      <>
        {/* Footer */}
        <footer className="bg-blue-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">My Blog</h3>
                <p className="text-blue-200">Sharing ideas since 2025</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Subscribe to Newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l text-gray-800 focus:outline-none"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-500 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
              <p>&copy; 2025 My Blog. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
    );
}