import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const downloads = await db.download.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(downloads)
  } catch (error) {
    console.error('Error fetching downloads:', error)
    return NextResponse.json({ error: 'Failed to fetch downloads' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { namaFile, tipeFile, urlDownload } = body

    if (!namaFile || !tipeFile || !urlDownload) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const download = await db.download.create({
      data: {
        namaFile,
        tipeFile,
        urlDownload,
        jumlahDiunduh: 0
      }
    })

    return NextResponse.json(download, { status: 201 })
  } catch (error) {
    console.error('Error creating download:', error)
    return NextResponse.json({ error: 'Failed to create download' }, { status: 500 })
  }
}