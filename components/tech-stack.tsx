export default function TechStack() {
  const items = [{ name: "Tekla Structures" }, { name: "SDS/2" }, { name: "AutoCAD" }, { name: "Bluebeam Revu" }]
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <h3 className="text-xl font-semibold text-slate-900">Software Expertise</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-6 text-slate-500 hover:text-slate-900 transition-colors"
          >
            {it.name}
          </div>
        ))}
      </div>
    </div>
  )
}
