'use client'

import { useEffect, useState } from 'react'

type Keyword = {
  id: number
  keyword: string
  volume: number
  difficulty: number
  position: number
  trend: string
}

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
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/keywords')
      .then(res => res.json())
      .then(data => {
        setKeywords(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-white font-semibold">Top Keywords</h2>
        <span className="text-gray-500 text-xs">{keywords.length} keywords</span>
      </div>

      {loading ? (
        <div className="px-6 py-8 text-gray-500 text-sm">Loading keywords...</div>
      ) : (
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
                key={row.id}
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
      )}
    </div>
  )
}