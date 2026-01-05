terraform {
  backend "s3" {
    bucket = "portfolio-tfstate-us-west-2"
    region = "us-west-2"
    key = "state/cloudfront.tfstate"
  }

  required_providers {
    aws = "~>5.0"
  }
}

provider "aws" {
  region = "us-west-2"
}

provider "aws" {
  region = "us-east-1"
  alias = "eastern"
}