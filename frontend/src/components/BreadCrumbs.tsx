'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Breadcrumbs = () => {
  const pathname = usePathname()
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null
  
  const pathSegments = pathname.split('/').filter(segment => segment)
  
  // Create breadcrumb items with proper formatting
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    return { href, label }
  })

  return (
    <nav className="bg-gray-50 py-3 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center text-sm">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-pink-600"
          >
            Home
          </Link>
          
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-pink-600">{breadcrumb.label}</span>
              ) : (
                <Link 
                  href={breadcrumb.href}
                  className="text-gray-600 hover:text-pink-600"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Breadcrumbs