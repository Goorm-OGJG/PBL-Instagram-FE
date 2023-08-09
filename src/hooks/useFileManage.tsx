import AWS from "aws-sdk";

export const useFileManage = () => {
  AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
    region: import.meta.env.VITE_AWS_REGION,
  });

  //파일 업로드
  const handleUpload = (selectedFiles: File[] | null) => {
    const fileUrl: string[] = [];

    if (!selectedFiles) {
      console.error("No file selected.");
      return;
    }

    // AWS S3 인증 정보 설정

    // S3 객체 생성
    const s3 = new AWS.S3();

    // 파일 업로드
    selectedFiles.map((selectedFile) => {
      const params: AWS.S3.PutObjectRequest = {
        Bucket: import.meta.env.VITE_AWS_BUCKET,
        Key: selectedFile.name.endsWith(".mp4")
          ? `videos/${selectedFile.name}`
          : `images/${selectedFile.name}`,
        Body: selectedFile,
      };

      s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
        if (err) {
          console.error("Error uploading file:", err);
        } else {
          // console.log("File uploaded successfully.", data.Location);
          console.log("File uploaded successfully.");
          // 업로드 성공 후 추가 작업을 수행할 수 있습니다.
          fileUrl.push(data.Location);
        }
      });
    });
    return fileUrl;
  };

  // 파일 삭제 요청
  const handleDelete = (fileUrl: string) => {
    const encodedString = fileUrl.split("/").pop() as string;
    const decodedString = decodeURIComponent(encodedString).replace(/\+/g, " ");
    const s3 = new AWS.S3();
    const filePath = decodedString.endsWith("mp4") ? "videos" : "images";
    const fileKey = `${filePath}/${decodedString}`;

    // console.log(fileKey);
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
