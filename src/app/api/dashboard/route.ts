import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const [totalAdministrasi, totalKegiatan, totalDownloads] = await Promise.all([
      db.administrasi.count(),
      db.kegiatan.count(),
      db.download.aggregate({
        _sum: {
          jumlahDiunduh: true
        }
      })
    ])

    return NextResponse.json({
      totalAdministrasi,
      totalKegiatan,
      totalDownloads: totalDownloads._sum.jumlahDiunduh || 0
    })
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json({ error: 'Failed to fetch dashboard stats' }, { status: 500 })
  }
}