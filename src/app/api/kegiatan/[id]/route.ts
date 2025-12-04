import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { judul, tanggal, deskripsi, urlFoto, urlVideo } = body

    const kegiatan = await db.kegiatan.update({
      where: { id },
      data: {
        ...(judul && { judul }),
        ...(tanggal && { tanggal: new Date(tanggal) }),
        ...(deskripsi && { deskripsi }),
        ...(urlFoto !== undefined && { urlFoto }),
        ...(urlVideo !== undefined && { urlVideo })
      }
    })

    return NextResponse.json(kegiatan)
  } catch (error) {
    console.error('Error updating kegiatan:', error)
    return NextResponse.json({ error: 'Failed to update kegiatan' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params

    await db.kegiatan.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Kegiatan deleted successfully' })
  } catch (error) {
    console.error('Error deleting kegiatan:', error)
    return NextResponse.json({ error: 'Failed to delete kegiatan' }, { status: 500 })
  }
}