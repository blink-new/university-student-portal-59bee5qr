import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Library, 
  Building2, 
  User,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react'
import { blink } from '@/blink/client'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Grades', href: '/grades', icon: GraduationCap },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'Services', href: '/services', icon: Building2 },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-white shadow-md"
        >
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-sm border-r border-gray-200/50 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-lg lg:shadow-none",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">UniPortal</span>
                <p className="text-xs text-gray-500">Student Dashboard</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group",
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <item.icon className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                    )} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/profile"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <User className="mr-3 h-4 w-4 text-gray-500" />
                  Profile Settings
                </Link>
                <button
                  onClick={() => {
                    setIsMobileOpen(false)
                    blink.auth.logout()
                  }}
                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <LogOut className="mr-3 h-4 w-4 text-gray-500" />
                  Sign Out
                </button>
              </div>
            </div>
          </ScrollArea>

          {/* User info */}
          <div className="p-4 border-t border-gray-200/50 bg-gray-50/50">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-white text-sm font-medium">
                  ST
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Student User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  Computer Science • 3rd Year
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}