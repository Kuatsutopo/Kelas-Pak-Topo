'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileText, Download, Calendar, ExternalLink, Play, Image as ImageIcon, RefreshCw } from 'lucide-react'

interface GoogleSheetItem {
  kategori: string
  judul: string
  link: string
  deskripsi: string
  gambar?: string
}

interface GoogleSheetsData {
  data: GoogleSheetItem[]
  groupedData: Record<string, GoogleSheetItem[]>
  total: number
  isDummyData?: boolean
}

interface GoogleSheetsComponentProps {
  searchTerm: string
}

export default function GoogleSheetsComponent({ searchTerm }: GoogleSheetsComponentProps) {
  const [sheetsData, setSheetsData] = useState<GoogleSheetsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchGoogleSheetsData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/googlesheets')
      
      if (!response.ok) {
        throw new Error('Failed to fetch Google Sheets data')
      }
      
      const data = await response.json()
      setSheetsData(data)
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error)
      setError('Gagal memuat data dari Google Sheets')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGoogleSheetsData()
  }, [])

  const filteredData = sheetsData?.data.filter(item =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  const getFileIcon = (kategori: string) => {
    switch(kategori.toLowerCase()) {
      case 'administrasi': return <FileText className="w-5 h-5 text-blue-500" />
      case 'materi': return <Download className="w-5 h-5 text-green-500" />
      case 'kegiatan': return <Calendar className="w-5 h-5 text-purple-500" />
      default: return <FileText className="w-5 h-5 text-gray-500" />
    }
  }

  const handleItemClick = (item: GoogleSheetItem) => {
    if (item.link.includes('youtube.com') || item.link.includes('youtu.be')) {
      window.open(item.link, '_blank')
    } else if (item.gambar) {
      window.open(item.link, '_blank')
    } else {
      window.open(item.link, '_blank')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-8 h-8 animate-spin text-teal-600" />
        <span className="ml-2 text-gray-600">Memuat data dari Google Sheets...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">{error}</div>
        <Button onClick={fetchGoogleSheetsData} className="bg-teal-600 hover:bg-teal-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Coba Lagi
        </Button>
      </div>
    )
  }

  if (!sheetsData || sheetsData.data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">Tidak ada data tersedia</div>
        <Button onClick={fetchGoogleSheetsData} className="bg-teal-600 hover:bg-teal-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Info Bar */}
      {sheetsData.isDummyData && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="text-yellow-800">
              <strong>Info:</strong> Menampilkan data contoh. Hubungi admin untuk mengatur Google Sheets URL.
            </div>
          </div>
        </div>
      )}

      {/* Refresh Button */}
      <div className="flex justify-end">
        <Button 
          onClick={fetchGoogleSheetsData} 
          variant="outline" 
          className="border-teal-600 text-teal-600 hover:bg-teal-50"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="semua" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-teal-100">
          <TabsTrigger value="semua" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
            Semua ({filteredData.length})
          </TabsTrigger>
          {Object.entries(sheetsData.groupedData).map(([kategori, items]) => (
            <TabsTrigger 
              key={kategori} 
              value={kategori.toLowerCase()} 
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              {kategori} ({items.length})
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="semua" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-teal-100">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    {getFileIcon(item.kategori)}
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {item.kategori}
                    </Badge>
                  </div>
                  
                  {item.gambar && (
                    <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img 
                        src={item.gambar} 
                        alt={item.judul}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <h4 className="font-semibold text-gray-800 mb-2">{item.judul}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.deskripsi}</p>
                  
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.kategori.toLowerCase() === 'kegiatan' && item.gambar ? (
                      <>
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Lihat Detail
                      </>
                    ) : item.link.includes('youtube.com') || item.link.includes('youtu.be') ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Tonton Video
                      </>
                    ) : item.kategori.toLowerCase() === 'materi' ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Unduh Materi
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Buka Dokumen
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {Object.entries(sheetsData.groupedData).map(([kategori, items]) => (
          <TabsContent key={kategori} value={kategori.toLowerCase()} className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items
                .filter(item => 
                  item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-teal-100">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      {getFileIcon(item.kategori)}
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                        {item.kategori}
                      </Badge>
                    </div>
                    
                    {item.gambar && (
                      <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <img 
                          src={item.gambar} 
                          alt={item.judul}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <h4 className="font-semibold text-gray-800 mb-2">{item.judul}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.deskripsi}</p>
                    
                    <Button 
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      onClick={() => handleItemClick(item)}
                    >
                      {item.kategori.toLowerCase() === 'kegiatan' && item.gambar ? (
                        <>
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Lihat Detail
                        </>
                      ) : item.link.includes('youtube.com') || item.link.includes('youtu.be') ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Tonton Video
                        </>
                      ) : item.kategori.toLowerCase() === 'materi' ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Unduh Materi
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Buka Dokumen
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}