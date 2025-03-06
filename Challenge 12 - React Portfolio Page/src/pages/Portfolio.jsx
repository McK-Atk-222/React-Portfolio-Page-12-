export default function Portfolio() {
  return (
    <div className="mt-3 mx-3">
      <h1>Portfolio</h1>
      <section className="container">

      <div className="row py-4">
      <a href="https://github.com/McK-Atk-222/Chat-App" id='chatApp' className="column w-50">
          <div>
            <h3>Chat App</h3>
            <span>PERN Stack</span>
          </div>
        </a>

        <a href="https://github.com/McK-Atk-222/Inventory-Manager-Webpage" id='inventoryManager' className="column w-50">
          <div>
            <h3>Inventory Manager</h3>
            <span>Javascript/HTML/CSS/Node</span>
          </div>
        </a>
        </div>
        
        <div className="row py-4">
        <a href="https://pern-full-stack-react-kanban-board-app-14.onrender.com" id='kanban' className="column w-50">
          <div>
            <h3>Kanban Board</h3>
            <span>PERN Stack</span>
          </div>
        </a>

        <a href="https://github.com/McK-Atk-222/SQL-Server-Project-Employee-Manager" id='employeeManager' className="column w-50">
          <div>
            <h3>Employee Manager</h3>
            <span>PostgreSQL</span>
          </div>
        </a>
        </div>

        <div className="row py-4">
        <a href="https://github.com/McK-Atk-222/TypeScript-and-Object-Oriented-Programming-Project" id='vehicleManager' className="column w-50">
          <div>
            <h3>Vehicle Manager Software</h3>
            <span>Typescript/Object-Oriented Programming</span>
          </div>
        </a>
    
        <a href="https://github.com/McK-Atk-222/Servers-and-APIs-Project" id='weatherApp' className="column w-50">
          <div>
            <h3>Weather App</h3>
            <span>SQL/HTML/CSS</span>
          </div>
        </a>
      </div>

    </section>
    </div>
  );
}
