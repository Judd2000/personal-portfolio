resource "aws_s3_object" "deploy_app" {
  for_each = fileset(local.file_path, "**")
  bucket = local.s3_bucket_name
  key    = each.value
  source = "${local.file_path}/${each.value}"
  content_type = lookup(local.content_type_map, reverse(split(".", "${each.value}"))[0], "application/octet-stream")
  etag = filemd5("${local.file_path}/${each.value}")
}