resource "aws_s3_object" "deploy_app" {
  for_each = fileset("${var.WORKING_DIR}/apps/site/dist", "**")

  bucket = local.s3_bucket_name
  key    = each.value
  source = "${var.WORKING_DIR}/apps/site/dist/${each.value}"
  content_type = lookup(local.content_type_map, reverse(split(".", "${each.value}"))[0], "application/octet-stream")
  etag = filemd5("${var.WORKING_DIR}/apps/site/dist/${each.value}")
}