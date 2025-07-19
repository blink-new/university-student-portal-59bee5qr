import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Users, 
  Clock, 
  MapPin,
  FileText,
  Video,
  Download,
  Calendar
} from 'lucide-react'

export function Courses() {
  const currentCourses = [
    {
      id: 1,
      name: 'Computer Science 101',
      code: 'CS 101',
      instructor: 'Dr. Sarah Johnson',
      credits: 3,
      schedule: 'MWF 9:00-10:00 AM',
      location: 'Room 204',
      progress: 75,
      nextAssignment: 'Final Project',
      dueDate: '2024-12-15',
      materials: 12,
      announcements: 3
    },
    {
      id: 2,
      name: 'Calculus I',
      code: 'MATH 151',
      instructor: 'Prof. Michael Chen',
      credits: 4,
      schedule: 'TTh 11:00-12:30 PM',
      location: 'Room 156',
      progress: 82,
      nextAssignment: 'Problem Set 8',
      dueDate: '2024-12-10',
      materials: 8,
      announcements: 1
    },
    {
      id: 3,
      name: 'Physics Laboratory',
      code: 'PHYS 201L',
      instructor: 'Dr. Emily Rodriguez',
      credits: 1,
      schedule: 'W 2:00-5:00 PM',
      location: 'Lab 3',
      progress: 90,
      nextAssignment: 'Lab Report 5',
      dueDate: '2024-12-08',
      materials: 15,
      announcements: 2
    },
    {
      id: 4,
      name: 'English Composition',
      code: 'ENG 101',
      instructor: 'Prof. David Wilson',
      credits: 3,
      schedule: 'TTh 2:00-3:30 PM',
      location: 'Room 89',
      progress: 68,
      nextAssignment: 'Research Paper',
      dueDate: '2024-12-20',
      materials: 6,
      announcements: 0
    },
    {
      id: 5,
      name: 'Introduction to Psychology',
      code: 'PSY 101',
      instructor: 'Dr. Lisa Thompson',
      credits: 3,
      schedule: 'MWF 1:00-2:00 PM',
      location: 'Room 301',
      progress: 85,
      nextAssignment: 'Chapter 12 Quiz',
      dueDate: '2024-12-12',
      materials: 10,
      announcements: 1
    }
  ]

  const courseResources = [
    { name: 'Lecture Slides - Week 12', type: 'PDF', size: '2.4 MB', date: '2 days ago' },
    { name: 'Assignment Guidelines', type: 'DOC', size: '156 KB', date: '1 week ago' },
    { name: 'Recorded Lecture - Nov 28', type: 'Video', size: '245 MB', date: '1 week ago' },
    { name: 'Reading List - Chapter 10', type: 'PDF', size: '89 KB', date: '2 weeks ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="text-gray-600 mt-1">Manage your enrolled courses and access materials</p>
      </div>

      {/* Course Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Credit Hours</p>
                <p className="text-2xl font-bold">14</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Progress</p>
                <p className="text-2xl font-bold">80%</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Due This Week</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Tabs */}
      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span>{course.code}</span>
                        <Badge variant="secondary">{course.credits} Credits</Badge>
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{course.progress}% Complete</p>
                      <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{course.location}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">Next Assignment:</p>
                    <p className="text-sm text-gray-600">{course.nextAssignment}</p>
                    <p className="text-xs text-red-600 mt-1">Due: {course.dueDate}</p>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {course.materials} Materials
                      </span>
                      {course.announcements > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {course.announcements} New
                        </Badge>
                      )}
                    </div>
                    <Button size="sm">View Course</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Courses</CardTitle>
              <CardDescription>Your academic history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No completed courses to display yet.</p>
                <p className="text-sm">Completed courses will appear here at the end of each semester.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>Download materials and access course content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courseResources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      {resource.type === 'Video' ? (
                        <Video className="h-5 w-5 text-blue-600" />
                      ) : (
                        <FileText className="h-5 w-5 text-gray-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{resource.name}</p>
                        <p className="text-sm text-gray-600">{resource.size} • {resource.date}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}