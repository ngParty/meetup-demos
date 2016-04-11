Docker Introduction Demo
========================

## Prerequisites

1. Install Docker Toolbox
    
    https://www.docker.com/products/docker-toolbox

2. Make sure your virtual machine is running

    `$ docker-machine satus`
    
3. Set ENV variables

    `$ docker-machine env --help`

    
## Build Docker Image

`$ docker build -t demo .`
    
## Run Java code inside of Docker Container

`$ docker run demo`

## Run insteractive shell inside of Docker Container

`$ docker run -it -v $PWD:/code demo bash`
