variable "API_KEY" {
  type        = string
  description = "The API Key for Server Authentication"
}

variable "SENDER_EMAIL" {
  type        = string
  description = "The sender email for portfolio messages"
}

variable "MESSAGE_RECIPIENT_EMAIL" {
  type        = string
  description = "Recipient of portfolio messages"
}

variable "APP_PASSWORD" {
  type        = string
  description = "App password for sender email authentication"
}

variable "FRONTEND_URL" {
  type        = string
  description = "The frontend URL of the portfolio site"
}

variable "ALT_FRONTEND_URL" {
  type        = string
  description = "The alternate frontend URL of the portfolio site"
}

variable "WORKING_DIR" {
  type        = string
  description = "Directory for lambda code"
}
