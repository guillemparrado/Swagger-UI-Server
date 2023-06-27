# Swagger-UI-Server

Swagger-UI server to render OpenApi files.

## Installation

Clone the repository, cd into the folder and install dependencies ( `npm i` ).

Ideally, alias the execution command in your terminal environment. For example, if you use bash or zsh, add the following line to your ~/.bashrc or ~/.zshrc file:

    alias swagger-ui-server="node <path_to_Swagger-UI-Server_repo>/app.js"

## Usage

To use the tool, call it with an OpenAPI Yaml. For example, if your project has an `openapi.yaml` file, cd into it and run:

    swagger-ui-server openapi.yaml

The default port is `3000`, but it can also be specified:

    # Either
    swagger-ui-server openapi.yaml -p 5000
    # Or
    swagger-ui-server -p 5000 openapi.yaml
