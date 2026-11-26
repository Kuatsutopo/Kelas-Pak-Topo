'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, FileText, Download, Calendar, Users, BookOpen, Home as HomeIcon, Settings, Menu, X, ExternalLink, Play, Image as ImageIcon, Plus, Edit, Trash2, Database } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import GoogleSheetsComponent from '@/components/GoogleSheetsComponent'

interface AdministrasiItem {
  id: string
  namaDokumen: string
  kategori: string
  linkDrive: string
  tanggalUpdate: string
}

interface KegiatanItem {
  id: string
  judul: string
  tanggal: string
  deskripsi: string
  urlFoto?: string
  urlVideo?: string
}

interface DownloadItem {
  id: string
  namaFile: string
  tipeFile: string
  urlDownload: string
  jumlahDiunduh: number
}

interface DashboardStats {
  totalAdministrasi: number
  totalKegiatan: number
  totalDownloads: number
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('semua')
  const [isAdmin, setIsAdmin] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // State for API data
  const [administrasi, setAdministrasi] = useState<AdministrasiItem[]>([])
  const [kegiatan, setKegiatan] = useState<KegiatanItem[]>([])
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    totalAdministrasi: 0,
    totalKegiatan: 0,
    totalDownloads: 0
  })
  const [loading, setLoading] = useState(true)

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminRes, kegiatanRes, downloadsRes, dashboardRes] = await Promise.all([
          fetch('/api/administrasi'),
          fetch('/api/kegiatan'),
          fetch('/api/downloads'),
          fetch('/api/dashboard')
        ])

        if (adminRes.ok) {
          const adminData = await adminRes.json()
          setAdministrasi(adminData)
        }

        if (kegiatanRes.ok) {
          const kegiatanData = await kegiatanRes.json()
          setKegiatan(kegiatanData)
        }

        if (downloadsRes.ok) {
          const downloadsData = await downloadsRes.json()
          setDownloads(downloadsData)
        }

        if (dashboardRes.ok) {
          const dashboardData = await dashboardRes.json()
          setDashboardStats(dashboardData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredAdministrasi = administrasi.filter(item =>
    item.namaDokumen.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredKegiatan = kegiatan.filter(item =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredDownloads = downloads.filter(item =>
    item.namaFile.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getFileIcon = (tipeFile: string) => {
    switch(tipeFile.toLowerCase()) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />
      case 'doc':
      case 'docx': return <FileText className="w-5 h-5 text-blue-500" />
      default: return <FileText className="w-5 h-5 text-gray-500" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // CRUD functions
  const handleAddAdministrasi = async () => {
    // TODO: Implement add administrasi modal/form
    alert('Fitur tambah administrasi akan segera hadir!')
  }

  const handleEditAdministrasi = async (id: string) => {
    // TODO: Implement edit administrasi modal/form
    alert('Fitur edit administrasi akan segera hadir!')
  }

  const handleDeleteAdministrasi = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus dokumen ini?')) {
      try {
        const response = await fetch(`/api/administrasi/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setAdministrasi(administrasi.filter(item => item.id !== id))
          setDashboardStats(prev => ({
            ...prev,
            totalAdministrasi: prev.totalAdministrasi - 1
          }))
        } else {
          alert('Gagal menghapus dokumen')
        }
      } catch (error) {
        console.error('Error deleting administrasi:', error)
        alert('Terjadi kesalahan saat menghapus dokumen')
      }
    }
  }

  const handleAddKegiatan = async () => {
    // TODO: Implement add kegiatan modal/form
    alert('Fitur tambah kegiatan akan segera hadir!')
  }

  const handleEditKegiatan = async (id: string) => {
    // TODO: Implement edit kegiatan modal/form
    alert('Fitur edit kegiatan akan segera hadir!')
  }

  const handleDeleteKegiatan = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus kegiatan ini?')) {
      try {
        const response = await fetch(`/api/kegiatan/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setKegiatan(kegiatan.filter(item => item.id !== id))
          setDashboardStats(prev => ({
            ...prev,
            totalKegiatan: prev.totalKegiatan - 1
          }))
        } else {
          alert('Gagal menghapus kegiatan')
        }
      } catch (error) {
        console.error('Error deleting kegiatan:', error)
        alert('Terjadi kesalahan saat menghapus kegiatan')
      }
    }
  }

  const handleAddDownload = async () => {
    // TODO: Implement add download modal/form
    alert('Fitur tambah materi akan segera hadir!')
  }

  const handleEditDownload = async (id: string) => {
    // TODO: Implement edit download modal/form
    alert('Fitur edit materi akan segera hadir!')
  }

  const handleDeleteDownload = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus materi ini?')) {
      try {
        const response = await fetch(`/api/downloads/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setDownloads(downloads.filter(item => item.id !== id))
        } else {
          alert('Gagal menghapus materi')
        }
      } catch (error) {
        console.error('Error deleting download:', error)
        alert('Terjadi kesalahan saat menghapus materi')
      }
    }
  }

  const handleDownloadClick = async (id: string, url: string) => {
    try {
      // Increment download count
      await fetch(`/api/downloads/${id}`, {
        method: 'PATCH'
      })
      
      // Update local state
      setDownloads(downloads.map(item => 
        item.id === id 
          ? { ...item, jumlahDiunduh: item.jumlahDiunduh + 1 }
          : item
      ))
      
      // Open download link
      window.open(url, '_blank')
    } catch (error) {
      console.error('Error incrementing download count:', error)
      // Still open the link even if count fails
      window.open(url, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Kelas 5 Pak Topo</h1>
                <p className="text-sm text-teal-100">SDN 1 Tinggarjaya</p>
              </div>
            </div>
            
            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-teal-700">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="space-y-4 mt-8">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => {
                      setIsAdmin(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <HomeIcon className="w-4 h-4 mr-2" />
                    Portal Publik
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => {
                      setIsAdmin(true)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Panel Admin
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-teal-700 ${!isAdmin ? 'bg-teal-700' : ''}`}
                onClick={() => setIsAdmin(false)}
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                Portal Publik
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-teal-700 ${isAdmin ? 'bg-teal-700' : ''}`}
                onClick={() => setIsAdmin(true)}
              >
                <Settings className="w-4 h-4 mr-2" />
                Panel Admin
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!isAdmin ? (
          // Portal Publik
          <div className="space-y-8">
            {/* Welcome Section */}
            <section className="text-center py-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Selamat Datang di Kelas 5 Pak Topo
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Portal informasi dan pembelajaran untuk siswa dan wali murid. 
                Akses jadwal, materi, dan kegiatan kelas dengan mudah.
              </p>
            </section>

            {/* Search Section */}
            <section className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari dokumen, materi, atau kegiatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg border-2 border-teal-200 focus:border-teal-500 rounded-xl"
                />
              </div>
            </section>

            {/* Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-teal-100">
                <TabsTrigger value="semua" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Semua
                </TabsTrigger>
                <TabsTrigger value="administrasi" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Administrasi
                </TabsTrigger>
                <TabsTrigger value="materi" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Materi
                </TabsTrigger>
                <TabsTrigger value="kegiatan" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  Kegiatan
                </TabsTrigger>
                <TabsTrigger value="googlesheets" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                  <Database className="w-4 h-4 mr-1" />
                  Google Sheets
                </TabsTrigger>
              </TabsList>

              <TabsContent value="semua" className="space-y-8 mt-8">
                <div className="grid gap-8">
                  {/* Administrasi Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-teal-600" />
                      Dokumen Administrasi
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredAdministrasi.map((item) => (
                        <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <FileText className="w-8 h-8 text-teal-600" />
                              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                                {item.kategori}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">{item.namaDokumen}</h4>
                            <p className="text-sm text-gray-500 mb-4">Update: {formatDate(item.tanggalUpdate)}</p>
                            <Button 
                              className="w-full bg-teal-600 hover:bg-teal-700"
                              onClick={() => window.open(item.linkDrive, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Buka Dokumen
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Downloads Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Download className="w-5 h-5 mr-2 text-teal-600" />
                      Materi Download
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredDownloads.map((item) => (
                        <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              {getFileIcon(item.tipeFile)}
                              <Badge variant="outline" className="text-gray-600">
                                {item.jumlahDiunduh} unduhan
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">{item.namaFile}</h4>
                            <p className="text-sm text-gray-500 mb-4">Tipe: {item.tipeFile}</p>
                            <Button 
                              className="w-full bg-teal-600 hover:bg-teal-700"
                              onClick={() => handleDownloadClick(item.id, item.urlDownload)}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Unduh File
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Kegiatan Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                      Galeri Kegiatan
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredKegiatan.map((item) => (
                        <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                          <CardContent className="p-4">
                            {item.urlFoto && (
                              <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                                <img 
                                  src={item.urlFoto} 
                                  alt={item.judul}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <h4 className="font-semibold text-gray-800 mb-2">{item.judul}</h4>
                            <p className="text-sm text-gray-500 mb-2">{formatDate(item.tanggal)}</p>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.deskripsi}</p>
                            {item.urlVideo && (
                              <Button 
                                variant="outline" 
                                className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                                onClick={() => window.open(item.urlVideo, '_blank')}
                              >
                                <Play className="w-4 h-4 mr-2" />
                                Lihat Video
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="administrasi" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredAdministrasi.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <FileText className="w-8 h-8 text-teal-600" />
                          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                            {item.kategori}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.namaDokumen}</h4>
                        <p className="text-sm text-gray-500 mb-4">Update: {formatDate(item.tanggalUpdate)}</p>
                        <Button 
                          className="w-full bg-teal-600 hover:bg-teal-700"
                          onClick={() => window.open(item.linkDrive, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Buka Dokumen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="materi" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDownloads.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          {getFileIcon(item.tipeFile)}
                          <Badge variant="outline" className="text-gray-600">
                            {item.jumlahDiunduh} unduhan
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.namaFile}</h4>
                        <p className="text-sm text-gray-500 mb-4">Tipe: {item.tipeFile}</p>
                        <Button 
                          className="w-full bg-teal-600 hover:bg-teal-700"
                          onClick={() => window.open(item.urlDownload, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Unduh File
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="kegiatan" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredKegiatan.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow border-teal-100">
                      <CardContent className="p-4">
                        {item.urlFoto && (
                          <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                            <img 
                              src={item.urlFoto} 
                              alt={item.judul}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <h4 className="font-semibold text-gray-800 mb-2">{item.judul}</h4>
                        <p className="text-sm text-gray-500 mb-2">{formatDate(item.tanggal)}</p>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.deskripsi}</p>
                        {item.urlVideo && (
                          <Button 
                            variant="outline" 
                            className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                            onClick={() => window.open(item.urlVideo, '_blank')}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Lihat Video
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="googlesheets" className="mt-8">
                <GoogleSheetsComponent searchTerm={searchTerm} />
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          // Panel Admin
          <div className="space-y-8">
            <div className="text-center py-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Panel Admin - Pak Topo
              </h2>
              <p className="text-gray-600">
                Kelola konten kelas, dokumen administrasi, dan kegiatan siswa
              </p>
            </div>

            {/* Dashboard Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-teal-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Dokumen Administrasi</p>
                      <p className="text-2xl font-bold text-gray-800">{dashboardStats.totalAdministrasi}</p>
                    </div>
                    <FileText className="w-10 h-10 text-teal-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Jumlah Kegiatan</p>
                      <p className="text-2xl font-bold text-gray-800">{dashboardStats.totalKegiatan}</p>
                    </div>
                    <Calendar className="w-10 h-10 text-teal-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Materi</p>
                      <p className="text-2xl font-bold text-gray-800">{downloads.length}</p>
                    </div>
                    <Download className="w-10 h-10 text-teal-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Management Tables */}
            <div className="space-y-8">
              {/* Administrasi Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-teal-600" />
                    Kelola Administrasi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddAdministrasi}>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Dokumen
                    </Button>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-700">Nama Dokumen</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Kategori</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Update</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {administrasi.map((item) => (
                            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="p-3">{item.namaDokumen}</td>
                              <td className="p-3">
                                <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                                  {item.kategori}
                                </Badge>
                              </td>
                              <td className="p-3 text-sm text-gray-600">{formatDate(item.tanggalUpdate)}</td>
                              <td className="p-3">
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm" onClick={() => handleEditAdministrasi(item.id)}>
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteAdministrasi(item.id)}>
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kegiatan Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                    Kelola Kegiatan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddKegiatan}>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Kegiatan
                    </Button>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-700">Judul Kegiatan</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Tanggal</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Deskripsi</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {kegiatan.map((item) => (
                            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="p-3">{item.judul}</td>
                              <td className="p-3 text-sm text-gray-600">{formatDate(item.tanggal)}</td>
                              <td className="p-3 text-sm text-gray-600 line-clamp-2">{item.deskripsi}</td>
                              <td className="p-3">
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm" onClick={() => handleEditKegiatan(item.id)}>
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteKegiatan(item.id)}>
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Downloads Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="w-5 h-5 mr-2 text-teal-600" />
                    Kelola Materi Download
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddDownload}>
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Materi
                    </Button>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-700">Nama File</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Tipe</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Diunduh</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {downloads.map((item) => (
                            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="p-3">{item.namaFile}</td>
                              <td className="p-3">
                                <Badge variant="outline">{item.tipeFile}</Badge>
                              </td>
                              <td className="p-3 text-sm text-gray-600">{item.jumlahDiunduh} kali</td>
                              <td className="p-3">
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm" onClick={() => handleEditDownload(item.id)}>
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteDownload(item.id)}>
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6282137752709" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}