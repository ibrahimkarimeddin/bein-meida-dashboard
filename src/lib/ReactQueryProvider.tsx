import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

function QueryProvider({ children }: any) {



  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        cacheTime:600000,
        staleTime:600000

      }
    }
  })

  return (
    <QueryClientProvider  client={queryClient} >
      {children}
    </QueryClientProvider>

  )
}

export default QueryProvider


