resource "aws_cloudfront_origin_access_control" "control" {
  name                              = "site"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "function" {
  name    = "function"
  runtime = "cloudfront-js-1.0"
  publish = true
  code    = file("./function.js")
}

data "aws_cloudfront_origin_request_policy" "origin_request_policy" {
  name = "Managed-CORS-S3Origin"
}

# data "aws_acm_certificate" "njudd_issued" {
#   provider = aws.eastern
#   domain   = "njuddportfolio.com"
#   statuses = ["ISSUED"]
# }

resource "aws_cloudfront_distribution" "site_distribution" {
  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.control.id
    origin_id                = local.site_origin_id
  }

  enabled = true

  aliases = ["njuddportfolio.com"]

  default_root_object = local.index

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 200
    response_page_path    = "/${local.index}"
  }

  # viewer_certificate {
  #   acm_certificate_arn = data.aws_acm_certificate.njudd_issued.arn
  #   ssl_support_method  = "sni-only"
  # }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    cache_policy_id          = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    allowed_methods          = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods           = ["GET", "HEAD"]
    target_origin_id         = local.site_origin_id
    viewer_protocol_policy   = "redirect-to-https"
    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.origin_request_policy.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.function.arn
    }
  }
}
