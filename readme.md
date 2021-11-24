# JOBMADRID / NUWE CHALLENGE

> Brief description: An API that connects to a MySQL dabase named nuwe_challenge that contains a table named companies and has five enpoints to: list all companies sorted by size, list all companies sorted by foundation year, list number of companies of each industry type, list number of companies of each size, list number of companies of each year of foundation.

## Usage

Use these endpoints to get these results:

/companiesSortedBySize
lists all companies sorted by size

/companiesSortedByFound
lists all companies sorted by foundation year

/quantityOfCompaniesGroupedByIndustry
lists number of companies of each industry type

/quantityOfCompaniesGroupedBySize
lists number of companies of each size

/quantityOfCompaniesGroupedByFounded
lists number of companies of each year of foundation

## API/Component

All components returns a JSON with data

## Installation

Clone repository and import the sql DB located in /sql_dump to your sql server.
Configure it to run on port 3306 or modify settings.json to match your sql server parameters.
Then run npm install to install node components, and finally run node app to run app

```shell
    # Clone or install commands
    npm install
```

```shell
    # Run command
    node app
```

## Coderefactor review

A+

## License

[MIT](https://opensource.org/licenses/MIT)
