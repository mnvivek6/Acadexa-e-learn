import React from 'react'

function MonthlySale() {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
    <div className="flex flex-row bg-white shadow rounded-xl p-4 h-20">
      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
      <svg className="w-6 h-6 text-gray-800 dark:text-azelea" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 20">
        <path d="M18.972.863a.913.913 0 0 0-.041-.207.956.956 0 0 0-.107-.19 1.01 1.01 0 0 0-.065-.116c-.008-.01-.02-.013-.028-.022a1.008 1.008 0 0 0-.174-.137 1.085 1.085 0 0 0-.141-.095 1.051 1.051 0 0 0-.171-.047.985.985 0 0 0-.207-.041C18.025.007 18.014 0 18 0h-3.207a1 1 0 1 0 0 2h.5l-4.552 3.9-3.5-.874a1 1 0 0 0-.867.189l-5 4a1 1 0 0 0 1.25 1.562L7.238 7.09l3.52.88a1 1 0 0 0 .892-.211L17 3.173v1.034a1 1 0 0 0 2 0V1a.9.9 0 0 0-.028-.137ZM13.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm.24 4.591a3.112 3.112 0 0 1 1.935 1.374 2.036 2.036 0 0 1 .234 1.584 2.255 2.255 0 0 1-1.374 1.469.982.982 0 0 1-1.953.09 2.943 2.943 0 0 1-1.475-.92 1 1 0 0 1 1.536-1.283.953.953 0 0 0 .507.29.778.778 0 0 0 .831-.18 1.108 1.108 0 0 0-.714-.481 3.105 3.105 0 0 1-1.934-1.374 2.042 2.042 0 0 1-.233-1.584 2.264 2.264 0 0 1 1.45-1.493v-.03a1 1 0 0 1 2 0c.517.159.98.457 1.337.862a1.002 1.002 0 1 1-1.524 1.3.962.962 0 0 0-.507-.286.775.775 0 0 0-.829.18 1.113 1.113 0 0 0 .713.482ZM6 20a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"/>
       </svg>
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <div  className="text-sm  font-bold text-grey">This month</div>
        <div className="font-bold text-lg">190</div>
      </div>
    </div>
  </div>
  )
}

export default MonthlySale