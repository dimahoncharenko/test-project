import { GridLayout } from "./components/GridLayout";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

import { CommentsProvider, AvailableSectionsProvider } from "./utils";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Container>
        <GridLayout>
          <AvailableSectionsProvider>
            <MainContent />
          </AvailableSectionsProvider>
          <CommentsProvider>
            <Sidebar />
          </CommentsProvider>
        </GridLayout>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
