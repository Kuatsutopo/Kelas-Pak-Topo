import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const administrasi = await db.administrasi.findMany({
      orderBy: {
        tanggalUpdate: 'desc'
      }
    })

    return NextResponse.json(administrasi)
  } catch (error) {
    console.error('Error fetching administrasi:', error)
    return NextResponse.json({ error: 'Failed to fetch administrasi' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { namaDokumen, kategori, linkDrive } = body

    if (!namaDokumen || !kategori || !linkDrive) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const administrasi = await db.administrasi.create({
      data: {
        namaDokumen,
        kategori,
        linkDrive,
        tanggalUpdate: new Date()
      }
    })

    return NextResponse.json(administrasi, { status: 201 })
  } catch (error) {
    console.error('Error creating administrasi:', error)
    return NextResponse.json({ error: 'Failed to create administrasi' }, { status: 500 })
  }
}