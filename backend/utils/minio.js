const Minio = require("minio");

const minioClient = new Minio.Client({
  endPoint: "146.190.8.98",
  port: 9000,
  useSSL: false,
  accessKey: "QYEptfT2xT8d7yvJ",
  secretKey: "OOU030WrxMLjHHCAlJotKYK0ZhKofffU",
});

module.export = minioClient