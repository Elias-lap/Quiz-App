import React from 'react'

export default function Test() {
  return (
    <>


     <div className="flex h-screen bg-gray-200">
    {/* <!-- SideBar --> */}
    <div className="w-64 bg-white border-r border-gray-300">
        {/* <!-- Logo --> */}
        <div className="p-4  text-center">
            <FontAwesomeIcon icon={faBars} />    
              </div>
        
        <nav className="p-2">
            <ul>
                <li>
                    <Link to="#" className="block p-2 text-gray-800 hover:bg-gray-100">
                    <FontAwesomeIcon className=' me-2' icon={faHouse} />                        
                        Dashboard</Link>
                </li>
                <li>
                    <Link to="#" className="block p-2 text-gray-800 hover:bg-gray-100">الصفحة الثانية</Link>
                </li>
                <li>
                    <Link to="#" className="block p-2 text-gray-800 hover:bg-gray-100">صفحة ثالثة</Link>
                </li>
            </ul>
        </nav>
    </div>

    {/* <!-- البقية من المحتوى --> */}
    <div className="flex-1 p-4">
        {/* <!-- المحتوى الرئيسي هنا --> */}
    </div>
</div>  




{/* ============================= */}


<div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
    <div className="absolute top-0 right-0 -mr-14 p-1">
      <button type="button" className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
        <span className="sr-only">Close sidebar</span>
        {/* <!-- Heroicon name: outline/x --> */}
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
      <div className="flex-shrink-0 flex items-center px-4">
        <img className="h-8 w-auto" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow"/>
      </div>
      <nav className="mt-5 px-2 space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Dashboard</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Team</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Projects</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Calendar</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Reports</a>
      </nav>
    </div>
  </div>
  <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
</div>

      
    </>
  )
}
