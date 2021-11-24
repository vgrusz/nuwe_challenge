# JOBMADRID / NUWE CHALLENGE

> Brief description: An API that connects to a MySQL dabase named nuwe_challenge that contains a table named companies and has five enpoints to: lists all companies sorted by size, lists all companies sorted by foundation year, lists number of companies of each industry type, lists number of companies of each size, lists number of companies of each year of foundation.

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

Clone repository and run npm install to install node components, then node app to run app

```shell
    # Clone or install commands
    npm install
```

```shell
    # Run command
    node app
```

## License

[MIT](https://opensource.org/licenses/MIT)
