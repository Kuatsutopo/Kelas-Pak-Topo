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
    const { namaFile, tipeFile, urlDownload } = body

    const download = await db.download.update({
      where: { id },
      data: {
        ...(namaFile && { namaFile }),
        ...(tipeFile && { tipeFile }),
        ...(urlDownload && { urlDownload })
      }
    })

    return NextResponse.json(download)
  } catch (error) {
    console.error('Error updating download:', error)
    return NextResponse.json({ error: 'Failed to update download' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params

    await db.download.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Download deleted successfully' })
  } catch (error) {
    console.error('Error deleting download:', error)
    return NextResponse.json({ error: 'Failed to delete download' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params

    // Increment download count
    const download = await db.download.update({
      where: { id },
      data: {
        jumlahDiunduh: {
          increment: 1
        }
      }
    })

    return NextResponse.json(download)
  } catch (error) {
    console.error('Error incrementing download count:', error)
    return NextResponse.json({ error: 'Failed to increment download count' }, { status: 500 })
  }
}