# Fortnite Lotto - API

API for [Fortnite Lotto UI](https://github.com/stevenflin/fortnite-lotto)

## Getting Started

### Installing

Clone the project

```
git clone https://github.com/<GITHUB_USERNAME>/fortnite-lotto-api.git
```

Install Dependencies

```
npm install
```

### Setup

Create a ```.env``` file

```
cd <PATH_TO_PROJECT>
touch .env
```

Add the following path variable to the ```.env``` file replacing the value with your MONGODB_URI

```
MONGODB_URI=[MONGODB_URI]
```

### Commands

To clean the db run: 
```node scripts/clean.js```

To populate the db with dummy data run:
```node scripts/populate.js```

To start the project on port 8080 run:
```node server.js```
