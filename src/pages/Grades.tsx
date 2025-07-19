import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown,
  Award,
  Target,
  BarChart3,
  Download
} from 'lucide-react'

export function Grades() {
  const currentGrades = [
    {
      course: 'Computer Science 101',
      code: 'CS 101',
      currentGrade: 'A-',
      percentage: 91.5,
      credits: 3,
      assignments: [
        { name: 'Midterm Exam', grade: 'A-', points: '87/100', weight: '25%', date: '2024-11-15' },
        { name: 'Project 1', grade: 'A', points: '95/100', weight: '20%', date: '2024-11-01' },
        { name: 'Quiz 1', grade: 'B+', points: '88/100', weight: '10%', date: '2024-10-20' },
        { name: 'Quiz 2', grade: 'A', points: '92/100', weight: '10%', date: '2024-11-05' },
      ]
    },
    {
      course: 'Calculus I',
      code: 'MATH 151',
      currentGrade: 'B+',
      percentage: 87.2,
      credits: 4,
      assignments: [
        { name: 'Midterm 1', grade: 'B+', points: '85/100', weight: '20%', date: '2024-10-15' },
        { name: 'Midterm 2', grade: 'A-', points: '90/100', weight: '20%', date: '2024-11-20' },
        { name: 'Homework Avg', grade: 'B', points: '83/100', weight: '30%', date: 'Ongoing' },
        { name: 'Quizzes Avg', grade: 'A-', points: '89/100', weight: '15%', date: 'Ongoing' },
      ]
    },
    {
      course: 'Physics Laboratory',
      code: 'PHYS 201L',
      currentGrade: 'A',
      percentage: 94.8,
      credits: 1,
      assignments: [
        { name: 'Lab Report 1', grade: 'A', points: '95/100', weight: '20%', date: '2024-10-10' },
        { name: 'Lab Report 2', grade: 'A-', points: '92/100', weight: '20%', date: '2024-10-25' },
        { name: 'Lab Report 3', grade: 'A', points: '98/100', weight: '20%', date: '2024-11-10' },
        { name: 'Participation', grade: 'A', points: '100/100', weight: '40%', date: 'Ongoing' },
      ]
    },
    {
      course: 'English Composition',
      code: 'ENG 101',
      currentGrade: 'B',
      percentage: 83.5,
      credits: 3,
      assignments: [
        { name: 'Essay 1', grade: 'B+', points: '87/100', weight: '25%', date: '2024-10-05' },
        { name: 'Essay 2', grade: 'B-', points: '82/100', weight: '25%', date: '2024-11-01' },
        { name: 'Participation', grade: 'A-', points: '90/100', weight: '20%', date: 'Ongoing' },
        { name: 'Peer Reviews', grade: 'B', points: '85/100', weight: '15%', date: 'Ongoing' },
      ]
    },
    {
      course: 'Introduction to Psychology',
      code: 'PSY 101',
      currentGrade: 'A-',
      percentage: 89.7,
      credits: 3,
      assignments: [
        { name: 'Exam 1', grade: 'A-', points: '89/100', weight: '30%', date: '2024-10-20' },
        { name: 'Exam 2', grade: 'A', points: '93/100', weight: '30%', date: '2024-11-25' },
        { name: 'Research Paper', grade: 'B+', points: '88/100', weight: '25%', date: '2024-11-15' },
        { name: 'Discussion Posts', grade: 'A', points: '95/100', weight: '15%', date: 'Ongoing' },
      ]
    }
  ]

  const semesterGPA = 3.85
  const cumulativeGPA = 3.72
  const totalCredits = 87
  const semesterCredits = 14

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800'
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800'
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800'
    return 'bg-gray-100 text-gray-800'
  }

  const calculateWeightedGPA = () => {
    let totalPoints = 0
    let totalCredits = 0
    
    currentGrades.forEach(course => {
      const gradePoints = course.percentage >= 97 ? 4.0 :
                         course.percentage >= 93 ? 3.7 :
                         course.percentage >= 90 ? 3.3 :
                         course.percentage >= 87 ? 3.0 :
                         course.percentage >= 83 ? 2.7 :
                         course.percentage >= 80 ? 2.3 : 2.0
      
      totalPoints += gradePoints * course.credits
      totalCredits += course.credits
    })
    
    return (totalPoints / totalCredits).toFixed(2)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Grades</h1>
        <p className="text-gray-600 mt-1">Track your academic performance and GPA</p>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Semester GPA</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculateWeightedGPA()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.13</span> from last semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cumulative GPA</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cumulativeGPA}</div>
            <p className="text-xs text-muted-foreground">
              {totalCredits} total credits
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits This Semester</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{semesterCredits}</div>
            <p className="text-xs text-muted-foreground">
              Full-time student status
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Top 15%</div>
            <p className="text-xs text-muted-foreground">
              Dean's List eligible
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grades Content */}
      <Tabs defaultValue="current" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="history">Grade History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Transcript
          </Button>
        </div>

        <TabsContent value="current" className="space-y-6">
          {currentGrades.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{course.course}</CardTitle>
                    <CardDescription>{course.code} • {course.credits} Credits</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-lg px-3 py-1 ${getGradeColor(course.currentGrade)}`}>
                      {course.currentGrade}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-1">{course.percentage}%</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.assignments.map((assignment, assignmentIndex) => (
                    <div key={assignmentIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{assignment.name}</p>
                        <p className="text-sm text-gray-600">Weight: {assignment.weight} • {assignment.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={getGradeColor(assignment.grade)}>
                          {assignment.grade}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{assignment.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic History</CardTitle>
              <CardDescription>Your semester-by-semester performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">Fall 2024 (Current)</h4>
                    <p className="text-2xl font-bold text-primary">{calculateWeightedGPA()}</p>
                    <p className="text-sm text-gray-600">{semesterCredits} credits</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">Spring 2024</h4>
                    <p className="text-2xl font-bold">3.72</p>
                    <p className="text-sm text-gray-600">15 credits</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium">Fall 2023</h4>
                    <p className="text-2xl font-bold">3.68</p>
                    <p className="text-sm text-gray-600">16 credits</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
                <CardDescription>Your academic performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Fall 2023</span>
                    <div className="flex items-center gap-2">
                      <Progress value={73.6} className="w-24" />
                      <span className="text-sm font-medium">3.68</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spring 2024</span>
                    <div className="flex items-center gap-2">
                      <Progress value={74.4} className="w-24" />
                      <span className="text-sm font-medium">3.72</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fall 2024</span>
                    <div className="flex items-center gap-2">
                      <Progress value={77} className="w-24" />
                      <span className="text-sm font-medium">{calculateWeightedGPA()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Your current semester breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      A Grades
                    </span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      B Grades
                    </span>
                    <span className="font-medium">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      C Grades
                    </span>
                    <span className="font-medium">0%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}