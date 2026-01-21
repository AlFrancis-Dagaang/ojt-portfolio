export default function StatusLegend() {
  return (
    <div className="flex flex-wrap gap-6 items-center text-sm text-gray-700 mb-6">
      <LegendItem color="bg-green-500" label="Done" />
      <LegendItem color="bg-red-500" label="Late / Overdue" />
      <LegendItem color="bg-yellow-400" label="Near Deadline" />
      <LegendItem color="bg-gray-300" label="Neutral" />
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}
