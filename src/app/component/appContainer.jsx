'use client'
import MainHeader from "../home/main_header.jsx";
import Footer from '../home/footer.jsx';




export default function AppContainer({ children }) {
  return (
    
          <main className='pt-[30vh] min-h-[100vh] p-0'>

          <header className="fixed top-0 left-0 w-full h-[30vh] bg-white shadow-xs shadow-black/10 z-50">
            <MainHeader />
          </header>

      
        
            {/* Scrollable content section */}
            <section className="flex-grow-1 w-full  h-[100%] flex flex-col justify-start items-center p-4">
              {children}
            </section>

            {/* Footer */}
            
       
         
              <Footer />
        
            </main>
       
  );
}

