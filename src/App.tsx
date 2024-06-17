import React from 'react'
import { Box, Button } from './components'

const App:React.FC = () => {
  return (
    <Box className='h-dvh w-full border-2 border-red-500'>
      <main className='flex flex-col'>
        <Button>
          Click me
        </Button>

      </main>
    </Box>
  )
}

export default App