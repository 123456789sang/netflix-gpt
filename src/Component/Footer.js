import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-zinc-900 text-white text-center py-8 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-2">DevTinder 🚀</h2>
    <p className="text-gray-400 mb-6">A collaborative project built with ❤️ by:</p>

    <div className="flex flex-col sm:flex-row justify-center gap-8 mb-4">
      <div>
        <p className="font-semibold">Sangam</p>
        <a href="https://github.com/sangam123" className="text-gray-500 hover:text-white" target="_blank">@sangam123</a>
      </div>
      <div>
        <p className="font-semibold">Rohit</p>
        <a href="https://github.com/rohitdev" className="text-gray-500 hover:text-white" target="_blank">@rohitdev</a>
      </div>
      <div>
        <p className="font-semibold">Abhishek</p>
        <a href="https://github.com/abhishekcode" className="text-gray-500 hover:text-white" target="_blank">@abhishekcode</a>
      </div>
    </div>

    <p className="text-sm text-gray-600">© 2025 DevTinder. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer;