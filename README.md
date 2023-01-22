# POC - Typescript - DrivenFit

- In this back-end project, a simple system of a Gym is used as a Proof of concept (POC) of TypeScript coding.
- A CRUD (Create, Update and Delete) protocol was used for manage two self-explained tables: `Customers` and `Enrollments`.
- The table `Courses` (with gym courses in Portuguese) is already created in the database;
- Furthermore, ranking routes are implemented, aggregating the `courses` and `customers` metrics (see routes below).
<details>
    <summary>👣 Initial steps</summary>

### Install all dependencies

    - After

</details>

<details>
<summary>🗂 Folders organization </summary>

```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── controllers
│   │   ├── courses.controllers.ts
│   │   ├── customers.controllers.ts
│   │   └── enrollments.controllers.ts
│   ├── database
│   │   ├── connectionDB.ts
│   │   └── dbdiagram.png
│   ├── index.ts
│   ├── middlewares
│   │   ├── courses.middlewares.ts
│   │   ├── customers.middleware.ts
│   │   └── schemas.validation.ts
│   ├── protocols
│   │   ├── courses-rank.ts
│   │   ├── customer.ts
│   │   ├── customers-rank.ts
│   │   └── enrollment.ts
│   ├── repositories
│   │   ├── courses.repository.ts
│   │   ├── customers.repository.ts
│   │   └── enrollments.repository.ts
│   ├── routes
│   │   ├── courses.routes.ts
│   │   ├── customers.routes.ts
│   │   ├── enrollments.routes.ts
│   │   └── index.ts
│   ├── schemas
│   │   ├── customer.schema.ts
│   │   ├── enrollment.schema.ts
│   │   └── top-query.schema.ts
│   └── services
└── tsconfig.json
```

</details>

<details>
    <summary>🧭 Routes</summary>

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
