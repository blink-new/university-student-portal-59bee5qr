import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter
} from 'lucide-react'

export function Schedule() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const weeklySchedule = [
    {
      day: 'Monday',
      date: '2024-12-02',
      classes: [
        {
          name: 'Computer Science 101',
          code: 'CS 101',
          time: '9:00 - 10:00 AM',
          location: 'Room 204',
          instructor: 'Dr. Sarah Johnson',
          type: 'Lecture'
        },
        {
          name: 'Introduction to Psychology',
          code: 'PSY 101',
          time: '1:00 - 2:00 PM',
          location: 'Room 301',
          instructor: 'Dr. Lisa Thompson',
          type: 'Lecture'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: '2024-12-03',
      classes: [
        {
          name: 'Calculus I',
          code: 'MATH 151',
          time: '11:00 - 12:30 PM',
          location: 'Room 156',
          instructor: 'Prof. Michael Chen',
          type: 'Lecture'
        },
        {
          name: 'English Composition',
          code: 'ENG 101',
          time: '2:00 - 3:30 PM',
          location: 'Room 89',
          instructor: 'Prof. David Wilson',
          type: 'Seminar'
        }
      ]
    },
    {
      day: 'Wednesday',
      date: '2024-12-04',
      classes: [
        {
          name: 'Computer Science 101',
          code: 'CS 101',
          time: '9:00 - 10:00 AM',
          location: 'Room 204',
          instructor: 'Dr. Sarah Johnson',
          type: 'Lecture'
        },
        {
          name: 'Introduction to Psychology',
          code: 'PSY 101',
          time: '1:00 - 2:00 PM',
          location: 'Room 301',
          instructor: 'Dr. Lisa Thompson',
          type: 'Lecture'
        },
        {
          name: 'Physics Laboratory',
          code: 'PHYS 201L',
          time: '2:00 - 5:00 PM',
          location: 'Lab 3',
          instructor: 'Dr. Emily Rodriguez',
          type: 'Lab'
        }
      ]
    },
    {
      day: 'Thursday',
      date: '2024-12-05',
      classes: [
        {
          name: 'Calculus I',
          code: 'MATH 151',
          time: '11:00 - 12:30 PM',
          location: 'Room 156',
          instructor: 'Prof. Michael Chen',
          type: 'Lecture'
        },
        {
          name: 'English Composition',
          code: 'ENG 101',
          time: '2:00 - 3:30 PM',
          location: 'Room 89',
          instructor: 'Prof. David Wilson',
          type: 'Seminar'
        }
      ]
    },
    {
      day: 'Friday',
      date: '2024-12-06',
      classes: [
        {
          name: 'Computer Science 101',
          code: 'CS 101',
          time: '9:00 - 10:00 AM',
          location: 'Room 204',
          instructor: 'Dr. Sarah Johnson',
          type: 'Lecture'
        },
        {
          name: 'Introduction to Psychology',
          code: 'PSY 101',
          time: '1:00 - 2:00 PM',
          location: 'Room 301',
          instructor: 'Dr. Lisa Thompson',
          type: 'Lecture'
        }
      ]
    }
  ]

  const upcomingEvents = [
    {
      title: 'CS 101 Final Project Due',
      date: '2024-12-15',
      time: '11:59 PM',
      type: 'Assignment',
      course: 'CS 101'
    },
    {
      title: 'Math 151 Final Exam',
      date: '2024-12-18',
      time: '2:00 PM',
      type: 'Exam',
      course: 'MATH 151'
    },
    {
      title: 'Psychology Research Paper Due',
      date: '2024-12-20',
      time: '11:59 PM',
      type: 'Assignment',
      course: 'PSY 101'
    },
    {
      title: 'Spring Registration Opens',
      date: '2024-12-10',
      time: '8:00 AM',
      type: 'Registration',
      course: 'Academic'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lecture': return 'bg-blue-100 text-blue-800'
      case 'Lab': return 'bg-green-100 text-green-800'
      case 'Seminar': return 'bg-purple-100 text-purple-800'
      case 'Exam': return 'bg-red-100 text-red-800'
      case 'Assignment': return 'bg-orange-100 text-orange-800'
      case 'Registration': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600 mt-1">Manage your classes and important dates</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Classes Today</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hours This Week</p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Exams</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Badge className="bg-red-100 text-red-800">Due Soon</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Free Time Today</p>
                <p className="text-2xl font-bold">4h</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Schedule Tabs */}
      <Tabs defaultValue="week" className="space-y-4">
        <TabsList>
          <TabsTrigger value="week">Weekly View</TabsTrigger>
          <TabsTrigger value="month">Monthly View</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          {/* Week Navigation */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Week of December 2-6, 2024</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Weekly Schedule Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {weeklySchedule.map((day, index) => (
              <Card key={index} className={day.day === 'Wednesday' ? 'ring-2 ring-primary' : ''}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                  <CardDescription>{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day.classes.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No classes</p>
                  ) : (
                    day.classes.map((class_, classIndex) => (
                      <div key={classIndex} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{class_.name}</h4>
                          <Badge variant="outline" className={`text-xs ${getTypeColor(class_.type)}`}>
                            {class_.type}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{class_.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{class_.location}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>December 2024</CardTitle>
              <CardDescription>Monthly calendar view</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Monthly calendar view coming soon!</p>
                <p className="text-sm">This feature will show a full calendar with all your classes and events.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events & Deadlines</CardTitle>
              <CardDescription>Important dates and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        event.type === 'Exam' ? 'bg-red-500' :
                        event.type === 'Assignment' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`} />
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.course}</p>
                        <p className="text-xs text-gray-500">{formatDate(event.date)} at {event.time}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
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