// app/lawyers/page.tsx
"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Briefcase, MapPin, Star, Phone, Mail, Clock } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface Lawyer {
  id: number
  name: string
  specialization: string
  location: string
  rating: number
  description: string
  phone: string
  email: string
  years_experience: number
  image_url?: string
}

export default function LawyerSearchPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [specializations, setSpecializations] = useState<string[]>([])
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  // Fetch lawyers from Supabase
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        setIsLoading(true)
        let query = supabase.from('lawyers').select('*')

        if (selectedSpecialization && selectedSpecialization !== "all") {
          query = query.eq('specialization', selectedSpecialization)
        }

        
        if (searchTerm) {
          query = query.or(`name.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
        }
        
        const { data, error } = await query
        
        if (error) {
          console.error('Error fetching lawyers:', error)
          return
        }
        
        setLawyers(data || [])
      } catch (error) {
        console.error('Failed to fetch lawyers:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchLawyers()
  }, [selectedSpecialization, searchTerm])
  
  // Fetch specializations for the dropdown
  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const { data, error } = await supabase
          .from('specializations')
          .select('name')
          .order('name')
        
        if (error) {
          console.error('Error fetching specializations:', error)
          return
        }
        
        setSpecializations(data.map(spec => spec.name))
      } catch (error) {
        console.error('Failed to fetch specializations:', error)
      }
    }
    
    fetchSpecializations()
  }, [])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by the useEffect dependency on searchTerm
  }

  return (
    <div className="pt-[110px] container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-2 text-white">Find Legal Representation</h1>
      <p className="mb-8 text-white">Connect with qualified attorneys specialized in various practice areas</p>
      
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8 ">
        <div className="flex-1 bg-white rounded-md">
          <Input 
            placeholder="Search by name, location, or keywords" 
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
          <SelectTrigger className="w-full md:w-64 bg-white rounded-md">
            <SelectValue placeholder="Select practice area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Practice Areas</SelectItem>
            {specializations.map((specialization) => (
              <SelectItem key={specialization} value={specialization}>
                {specialization}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
          Search
        </Button>
      </form>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-20 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lawyers.map(lawyer => (
              <Card key={lawyer.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      {lawyer.image_url && (
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <img 
                            src={lawyer.image_url} 
                            alt={lawyer.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-xl font-bold">{lawyer.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          {lawyer.location}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span>{lawyer.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {lawyer.specialization}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      <Clock className="h-3 w-3 mr-1" />
                      {lawyer.years_experience} years
                    </Badge>
                  </div>
                  <p className="text-gray-600 line-clamp-3">{lawyer.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      {lawyer.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      {lawyer.email}
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                    Schedule Consultation
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {lawyers.length === 0 && !isLoading && (
            <div className="text-center py-12 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No lawyers found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or practice area selection.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}