export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer Circle */}
        <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
        
        {/* Animated Inner Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent rounded-full animate-spin 
          border-t-blue-500 border-r-blue-500 backdrop-blur-[1px]">
          <div className="absolute inset-0 m-auto w-12 h-12 border-4 border-transparent 
            border-t-blue-300 border-r-blue-300 rounded-full animate-spin reverse-slow"></div>
        </div>

        {/* Optional: Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full 
          transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}