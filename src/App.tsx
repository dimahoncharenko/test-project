import { GridLayout } from "./components/GridLayout";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

import { CommentsProvider, AvailableSectionsProvider } from "./utils";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
