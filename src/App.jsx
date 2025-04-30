function App() {

  const HandlePrint =() => {
    window.print()
  }

   return ( 
    <>
      <main>
        {/* header */}
       <header>
        <div>
          <h1>Invoicer</h1>
        </div>

        <div>
          <ul>
            <li><button onClick={HandlePrint}>Print</button></li>
            <li>Download</li>
            <li>Send</li>
          </ul>
        </div>

       </header>
        {/* end of header */}

        {/* your details */}
        <section>
          
          <h2>Sanskar Omer</h2>
          <p>Address</p>

        </section>

         {/* end your details */}

        {/* clint details */}
        <section>
          
          <h2>Dheeraj Omer</h2>
          <p>Address</p>

        </section>

         {/* client your details */}

          {/* date  details */}
          
         
      </main>
    </>
   );
}

export default App
