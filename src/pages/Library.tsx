import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Book, 
  Download,
  ExternalLink,
  Clock,
  MapPin,
  Bookmark,
  Filter
} from 'lucide-react'

export function Library() {
  const [searchQuery, setSearchQuery] = useState('')

  const digitalResources = [
    {
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      type: 'eBook',
      format: 'PDF',
      size: '15.2 MB',
      available: true,
      category: 'Computer Science'
    },
    {
      title: 'Calculus: Early Transcendentals',
      author: 'James Stewart',
      type: 'eBook',
      format: 'PDF',
      size: '28.5 MB',
      available: true,
      category: 'Mathematics'
    },
    {
      title: 'Physics for Scientists and Engineers',
      author: 'Raymond A. Serway',
      type: 'eBook',
      format: 'PDF',
      size: '45.8 MB',
      available: false,
      category: 'Physics'
    },
    {
      title: 'Psychology: The Science of Mind and Behaviour',
      author: 'Michael W. Passer',
      type: 'eBook',
      format: 'PDF',
      size: '32.1 MB',
      available: true,
      category: 'Psychology'
    }
  ]

  const databases = [
    {
      name: 'IEEE Xplore Digital Library',
      description: 'Engineering and technology research papers',
      access: 'Full Access',
      subjects: ['Engineering', 'Computer Science', 'Technology']
    },
    {
      name: 'JSTOR Academic',
      description: 'Academic journals, books, and primary sources',
      access: 'Full Access',
      subjects: ['Arts', 'Sciences', 'Literature']
    },
    {
      name: 'PubMed',
      description: 'Biomedical and life science literature',
      access: 'Free Access',
      subjects: ['Medicine', 'Biology', 'Health Sciences']
    },
    {
      name: 'SpringerLink',
      description: 'Scientific, technical and medical content',
      access: 'Limited Access',
      subjects: ['Science', 'Technology', 'Medicine']
    }
  ]

  const libraryHours = [
    { day: 'Monday - Thursday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 10:00 PM' }
  ]

  const studySpaces = [
    {
      name: 'Silent Study Area',
      floor: '2nd Floor',
      capacity: '50 seats',
      features: ['Individual desks', 'Power outlets', 'No talking'],
      availability: 'Available'
    },
    {
      name: 'Group Study Rooms',
      floor: '3rd Floor',
      capacity: '4-8 people',
      features: ['Whiteboards', 'Projectors', 'Reservable'],
      availability: '3 rooms available'
    },
    {
      name: 'Computer Lab',
      floor: '1st Floor',
      capacity: '30 computers',
      features: ['Software access', 'Printing', 'Scanning'],
      availability: 'Available'
    },
    {
      name: 'Collaborative Learning Space',
      floor: '4th Floor',
      capacity: '20 seats',
      features: ['Flexible seating', 'Discussion allowed', 'Presentation screens'],
      availability: 'Busy'
    }
  ]

  const recentlyAccessed = [
    { title: 'Data Structures and Algorithms', type: 'eBook', date: '2 days ago' },
    { title: 'Linear Algebra Notes', type: 'PDF', date: '1 week ago' },
    { title: 'Research Methods in Psychology', type: 'Article', date: '1 week ago' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Library</h1>
        <p className="text-gray-600 mt-1">Access digital resources, study spaces, and library services</p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search books, articles, databases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Books Borrowed</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Book className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Due This Week</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Saved Items</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Bookmark className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Room</p>
                <p className="text-sm font-bold text-green-600">Available</p>
              </div>
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Library Content */}
      <Tabs defaultValue="resources" className="space-y-4">
        <TabsList>
          <TabsTrigger value="resources">Digital Resources</TabsTrigger>
          <TabsTrigger value="databases">Databases</TabsTrigger>
          <TabsTrigger value="spaces">Study Spaces</TabsTrigger>
          <TabsTrigger value="hours">Hours & Info</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Course Materials</CardTitle>
                  <CardDescription>Digital textbooks and resources for your courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {digitalResources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Book className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium text-gray-900">{resource.title}</h4>
                            <p className="text-sm text-gray-600">{resource.author}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                              <span className="text-xs text-gray-500">{resource.format} • {resource.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {resource.available ? (
                            <>
                              <Button size="sm" variant="outline">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View
                              </Button>
                              <Button size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </>
                          ) : (
                            <Badge variant="destructive">Unavailable</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Recently Accessed</CardTitle>
                  <CardDescription>Your recent library activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentlyAccessed.map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <Badge variant="outline" className="text-xs">{item.type}</Badge>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View All History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="databases" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {databases.map((database, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{database.name}</CardTitle>
                      <CardDescription>{database.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={database.access === 'Full Access' ? 'default' : 
                              database.access === 'Free Access' ? 'secondary' : 'outline'}
                    >
                      {database.access}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Subject Areas:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {database.subjects.map((subject, subjectIndex) => (
                          <Badge key={subjectIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Database
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="spaces" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studySpaces.map((space, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{space.name}</CardTitle>
                      <CardDescription>{space.floor} • {space.capacity}</CardDescription>
                    </div>
                    <Badge 
                      variant={space.availability === 'Available' ? 'default' : 
                              space.availability.includes('available') ? 'secondary' : 'destructive'}
                    >
                      {space.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Features:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {space.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={space.availability === 'Busy'}
                      variant={space.availability === 'Busy' ? 'outline' : 'default'}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {space.availability === 'Busy' ? 'Currently Busy' : 'Reserve Space'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hours" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Library Hours</CardTitle>
                <CardDescription>Current operating hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {libraryHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Extended Hours:</strong> During finals week (Dec 16-20), the library will be open 24/7.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Services</CardTitle>
                <CardDescription>Get help and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">Reference Desk</h4>
                    <p className="text-sm text-gray-600">1st Floor • (555) 123-4567</p>
                    <p className="text-xs text-gray-500">Research assistance and general help</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">IT Support</h4>
                    <p className="text-sm text-gray-600">Computer Lab • (555) 123-4568</p>
                    <p className="text-xs text-gray-500">Technical support and printing</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">Interlibrary Loans</h4>
                    <p className="text-sm text-gray-600">2nd Floor • ill@university.edu</p>
                    <p className="text-xs text-gray-500">Request materials from other libraries</p>
                  </div>
                </div>
                
                <Button className="w-full">
                  Contact Library Staff
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}