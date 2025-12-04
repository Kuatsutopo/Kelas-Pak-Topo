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
    const { namaDokumen, kategori, linkDrive } = body

    const administrasi = await db.administrasi.update({
      where: { id },
      data: {
        ...(namaDokumen && { namaDokumen }),
        ...(kategori && { kategori }),
        ...(linkDrive && { linkDrive }),
        tanggalUpdate: new Date()
      }
    })

    return NextResponse.json(administrasi)
  } catch (error) {
    console.error('Error updating administrasi:', error)
    return NextResponse.json({ error: 'Failed to update administrasi' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params

    await db.administrasi.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Administrasi deleted successfully' })
  } catch (error) {
    console.error('Error deleting administrasi:', error)
    return NextResponse.json({ error: 'Failed to delete administrasi' }, { status: 500 })
  }
}