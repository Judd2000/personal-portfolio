locals {
  s3_bucket_name = "site-njudd-s3"
  content_type_map = {
    html = "text/html",
    css  = "text/css",
    js   = "application/javascript;charset=UTF-8",
    map  = "application/json",
    svg  = "image/svg+xml",
    png  = "image/png",
    jpeg = "image/jpeg",
    jpg  = "image/jpeg",
    mp3  = "audio/mpeg",
    json = "application/json",
    gif  = "image/gif",
    ico  = "image/x-icon"
  }
}