import { db } from '@/lib/db'

async function seedData() {
  try {
    // Check if data already exists
    const existingAdmin = await db.administrasi.count()
    const existingKegiatan = await db.kegiatan.count()
    const existingDownloads = await db.download.count()

    if (existingAdmin > 0 || existingKegiatan > 0 || existingDownloads > 0) {
      console.log('Data already exists, skipping seeding')
      return
    }

    // Seed Administrasi
    await db.administrasi.createMany({
      data: [
        {
          namaDokumen: 'Jadwal Pelajaran Semester 1',
          kategori: 'Jadwal',
          linkDrive: 'https://drive.google.com/example-jadwal',
          tanggalUpdate: new Date('2024-01-15')
        },
        {
          namaDokumen: 'Daftar Hadir Siswa',
          kategori: 'Absensi',
          linkDrive: 'https://drive.google.com/example-absensi',
          tanggalUpdate: new Date('2024-01-14')
        },
        {
          namaDokumen: 'Silabus Matematika',
          kategori: 'Perangkat Ajar',
          linkDrive: 'https://drive.google.com/example-silabus',
          tanggalUpdate: new Date('2024-01-13')
        }
      ]
    })

    // Seed Kegiatan
    await db.kegiatan.createMany({
      data: [
        {
          judul: 'Perayaan Hari Kemerdekaan',
          tanggal: new Date('2024-08-17'),
          deskripsi: 'Kegiatan memperingati Hari Kemerdekaan RI dengan berbagai lomba dan penampilan siswa.',
          urlFoto: 'https://picsum.photos/seed/kegiatan1/400/300.jpg',
          urlVideo: 'https://youtube.com/example1'
        },
        {
          judul: 'Study Tour ke Museum',
          tanggal: new Date('2024-09-20'),
          deskripsi: 'Kunjungan edukatif ke museum untuk menambah wawasan sejarah.',
          urlFoto: 'https://picsum.photos/seed/kegiatan2/400/300.jpg'
        },
        {
          judul: 'Lomba Pramuka',
          tanggal: new Date('2024-10-05'),
          deskripsi: 'Lomba kepramukaan antar kelas untuk meningkatkan kerjasama tim.',
          urlFoto: 'https://picsum.photos/seed/kegiatan3/400/300.jpg'
        }
      ]
    })

    // Seed Downloads
    await db.download.createMany({
      data: [
        {
          namaFile: 'Bank Soal Matematika',
          tipeFile: 'PDF',
          urlDownload: 'https://example.com/soal-mtk.pdf',
          jumlahDiunduh: 45
        },
        {
          namaFile: 'PR IPA Semester 1',
          tipeFile: 'DOC',
          urlDownload: 'https://example.com/pr-ipa.doc',
          jumlahDiunduh: 32
        },
        {
          namaFile: 'Modul Bahasa Indonesia',
          tipeFile: 'PDF',
          urlDownload: 'https://example.com/modul-bindo.pdf',
          jumlahDiunduh: 28
        },
        {
          namaFile: 'Latihan Soal IPS',
          tipeFile: 'PDF',
          urlDownload: 'https://example.com/soal-ips.pdf',
          jumlahDiunduh: 19
        }
      ]
    })

    console.log('Data seeding completed successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}

seedData()