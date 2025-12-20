"(Get-Content notes.md) -replace '\*','' | Set-Content notes.md"  --> to replace all * with nothing


 1. Server

 Definition (Developer-level)

A server is a long-running program (process) that listens for incoming requests over a network and responds to them according to a defined protocol.

> A server is not necessarily a machine — it is software running on a machine.

---

 What a server actually does

At runtime, a server:

1. Opens a network socket
2. Binds to an IP address and port
3. Listens for incoming connections
4. Accepts requests
5. Processes them
6. Sends responses
7. Stays alive until stopped

Example (conceptual):

```text
Client → Request → Server → Response → Client
```

---

 Common server types

| Server Type     | Purpose                            |
| --------------- | ---------------------------------- |
| Web server      | Serves HTTP/HTTPS requests         |
| API server      | Serves structured data (JSON, XML) |
| Database server | Handles data queries               |
| File server     | Provides file access               |
| Game server     | Manages multiplayer state          |

---

 Key terms (explained)

 Process: A running instance of a program managed by the OS
 Socket: An endpoint for network communication
 Port: A numbered channel (e.g., 80, 443)
 Protocol: Rules for communication (HTTP, TCP, UDP)
 Request/Response: Data sent to/from the server

---

 Example

 Node.js Express app
 Python Flask/Django app
 Nginx
 Apache

---

 2. Web Application (Web App)

 Definition (Developer-level)

A web application is software accessed through a web browser that executes logic on a server, client, or both, and communicates primarily using HTTP/HTTPS.

A web app is usually:

 Server-side code
 Client-side code
 Data storage
 Networking logic

---

 Architecture

```
Browser (Client)
  ├── HTML (structure)
  ├── CSS (style)
  ├── JavaScript (behavior)
        ↓ HTTP
Server
  ├── Business logic
  ├── Authentication
  ├── Database access
```

---

 Web app vs Website

| Website               | Web App              |
| --------------------- | -------------------- |
| Mostly static content | Dynamic, interactive |
| Minimal logic         | Heavy logic          |
| Read-only             | User input, state    |

---

 Key terms

 Client: The browser or device making requests
 HTTP: Stateless request/response protocol
 Frontend: Code running in the browser
 Backend: Code running on the server
 State: Stored user/session data

---

 Examples

 Gmail
 GitHub
 Online dashboards
 E-commerce sites

---

 3. Command Line Tool (CLI Tool)

 Definition (Developer-level)

A command-line tool is an executable program designed to be run from a terminal, taking arguments and flags, performing a task, and exiting.

Unlike servers:

 It starts
 Runs
 Finishes
 Exits

---

 Execution flow

```bash
command --option value
```

Example:

```bash
git commit -m "message"
```

---

 Characteristics

 No GUI
 Input via arguments or stdin
 Output via stdout/stderr
 Often composable (pipes)

---

 Key terms

 Terminal: Text-based interface to the OS
 Argument: Value passed to a program
 Flag/Option: Switch that modifies behavior
 stdin/stdout/stderr: Input/output streams
 Exit code: Status returned to OS (0 = success)

---

 Examples

 `git`
 `npm`
 `docker`
 `ffmpeg`

---

 4. Script

 Definition (Developer-level)

A script is a sequence of instructions written in a scripting language, typically executed by an interpreter, often to automate tasks.

Scripts are usually:

 Short-lived
 Task-oriented
 Non-interactive or lightly interactive

---

 Script vs Program

| Script             | Program                 |
| ------------------ | ----------------------- |
| Interpreted        | Compiled or interpreted |
| Automation-focused | Application-focused     |
| Short-lived        | Long-running possible   |

---

 How scripts run

```
Script → Interpreter → OS
```

Example:

```bash
python backup.py
```

---

 Key terms

 Interpreter: Executes code line-by-line
 Shebang (`!`): Declares interpreter
 Automation: Performing tasks automatically
 Batch processing: Running tasks in groups

---

 Examples

 Bash scripts
 Python scripts
 PowerShell scripts
 JavaScript scripts (Node.js)

---

 How They Relate

| Component | Long-running | Networked  | User Interface |
| --------- | ------------ | ---------- | -------------- |
| Server    | ✅ Yes        | ✅ Yes      | ❌ Usually none |
| Web App   | ✅ Yes        | ✅ Yes      | ✅ Browser      |
| CLI Tool  | ❌ No         | ❌ Optional | ❌ Terminal     |
| Script    | ❌ No         | ❌ Optional | ❌ Minimal      |

---

 Real-world Combination Example

A typical system might include:

 Server → runs backend logic
 Web app → user interface
 CLI tools → deployment & admin
 Scripts → automation (backups, CI/CD)

---

If you want, I can next:

 Explain how these are built in a specific language
 Show real code examples
 Explain OS-level differences
 Or map these to microservices / cloud / DevOps

Just tell me.
