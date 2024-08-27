const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">[Your Brand Name]</h3>
            <p className="text-gray-400">
              Fashion that speaks your style. Join us on our journey to redefine fashion with quality, sustainability, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Shipping</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.709h-3.16v-3.616h3.16V8.414c0-3.135 1.91-4.849 4.702-4.849 1.33 0 2.474.099 2.806.143v3.253h-1.924c-1.51 0-1.801.718-1.801 1.77v2.319h3.602l-.47 3.616h-3.132V24h6.139C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.976 1.247 2.243 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.976.975-2.243 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.976-1.247-2.243-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.976-.975 2.243-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.333.013 7.052.072 5.77.131 4.519.368 3.414 1.472 2.31 2.576 2.074 3.827 2.015 5.109.956 6.39.943 6.799.943 12c0 5.2.013 5.61.072 6.891.059 1.282.296 2.533 1.401 3.638 1.105 1.105 2.356 1.342 3.638 1.401 1.282.059 1.691.072 6.891.072 5.2 0 5.61-.013 6.891-.072 1.282-.059 2.533-.296 3.638-1.401 1.105-1.105 1.342-2.356 1.401-3.638.059-1.282.072-1.691.072-6.891 0-5.2-.013-5.61-.072-6.891-.059-1.282-.296-2.533-1.401-3.638-1.105-1.105-2.356-1.342-3.638-1.401C16.61.013 16.2 0 12 0zm0 5.838c-3.404 0-6.162 2.757-6.162 6.162S8.596 18.162 12 18.162s6.162-2.757 6.162-6.162S15.404 5.838 12 5.838zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.725 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144a4.823 4.823 0 0 0-.666 2.472c0 1.707.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061c0 2.385 1.698 4.375 3.946 4.827a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.378 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.397 0-.79-.023-1.175-.067a13.924 13.924 0 0 0 7.548 2.211c9.051 0 14.002-7.496 14.002-13.986 0-.213 0-.425-.015-.636A9.936 9.936 0 0 0 24 4.59a9.705 9.705 0 0 1-2.805.775 4.924 4.924 0 0 0 2.16-2.725z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} [Your Brand Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
