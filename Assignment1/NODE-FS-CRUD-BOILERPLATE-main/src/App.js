const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require("./index");

const fileName = "File.txt"
const fileContent = "hello"
const modifiedContent = " world"

myFileWriter(fileName,fileContent);
myFileReader(fileName);
myFileUpdater(fileName,modifiedContent);
myFileReader(fileName);