import xlsx from "node-xlsx";

export const compressMatrixToObject = (
  files: string[][]
): Record<string, string>[] => {
  const [keys, ...values] = files;

  return values.map((value) => {
    const obj = {};
    keys.forEach((key, index) => {
      obj[key.toLowerCase().split(" ")?.join("_")] = value[index];
    });
    return obj;
  });
};

// Handle multiple file uploads
export const readAndCompressFiles = (files: Express.Multer.File[]) => {
  let dataFromFile: { name: string; data: string[][] };
  for (const file of files) {
    dataFromFile = xlsx.parse<string[]>(file.buffer)[0];
    let compressedFiles = compressMatrixToObject(dataFromFile.data);
    return compressedFiles;
  }
};
