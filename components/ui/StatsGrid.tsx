interface Stat {
  number: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export default function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 lg:gap-6`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-5 lg:p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md hover:border-red-200 transition-all duration-200"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1">
            {stat.number}
          </div>
          <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
