export default function CardSkeleton() {
  return (
    <div className="bg-indigo-50 rounded-lg shadow-lg p-4 max-w-sm w-full mx-auto animate-pulse">
      <div className="flex">
        <div className="bg-slate-200 rounded-md w-24 h-14"></div>
        <div className="flex-1 space-y-4 ml-4">
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          <div className="flex gap-x-2">
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}