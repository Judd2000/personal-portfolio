terraform {
  backend "s3" {
    bucket = "portfolio-tfstate-us-west-2"
    region = "us-west-2"
    key = "state/server.tfstate"
  }

  required_providers {
    aws = "~>5.0"
  }
}

provider "aws" {
  region = "us-west-2"
}