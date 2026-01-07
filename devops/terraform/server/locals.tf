locals {
  lambda_function_name = "portfolio-server"
  apigateway_name = "server_api"
  stage_name = "default"
  lambda_path = "${var.WORKING_DIR}/server_drop/apps/server/server.zip"
}