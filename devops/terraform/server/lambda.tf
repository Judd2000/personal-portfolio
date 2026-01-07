data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "lambda-role" {
  name               = "lambda_execution_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role_policy" "lambda_logging" {
  name = "lambda_logging"
  role = aws_iam_role.lambda-role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Effect   = "Allow"
        Resource = ["${aws_cloudwatch_log_group.server_logs.arn}:*", aws_cloudwatch_log_group.server_logs.arn]
      }
    ]
  })
}

resource "aws_cloudwatch_log_group" "server_logs" {
  name              = "/aws/lambda/${local.lambda_function_name}"
  retention_in_days = 14

  tags = {
  }
}


resource "aws_lambda_function" "server" {
  function_name = local.lambda_function_name
  filename      = local.lambda_path
  handler       = "index.handler"
  role          = aws_iam_role.lambda-role.arn

  runtime = "nodejs20.x"

  logging_config {
    log_format            = "Text"
  }

  environment {
    variables = {
      API_KEY                 = var.API_KEY
      SENDER_EMAIL            = var.SENDER_EMAIL
      MESSAGE_RECIPIENT_EMAIL = var.MESSAGE_RECIPIENT_EMAIL
      APP_PASSWORD            = var.APP_PASSWORD
      FRONTEND_URL            = var.FRONTEND_URL
      ALT_FRONTEND_URL        = var.ALT_FRONTEND_URL
    }
  }
  depends_on = [aws_cloudwatch_log_group.server_logs]
}
