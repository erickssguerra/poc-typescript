<h1> POC - Typescript - DrivenFit </h1>
<ul> 
    <li> In this back-end project, a simple system of a Gym is used as a Proof of concept (POC) of TypeScript coding.</li>
    <li>A CRUD (Create, Update and Delete) protocol was used for manage two self-explained tables: `Customers` and `Enrollments`.</li>
    <li>The table `Courses` (with gym courses in Portuguese) is already created in the database;</li>
    <li>Furthermore, ranking routes are implemented, aggregating the `courses` and `customers` metrics (see routes below).</li>
</ul>

<details>
<summary>
<h2>👣 Initial steps</h2>
</summary>

<h3> Install all dependencies </h3>

```bash
    npm i 
```
<h3> Run the server API locally </h3>

```bash
    npm run dev
```

<h3> Build the application (for deploy)</h3>

```bash
    npm run build
```

<h3> Start the application (for deploy)</h3>

```bash
    npm run start
```

<p> ⚠️ You'll also need to download the database structure (see database section below) </p>

</details>

<details>

<summary>
<h2>🗂 Folders organization </h2>
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
    <summary> <h2>🧭 Routes </h2></summary>

<details><summary><h3> Customers routes </h3></summary>

**<h4> Registering a customer </h4>**
<ul>
<li>POST `/register`</li>
<li>Send customer via body as follow</li>

    ```JSON
    {
        "name": "Customer Name",
        "email": "test@test.com",
        "cpf": "12345678910"
    }
    ```

<li> If succeed, receive an answer in the format:</li>

    ```JSON
    {
        "message": "Customer Name was registered!"
    }
    ```

</ul>
</details>

<details><summary><h3> Enrolments routes </h3></summary>

<h3> Enrolling a customer </h3>
    - 

</details>
</details>

<details>
    <summary>
    <h2>🗄️ Database</h2>
    </summary>

- Database structure

    <img src="https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dbdiagram.png" alt="database diagram">

- Database dump

    [Dump file](https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dump.sql)

</details>
