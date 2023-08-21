import AWS from "aws-sdk";

export const useFileManage = () => {
  AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
    region: import.meta.env.VITE_AWS_REGION,
  });

  //파일 업로드
  const handleUpload = async (selectedFiles: File[] | null) => {
    const result: string[] = [];
    if (!selectedFiles) {
      console.error("No file selected.");
      return;
    }

    // AWS S3 인증 정보 설정

    // S3 객체 생성
    const s3 = new AWS.S3();
    for (const selectedFile of selectedFiles) {
      const fileNameSplit = selectedFile.name.split(".");
      fileNameSplit[0] = fileNameSplit[0] + String(new Date());
      const fileName = fileNameSplit.join(".");
      const params: AWS.S3.PutObjectRequest = {
        Bucket: import.meta.env.VITE_AWS_BUCKET,
        Key: selectedFile.name.endsWith(".mp4")
          ? `videos/${fileName}`
          : `images/${fileName}`,
        Body: selectedFile,
      };

      try {
        const stored = await s3.upload(params).promise();
        result.push(stored.Location);
      } catch (err) {
        console.log(err);
      }
    }
    return result;
  };

  // 파일 삭제 요청
  const handleDelete = (fileUrl: string) => {
    const encodedString = fileUrl.split("/").pop() as string;
    const decodedString = decodeURIComponent(encodedString).replace(/\+/g, " ");
    const s3 = new AWS.S3();
    const filePath = decodedString.endsWith("mp4") ? "videos" : "images";
    const fileKey = `${filePath}/${decodedString}`;

    const params = {
      Bucket: import.meta.env.VITE_AWS_BUCKET,
      Key: fileKey,
    };

    try {
      s3.deleteObject(params);
      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };
  return { handleUpload, handleDelete };
};
