const keywords = [
  { keyword: 'gymnastics training program',  volume: 8100,  difficulty: 42, position: 8,  trend: 'up'   },
  { keyword: 'youth gymnastics near me',     volume: 12400, difficulty: 38, position: 14, trend: 'up'   },
  { keyword: 'competitive gymnastics gym',   volume: 5400,  difficulty: 61, position: 22, trend: 'down' },
  { keyword: 'gymnastics coaching tips',     volume: 3200,  difficulty: 29, position: 5,  trend: 'up'   },
  { keyword: 'uneven bars technique',        volume: 2900,  difficulty: 33, position: 11, trend: 'flat' },
  { keyword: 'vault gymnastics drills',      volume: 1800,  difficulty: 27, position: 3,  trend: 'up'   },
  { keyword: 'elite gymnastics program',     volume: 4400,  difficulty: 55, position: 18, trend: 'down' },
  { keyword: 'gymnastics camp georgia',      volume: 2100,  difficulty: 31, position: 7,  trend: 'up'   },
]

function DifficultyBadge({ score }: { score: number }) {
  const color =
    score < 35 ? 'bg-green-900 text-green-400' :
    score < 55 ? 'bg-yellow-900 text-yellow-400' :
                 'bg-red-900 text-red-400'
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      {score}
    </span>
  )
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up')   return <span className="text-green-400 text-sm">↑</span>
  if (trend === 'down') return <span className="text-red-400 text-sm">↓</span>
  return <span className="text-gray-500 text-sm">→</span>
}

export default function KeywordTable() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-white font-semibold">Top Keywords</h2>
        <span className="text-gray-500 text-xs">{keywords.length} keywords</span>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-6 py-3">Keyword</th>
            <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-6 py-3">Volume</th>
            <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-6 py-3">Difficulty</th>
            <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-6 py-3">Position</th>
            <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-6 py-3">Trend</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((row, i) => (
            <tr
              key={row.keyword}
              className={`border-b border-gray-800 hover:bg-gray-800 transition-colors ${
                i === keywords.length - 1 ? 'border-0' : ''
              }`}
            >
              <td className="px-6 py-4 text-white text-sm font-medium">{row.keyword}</td>
              <td className="px-6 py-4 text-gray-300 text-sm">{row.volume.toLocaleString()}</td>
              <td className="px-6 py-4"><DifficultyBadge score={row.difficulty} /></td>
              <td className="px-6 py-4 text-gray-300 text-sm">#{row.position}</td>
              <td className="px-6 py-4"><TrendIcon trend={row.trend} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}