import { db } from '@/lib/db'
import { keywords } from '@/lib/schema'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await db.select().from(keywords)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch keywords' }, { status: 500 })
  }
}