/*
📝 Technical Notes: The Singleton Design Pattern in JavaScript
1. Core Definition
A Singleton is a creational design pattern that ensures a class has only one unique instance in the Heap Memory and provides a global point of access to that specific instance across the entire application.

2. The Core Mechanism: How it Works Under the Hood
By default, the new keyword is hardwired to allocate a fresh, separate block of space in the Heap Memory every time it is called. The Singleton pattern overrides this behavior using a two-step interception:

The Tracking Slot (Static Property): It creates a dedicated memory slot attached directly to the Class Blueprint container (e.g., ClassName.savedPointer). Because it lives on the class blueprint and not on this, its data survives across multiple constructor execution cycles.

The Constructor Hijack (return Loophole): It implements an explicit return statement inside the constructor. In JavaScript, if a constructor explicitly returns an already existing object reference, the engine cancels the fresh allocation, throws away the new temporary shell it was building, and passes back the cached reference pointer instead.

3. Production-Ready Code Implementation

*/

class DatabaseConnection {
    constructor(connectionString) {
        // 1️⃣ THE INTERCEPTION (The Gatekeeper)
        // Check if our permanent blueprint slot already holds a memory pointer
        if (DatabaseConnection.savedPointer) {
            console.log("⚡ Reusing existing memory pointer. New allocation blocked!");
            return DatabaseConnection.savedPointer; // Overrides 'new' keyword
        }

        // 2️⃣ THE INITIALIZATION
        // This structural data code ONLY runs once for the very first instantiation
        console.log("🔋 Carving out a brand-new Heap Memory slot...");
        this.connectionString = connectionString;
        this.status = "Connected";
        this.createdAt = new Date().toLocaleTimeString();

        // 3️⃣ THE LOCK (Caching the pointer)
        // Save the memory address pointer (this) onto the Class blueprint container
        DatabaseConnection.savedPointer = this;
    }

    // Instance Method
    query(sql) {
        console.log(`Executing query: "${sql}" on pool config [${this.connectionString}].`);
    }
}

// 🚀 VERIFICATION AND TESTING

const connectionA = new DatabaseConnection("mongodb://cluster-url-1");
// Terminal Output: "🔋 Carving out a brand-new Heap Memory slot..."

const connectionB = new DatabaseConnection("mongodb://cluster-url-2");
// Terminal Output: "⚡ Reusing existing memory pointer. New allocation blocked!"

// Verification 1: Structural Pointer Matching
console.log(connectionA === connectionB); 
// Output: true 🟢 (Both point to the exact same location in memory)

// Verification 2: Proof of Shared State
connectionB.status = "Disconnected";
console.log(connectionA.status); 
// Output: "Disconnected" 🚨 (Altering B altered A because they are the same physical object)

/*
5. Real-World Industry Use Cases
Use Case A: Database Connection Pools (The MERN Stack standard)
The Problem: In a backend environment (like an Express/Node.js server communicating with MongoDB Atlas), connecting to a database takes time and network overhead. If every incoming API request or every file created a fresh new DatabaseConnection(), the server would rapidly open thousands of concurrent connection pipes. This crashes the database cluster and burns through server memory.

The Singleton Solution: A single connection instance is opened. Every router file, controller function, and query script across the entire backend reuses the exact same active open pipeline to stream data.

Use Case B: Global State Management & Application Settings
The Problem: You have application settings (like theme: "dark", environment: "production", or global API base URLs) that need to be read by fifty different modules. If different modules spawn independent configuration instances, changing the theme in one module won’t update it anywhere else, creating silent state synchronization bugs.

The Singleton Solution: Keeping the configuration locked to one memory instance ensures that when an admin panel updates a property, every active background service instantly reads the updated value because they all point to the exact same memory address.

Use Case C: Global Error/Activity Loggers
The Problem: You need a centralized logger tracking application events, warning flags, and exceptions across your script architecture. Spawning separate logger instances can cause race conditions when trying to write to the same log files or streams simultaneously.

The Singleton Solution: A Singleton logger manages a single write stream, ordering incoming log requests systematically and tracking application uptime accurately from a singular central source.

💡 Top Interview Summary Line
"The Singleton design pattern restricts a class from producing multiple instances. In JavaScript, we enforce this by storing the first-created object's reference pointer on a static property of the class. When the constructor fires on subsequent new execution attempts, we intercept the cycle using an explicit return statement, forcing the engine to discard the fresh allocation and pass back the original cached memory reference."
*/