import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const kegiatan = await db.kegiatan.findMany({
      orderBy: {
        tanggal: 'desc'
      }
    })

    return NextResponse.json(kegiatan)
  } catch (error) {
    console.error('Error fetching kegiatan:', error)
    return NextResponse.json({ error: 'Failed to fetch kegiatan' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { judul, tanggal, deskripsi, urlFoto, urlVideo } = body

    if (!judul || !tanggal || !deskripsi) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const kegiatan = await db.kegiatan.create({
      data: {
        judul,
        tanggal: new Date(tanggal),
        deskripsi,
        urlFoto,
        urlVideo
      }
    })

    return NextResponse.json(kegiatan, { status: 201 })
  } catch (error) {
    console.error('Error creating kegiatan:', error)
    return NextResponse.json({ error: 'Failed to create kegiatan' }, { status: 500 })
  }
}