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
<ul>

<details><summary><h3> Customers routes </h3></summary>

**<h4> Registering a customer </h4>**
<ul>
<li><span style="color: green">POST</span> `/register`</li>
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
</details></li>

<details><summary><h3> Enrolments routes </h3></summary>

**<h4> Enrolling a customer in a course</h4>**
<ul>
<li><span style="color: green">POST</span> `/enroll`</li>
<li>Send a body containing the following infos</li>


```JSON
{
    "customer_id": "1",
    "course_id": "2"
}
```

<li>If succeed, receive an answer in the format:</li>

```JSON
{
    "message": "Success: Customer_X was enrolled into Course_X!"
}
```

</ul>

**<h4> Unenrolling a customer from a course </h4>**
<ul>
<li><span style="color: red">DELETE</span> `/enroll`</li>
<li>Send a body containing the following infos</li>


```JSON
{
    "customer_id": "1",
    "course_id": "2"
}
```

<li>If succeed, receive an answer in the format:</li>

```JSON
{
    "message": "Success: Customer_X was unenrolled from Course_X!"
}
```

</ul>
</details>

<details><summary><h3> Courses routes </h3></summary>
<ul>

**<h4>Rank of courses with higher number of enrollments</h4>**
<ul>
<li><span style="color: blue">GET</span> `/rank/courses` </li>
<li>Optional a query `top` with a number, as the example below:</li>

```
/rank/courses?top=3
```
<li>Response in the format:</li>

```JSON
[
  {
    "course": "LPO",
    "customers": "7"
  },
  {
    "course": "Dança",
    "customers": "5"
  },
  {
    "course": "Zumba",
    "customers": "3"
  }
]
```
</ul>


**<h4>Courses a customer is enrolled in</h4>**
<ul>
<li><span style="color: blue">GET</span> `/courses/:customer_id`</li>
<li>`customer_id` is a number and required, as the example below:</li>

```
/courses/2
```
<li> </li>

</ul>



</ul>

</ul>
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
