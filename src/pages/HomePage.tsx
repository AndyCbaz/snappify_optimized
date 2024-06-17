import React, { Suspense } from "react";
import { Box, Button } from "../components";



const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Box className="h-dvh w-full border-2 border-red-500">
        <main className="flex flex-col">
          <Button>Click me</Button>
        </main>
      </Box>
    </Suspense>
  );
};

export default HomePage;
