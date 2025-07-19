import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  ExternalLink,
  Heart,
  Utensils,
  Home,
  Car,
  GraduationCap,
  Users,
  Briefcase,
  Shield
} from 'lucide-react'

export function Services() {
  const campusServices = [
    {
      category: 'Academic Support',
      icon: GraduationCap,
      services: [
        {
          name: 'Academic Advising',
          description: 'Get guidance on course selection and degree planning',
          location: 'Student Services Building, Room 201',
          hours: 'Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4501',
          email: 'advising@university.edu',
          status: 'Open'
        },
        {
          name: 'Tutoring Center',
          description: 'Free tutoring for math, science, and writing',
          location: 'Library, 3rd Floor',
          hours: 'Mon-Thu 9:00 AM - 9:00 PM, Fri 9:00 AM - 5:00 PM',
          phone: '(555) 123-4502',
          email: 'tutoring@university.edu',
          status: 'Open'
        },
        {
          name: 'Writing Center',
          description: 'Help with essays, research papers, and writing skills',
          location: 'English Building, Room 105',
          hours: 'Mon-Fri 10:00 AM - 6:00 PM',
          phone: '(555) 123-4503',
          email: 'writing@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Student Life',
      icon: Users,
      services: [
        {
          name: 'Student Activities',
          description: 'Clubs, organizations, and campus events',
          location: 'Student Union, Room 250',
          hours: 'Mon-Fri 9:00 AM - 5:00 PM',
          phone: '(555) 123-4504',
          email: 'activities@university.edu',
          status: 'Open'
        },
        {
          name: 'Recreation Center',
          description: 'Fitness facilities, sports, and wellness programs',
          location: 'Recreation Center',
          hours: 'Mon-Fri 5:30 AM - 11:00 PM, Weekends 7:00 AM - 10:00 PM',
          phone: '(555) 123-4505',
          email: 'recreation@university.edu',
          status: 'Open'
        },
        {
          name: 'Counseling Services',
          description: 'Mental health support and counseling',
          location: 'Health Center, 2nd Floor',
          hours: 'Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4506',
          email: 'counseling@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Health & Wellness',
      icon: Heart,
      services: [
        {
          name: 'Health Center',
          description: 'Medical services and health consultations',
          location: 'Health Center',
          hours: 'Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4507',
          email: 'health@university.edu',
          status: 'Open'
        },
        {
          name: 'Pharmacy',
          description: 'Prescription medications and health supplies',
          location: 'Health Center, 1st Floor',
          hours: 'Mon-Fri 9:00 AM - 4:00 PM',
          phone: '(555) 123-4508',
          email: 'pharmacy@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Dining',
      icon: Utensils,
      services: [
        {
          name: 'Main Dining Hall',
          description: 'All-you-can-eat dining with various cuisines',
          location: 'Student Union, 1st Floor',
          hours: 'Mon-Fri 7:00 AM - 9:00 PM, Weekends 8:00 AM - 8:00 PM',
          phone: '(555) 123-4509',
          email: 'dining@university.edu',
          status: 'Open'
        },
        {
          name: 'Campus Café',
          description: 'Coffee, snacks, and light meals',
          location: 'Library, 1st Floor',
          hours: 'Mon-Fri 7:00 AM - 7:00 PM',
          phone: '(555) 123-4510',
          email: 'cafe@university.edu',
          status: 'Open'
        },
        {
          name: 'Food Court',
          description: 'Multiple food vendors and restaurants',
          location: 'Student Union, 2nd Floor',
          hours: 'Mon-Fri 10:00 AM - 8:00 PM, Weekends 11:00 AM - 6:00 PM',
          phone: '(555) 123-4511',
          email: 'foodcourt@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Housing',
      icon: Home,
      services: [
        {
          name: 'Residence Life',
          description: 'Dormitory management and housing support',
          location: 'Housing Office, Administration Building',
          hours: 'Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4512',
          email: 'housing@university.edu',
          status: 'Open'
        },
        {
          name: 'Maintenance Services',
          description: 'Dorm repairs and maintenance requests',
          location: 'Facilities Building',
          hours: '24/7 Emergency, Regular Hours: Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4513',
          email: 'maintenance@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Transportation',
      icon: Car,
      services: [
        {
          name: 'Parking Services',
          description: 'Parking permits and campus transportation',
          location: 'Security Office',
          hours: 'Mon-Fri 8:00 AM - 5:00 PM',
          phone: '(555) 123-4514',
          email: 'parking@university.edu',
          status: 'Open'
        },
        {
          name: 'Campus Shuttle',
          description: 'Free shuttle service around campus',
          location: 'Multiple stops across campus',
          hours: 'Mon-Fri 7:00 AM - 10:00 PM',
          phone: '(555) 123-4515',
          email: 'shuttle@university.edu',
          status: 'Running'
        }
      ]
    },
    {
      category: 'Career Services',
      icon: Briefcase,
      services: [
        {
          name: 'Career Center',
          description: 'Job search assistance and career counseling',
          location: 'Career Services Building',
          hours: 'Mon-Fri 9:00 AM - 5:00 PM',
          phone: '(555) 123-4516',
          email: 'careers@university.edu',
          status: 'Open'
        },
        {
          name: 'Internship Program',
          description: 'Internship opportunities and placement',
          location: 'Career Services Building, Room 201',
          hours: 'Mon-Fri 9:00 AM - 5:00 PM',
          phone: '(555) 123-4517',
          email: 'internships@university.edu',
          status: 'Open'
        }
      ]
    },
    {
      category: 'Safety & Security',
      icon: Shield,
      services: [
        {
          name: 'Campus Security',
          description: '24/7 campus safety and emergency response',
          location: 'Security Office',
          hours: '24/7',
          phone: '(555) 123-4518',
          email: 'security@university.edu',
          status: 'Active'
        },
        {
          name: 'Emergency Services',
          description: 'Emergency response and safety escorts',
          location: 'Campus-wide',
          hours: '24/7',
          phone: '(555) 911-HELP',
          email: 'emergency@university.edu',
          status: 'Active'
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
      case 'Active':
      case 'Running':
        return 'bg-green-100 text-green-800'
      case 'Closed':
        return 'bg-red-100 text-red-800'
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Campus Services</h1>
        <p className="text-gray-600 mt-1">Access all campus facilities and support services</p>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {campusServices.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <category.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">{category.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Services Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="life">Student Life</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {campusServices.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.category}
                </CardTitle>
                <CardDescription>
                  {category.services.length} service{category.services.length !== 1 ? 's' : ''} available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{service.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{service.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>{service.email}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Support Services</CardTitle>
              <CardDescription>Resources to help you succeed academically</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {campusServices
                  .filter(category => category.category === 'Academic Support')
                  .flatMap(category => category.services)
                  .map((service, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <Button size="sm" className="w-full">
                        Contact Service
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="life" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Life Services</CardTitle>
              <CardDescription>Services to enhance your campus experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {campusServices
                  .filter(category => ['Student Life', 'Health & Wellness', 'Dining'].includes(category.category))
                  .flatMap(category => category.services)
                  .map((service, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <Button size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Emergency Services</CardTitle>
              <CardDescription>Important safety and emergency contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Emergency Contacts</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Campus Emergency:</span>
                      <span className="font-bold">(555) 911-HELP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Campus Security:</span>
                      <span className="font-bold">(555) 123-4518</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health Center:</span>
                      <span className="font-bold">(555) 123-4507</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Local Emergency (911):</span>
                      <span className="font-bold">911</span>
                    </div>
                  </div>
                </div>

                {campusServices
                  .filter(category => category.category === 'Safety & Security')
                  .flatMap(category => category.services)
                  .map((service, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <Button size="sm" className="w-full" variant="destructive">
                        <Phone className="h-4 w-4 mr-2" />
                        Emergency Contact
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