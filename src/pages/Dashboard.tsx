import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Clock, 
  Bell,
  TrendingUp,
  Users,
  FileText
} from 'lucide-react'

export function Dashboard() {
  const upcomingClasses = [
    { name: 'Computer Science 101', time: '9:00 AM', room: 'Room 204', status: 'upcoming' },
    { name: 'Mathematics', time: '11:00 AM', room: 'Room 156', status: 'upcoming' },
    { name: 'Physics Lab', time: '2:00 PM', room: 'Lab 3', status: 'upcoming' },
  ]

  const recentGrades = [
    { course: 'Computer Science 101', assignment: 'Midterm Exam', grade: 'A-', date: '2 days ago' },
    { course: 'Mathematics', assignment: 'Problem Set 5', grade: 'B+', date: '1 week ago' },
    { course: 'Physics', assignment: 'Lab Report 3', grade: 'A', date: '1 week ago' },
  ]

  const announcements = [
    { title: 'Registration for Spring Semester Opens', date: '3 hours ago', urgent: true },
    { title: 'Library Extended Hours During Finals', date: '1 day ago', urgent: false },
    { title: 'Campus Health Services Update', date: '2 days ago', urgent: false },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.85</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.12</span> from last semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">
              33 credits remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              15 credit hours this semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 due this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{class_.name}</p>
                  <p className="text-sm text-gray-600">{class_.room}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">{class_.time}</p>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Upcoming
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest assignment results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{grade.assignment}</p>
                  <p className="text-sm text-gray-600">{grade.course}</p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={grade.grade.startsWith('A') ? 'default' : grade.grade.startsWith('B') ? 'secondary' : 'outline'}
                    className="font-bold"
                  >
                    {grade.grade}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{grade.date}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Grades
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcements */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Announcements
            </CardTitle>
            <CardDescription>Latest updates from your university</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${announcement.urgent ? 'bg-red-500' : 'bg-blue-500'}`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{announcement.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{announcement.date}</p>
                </div>
                {announcement.urgent && (
                  <Badge variant="destructive" className="text-xs">
                    Urgent
                  </Badge>
                )}
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Announcements
            </Button>
          </CardContent>
        </Card>

        {/* Academic Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Progress</CardTitle>
            <CardDescription>Your degree completion status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Degree Progress</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
              <p className="text-xs text-gray-600 mt-1">87 of 120 credits completed</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Major Requirements</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-gray-600 mt-1">34 of 40 credits completed</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>General Education</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-xs text-gray-600 mt-1">38 of 40 credits completed</p>
            </div>

            <Button variant="outline" className="w-full mt-4">
              View Degree Audit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}