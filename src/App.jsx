import { Suspense } from "react";
import { AppRouting } from './routes';
function App() {
  return (
    <>
      <Suspense fallback={<p>در حال بارگذاری</p>}>
        <AppRouting />
      </Suspense>
    </>
  );
}

export default App;
