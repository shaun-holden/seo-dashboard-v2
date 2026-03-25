import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { keywords } from './schema'

const client = postgres(process.env.DATABASE_URL!)
const db = drizzle(client)

const seedKeywords = [
  { keyword: 'gymnastics training program',  volume: 8100,  difficulty: 42, position: 8,  trend: 'up'   },
  { keyword: 'youth gymnastics near me',     volume: 12400, difficulty: 38, position: 14, trend: 'up'   },
  { keyword: 'competitive gymnastics gym',   volume: 5400,  difficulty: 61, position: 22, trend: 'down' },
  { keyword: 'gymnastics coaching tips',     volume: 3200,  difficulty: 29, position: 5,  trend: 'up'   },
  { keyword: 'uneven bars technique',        volume: 2900,  difficulty: 33, position: 11, trend: 'flat' },
  { keyword: 'vault gymnastics drills',      volume: 1800,  difficulty: 27, position: 3,  trend: 'up'   },
  { keyword: 'elite gymnastics program',     volume: 4400,  difficulty: 55, position: 18, trend: 'down' },
  { keyword: 'gymnastics camp georgia',      volume: 2100,  difficulty: 31, position: 7,  trend: 'up'   },
]

async function seed() {
  console.log('Seeding database...')
  await db.insert(keywords).values(seedKeywords)
  console.log('Done!')
  process.exit(0)
}

seed()