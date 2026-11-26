import { NextRequest, NextResponse } from 'next/server'

// Google Sheets URL - dapat diubah sesuai kebutuhan
const SHEET_URL = process.env.GOOGLE_SHEETS_URL || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT/example/pub?output=csv'

interface GoogleSheetItem {
  kategori: string
  judul: string
  link: string
  deskripsi: string
  gambar?: string
}

export async function GET() {
  try {
    // Fetch data dari Google Sheets (CSV format)
    const response = await fetch(SHEET_URL, {
      next: { revalidate: 300 } // Cache for 5 minutes
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch Google Sheets data')
    }

    const csvText = await response.text()
    
    // Parse CSV
    const lines = csvText.split('\n').filter(line => line.trim())
    if (lines.length < 2) {
      return NextResponse.json({ data: [], groupedData: {}, total: 0 })
    }

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
    const data: GoogleSheetItem[] = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim())
      if (values.length >= headers.length) {
        const item: any = {}
        headers.forEach((header, index) => {
          item[header] = values[index] || ''
        })
        data.push(item as GoogleSheetItem)
      }
    }

    // Group data by kategori
    const groupedData = data.reduce((acc, item) => {
      const kategori = item.kategori || 'Lainnya'
      if (!acc[kategori]) {
        acc[kategori] = []
      }
      acc[kategori].push(item)
      return acc
    }, {} as Record<string, GoogleSheetItem[]>)

    return NextResponse.json({
      data,
      groupedData,
      total: data.length
    })
  } catch (error) {
    console.error('Error fetching Google Sheets:', error)
    
    // Return dummy data jika gagal fetch
    const dummyData: GoogleSheetItem[] = [
      {
        kategori: 'Administrasi',
        judul: 'Jadwal Pelajaran Semester 1',
        link: 'https://drive.google.com/example',
        deskripsi: 'Jadwal pelajaran lengkap untuk semester 1'
      },
      {
        kategori: 'Materi',
        judul: 'Bank Soal Matematika',
        link: 'https://drive.google.com/example2',
        deskripsi: 'Kumpulan soal matematika untuk latihan'
      },
      {
        kategori: 'Kegiatan',
        judul: 'Perayaan Hari Kemerdekaan',
        link: 'https://drive.google.com/example3',
        deskripsi: 'Dokumentasi kegiatan 17 Agustus',
        gambar: 'https://picsum.photos/seed/kegiatan1/400/300.jpg'
      }
    ]

    const groupedData = dummyData.reduce((acc, item) => {
      const kategori = item.kategori
      if (!acc[kategori]) {
        acc[kategori] = []
      }
      acc[kategori].push(item)
      return acc
    }, {} as Record<string, GoogleSheetItem[]>)

    return NextResponse.json({
      data: dummyData,
      groupedData,
      total: dummyData.length,
      isDummyData: true
    })
  }
}