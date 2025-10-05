'use client'
import MainHeader from "../home/main_header.jsx";
import Footer from '../home/footer.jsx';




export default function AppContainer({ children }) {
  return (
    
          <main className='pt-[27vh] bg-[#ffffff]  min-h-[100vh] p-0 main-cont'>

          <header className="fixed top-0 left-0 w-full h-[27vh] bg-[#ffffff]   shadow-xs shadow-black/10 z-50 header">
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

