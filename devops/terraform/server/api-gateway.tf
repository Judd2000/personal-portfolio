resource "aws_api_gateway_rest_api" "server_api" {
  name        = local.apigateway_name
  description = "API for Lambda Server"
}

// Proxy+ resource for greedy path forwarding
resource "aws_api_gateway_resource" "proxy" {
  rest_api_id = aws_api_gateway_rest_api.server_api.id
  parent_id   = aws_api_gateway_rest_api.server_api.root_resource_id
  path_part   = "{proxy+}"
}

//ANY method
resource "aws_api_gateway_method" "proxy_method" {
  rest_api_id   = aws_api_gateway_rest_api.server_api.id
  resource_id   = aws_api_gateway_resource.proxy.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id = aws_api_gateway_rest_api.server_api.id
  resource_id = aws_api_gateway_resource.proxy.id
  http_method = aws_api_gateway_method.proxy_method.http_method
  integration_http_method = "POST"
  type        = "AWS_PROXY"
  uri         = aws_lambda_function.server.invoke_arn
}

resource "aws_lambda_permission" "api_gateway_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.server.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.server_api.execution_arn}/*"
}

resource "aws_api_gateway_deployment" "gateway_deployment" {
  depends_on  = [aws_api_gateway_integration.lambda_integration]
  rest_api_id = aws_api_gateway_rest_api.server_api.id
}

resource "aws_cloudwatch_log_group" "api_gw_logs" {
  name              = "API-Gateway-Execution-Logs_${aws_api_gateway_rest_api.server_api.id}/${local.stage_name}"
  retention_in_days = 7
}

resource "aws_api_gateway_stage" "default_stage" {
  deployment_id = aws_api_gateway_deployment.gateway_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.server_api.id
  stage_name    = local.stage_name
  depends_on = [aws_cloudwatch_log_group.api_gw_logs]
}
