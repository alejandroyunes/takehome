import { useState, useEffect } from 'react';

type UserData = {
  name: string
  location: string
  avatar: string
  description: string
  potential: number
  instagram: string
  instagram_followers: number
  tiktok: string
  pics: string[]
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/user/1')
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  return userData;
}

