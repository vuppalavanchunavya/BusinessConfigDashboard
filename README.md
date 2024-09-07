# EnvDashboardFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---


This JSON structure should define the fields for the .env form generation. It should dynamically generate the form based on this JSON. To update the JSON file based on form changes, It should capture the form data and write it back to the JSON file on the server side.

{
  "envFieldsModel": [
    {
      "name": "ENV_VARIABLE_NAME",
      "type": "text",
      "required": true,
      "placeholder": "Enter variable name",
      defaultValue: "",
      currentValue: ""
    },
    {
      "name": "ENV_VARIABLE_VALUE",
      "type": "text",
      "required": true,
      "placeholder": "Enter variable value",
      defaultValue: "",
      currentValue: ""
    },
    {
      "name": "ENV_VARIABLE_TYPE",
      "type": "select",
      "options": ["string", "number", "boolean"],
      "required": true,
      "placeholder": "Select variable type",
      defaultValue: "",
      currentValue: ""
    }
    // Add more fields as needed
  ]
}

