# PFL Care Arrangement Plan Prototype

This is a prototype for the care arrangement plan. It is based off the 
[GOV UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) v13.

There is documentation how to use the prototype kit in the link.

## Deployment
Create a new branch, work on the changes locally, raise a pull request from 
the branch.

Once merged, the changes will deploy automatically.

## Hosting

This is hosted on the MoJ's [Cloud Platform](https://user-guide.cloud-platform.service.justice.gov.uk/).
The app is dockerised. To test the docker container, run `docker compose up`.

The password for the prototype is stored as a GitHub Actions secret, `PROTOTYPE_PASSWORD`.

