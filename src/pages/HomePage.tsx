import React, { lazy, Suspense } from "react";

const Box = lazy(() => import("../components/CustomBox"));
const Button = lazy(() => import("../components/CustomButton"));

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
