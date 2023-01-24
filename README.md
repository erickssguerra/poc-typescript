<h1> POC - Typescript - DrivenFit </h1>
<ul> 
    <li> In this back-end project, a simple system of a Gym is used as a Proof of concept (POC) of TypeScript coding.</li>
    <li>A CRUD (Create, Update and Delete) protocol was used for manage two self-explained tables: <code>customers</code> and <code>enrollments</code>.</li>
    <li>The table <code>courses</code> (with gym courses in Portuguese) is already created in the database;</li>
    <li>Furthermore, ranking routes are implemented, aggregating the <code>courses</code> and <code>customers</code> metrics (see routes below).</li>
</ul>

<details>
<summary>
<h2>👣 Initial steps</h2>
</summary>
<ul>

<h3> Install all dependencies </h3>

```bash
npm i 
```
<h3> Create the <code>.env</code> file following the <code>.env.example</code> file in the root folder </h3>
<li>Example of <code>.env</code> file:</li>

```
POSTGRES_USERNAME= 
POSTGRES_PASSWORD= 
POSTGRES_HOST= 
POSTGRES_PORT= 
POSTGRES_DATABASE= 

PORT=
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
</ul>
</details>

<details>

<summary>
<h2>🗂 Folders organization </h2>
</summary>
<ul>

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
│   │   ├── dbdiagram.png
│   │   └── dump.sql
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
</ul>
</details>

<details>
    <summary> <h2>🧭 Routes </h2></summary>
<ul>

<details><summary><h3> Customers routes </h3></summary>

**<h4> 👉🏻 Registering a customer </h4>**
<ul>
<li><span style="color: green">POST</span> <code>/register</code></li>
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
    "message": "Customer_name was registered!"
}
```

</ul>

**<h4> 👉🏻 Updating a customer's email </h4>**
<ul>
<li><span style="color: cyan">PUT</span> <code>/update/email</code></li>
<li>Send the infos via body as follow</li>

```JSON
{
    "new_email": "new_email@example.com",
    "previous_email": "previous_email@example.com"
}
```

<li> If succeed, receive an answer in the format:</li>

```JSON
{
    "message": "Customer_name's email updated!"
}
```

</ul>

</details></li>

<details><summary><h3> Enrolments routes </h3></summary>

**<h4> 👉🏻 Enrolling a customer in a course</h4>**
<ul>
<li><span style="color: green">POST</span> <code>/enroll</code></li>
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

**<h4> 👉🏻 Unenrolling a customer from a course </h4>**
<ul>
<li><span style="color: red">DELETE</span> <code> /enroll</code></li>
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


**<h4> 👉🏻 Rank of customers with higher number of enrolements</h4>**
<ul>
<li><span style="color: blue">GET</span> <code>/rank/customers</code></li>
<li>Optional a query <code>top</code> with a number, as the example below:</li>

```
/rank/customers?top=3
```
<li>Response in the format:</li>

```JSON
[
  {
    "customer": "Érick",
    "courses": "5"
  },
  {
    "customer": "Brun0",
    "courses": "4"
  },
  {
    "customer": "Jader",
    "courses": "3"
  }
]
```

</ul>


</details>

<details><summary><h3> Courses routes </h3></summary>


**<h4> 👉🏻 Rank of courses with higher number of enrollments</h4>**
<ul>
<li><span style="color: blue">GET</span> <code>/rank/courses</code> </li>
<li>Optional a query <code>top</code> with a number, as the example below:</li>

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


**<h4> 👉🏻 Courses that a customer is enrolled in</h4>**
<ul>
<li><span style="color: blue">GET</span> <code>/courses/:customer_id</code></li>
<li><code>customer_id</code> is a number and required, as the example below:</li>

```
/courses/2
```
<li>Response in the format of an array, as shown below:</li>

```JSON
[
  "Spining",
  "Funcional",
  "Dança",
  "LPO",
  "Hidroginástica"
]
```
</ul>

</ul>
</details>

<details>
    <summary><h2>🗄️ Database</h2></summary>
<ul>

<h3>Database structure</h3>
<ul>
<img src="https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dbdiagram.png" alt="database diagram">
</ul>
<h3>Database dump</h3>
<ul>
<li> <a href="https://github.com/erickssguerra/poc-typescript/blob/main/src/database/dump.sql">Dump file</a> </li>
</ul>
</ul>
</details>
