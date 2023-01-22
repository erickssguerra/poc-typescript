<h1> POC - Typescript - DrivenFit </h1>
<ul> 
    <li> In this back-end project, a simple system of a Gym is used as a Proof of concept (POC) of TypeScript coding.</li>
    <li>A CRUD (Create, Update and Delete) protocol was used for manage two self-explained tables: `Customers` and `Enrollments`.</li>
    <li>The table `Courses` (with gym courses in Portuguese) is already created in the database;</li>
    <li>Furthermore, ranking routes are implemented, aggregating the `courses` and `customers` metrics (see routes below).</li>
</ul>

<details>
    <summary>
        👣 Initial steps
    </summary>

<h3> Install all dependencies </h3>

```bash
    npm i 
```
### Run the server API locally
```bash
    npm run dev
```
### Build the application (for deploy)
```bash
    npm run build
```
### Start the application (for deploy)
```bash
    npm run start
```

- You'll also need to download the database structure (see database section below)

</details>

<details>

<summary>
<h3>🗂 Folders organization </h3>
</summary>

```
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── 📁 src
    │   ├── 📁 controllers
    │   │   ├── courses.controllers.ts
    │   │   ├── customers.controllers.ts
    │   │   └── enrollments.controllers.ts
    │   ├── 📁 database
    │   │   ├── connectionDB.ts
    │   │   └── dbdiagram.png
    │   ├── index.ts
    │   ├── 📁 middlewares
    │   │   ├── courses.middlewares.ts
    │   │   ├── customers.middleware.ts
    │   │   └── schemas.validation.ts
    │   ├── 📁 protocols
    │   │   ├── courses-rank.ts
    │   │   ├── customer.ts
    │   │   ├── customers-rank.ts
    │   │   └── enrollment.ts
    │   ├── 📁 repositories
    │   │   ├── courses.repository.ts
    │   │   ├── customers.repository.ts
    │   │   └── enrollments.repository.ts
    │   ├── 📁 routes
    │   │   ├── courses.routes.ts
    │   │   ├── customers.routes.ts
    │   │   ├── enrollments.routes.ts
    │   │   └── index.ts
    │   ├── 📁 schemas
    │   │   ├── customer.schema.ts
    │   │   ├── enrollment.schema.ts
    │   │   └── top-query.schema.ts
    │   └── 📁 services
    └── tsconfig.json
```

</details>

<details>
    <summary>🧭 Routes</summary>

<h2> Customers routes </h2>

- Registering a customer
    - POST `/register`
    - Send customer via body as follow
    
    ```JSON
    {
        "name": "Customer Name",
        "email": "test@test.com",
        "cpf": "12345678910"
    }
    ```

    - If succeed, receive an answer in the format:

    ```JSON
    {
        "message": "Customer Name was registered!"
    }
    ```

<h2> Enrolments routes </h2>

- Enrolling a customer
    - 


</details>

<details>
    <summary>
    🗄️ Database
    </summary>

- Database structure

    <img src="https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dbdiagram.png" alt="database diagram">

- Database dump

    [Dump file](https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dump.sql)

</details>
