import { argv } from 'dark-args';
import JSZip from 'jszip';
import {
  readFile,
  writeFile,
} from 'fs/promises';
import { Shade } from 'js-shade';


/**
 * Receives a relative filepath as an argument and outputs a compressed ZIP in the directory this script was invoked
 *
 * Invoke the script like this:
 * node scripts/compressFileToZIP uncompressed.csv
 *
 * @param {string} fileToCompress - The relative filepath of the file to compress
 */
export const compressFileToZIP = async (fileToCompress) => {
  // Validate required argument is provided
  if (!fileToCompress) {
    console.log(`Must provide the filename of the file to compress as ${Shade.yellow('fileToCompress')}`);
    return;
  }

  // Initialize a ZIP
  const zip = new JSZip();
  
  // Parse the source file as a buffer
  const fileBuffer = await readFile(fileToCompress);

  // Append the file to the ZIP, with maximum compression
  const compressionOptions = { compression: 'DEFLATE', compressionOptions: { level: 9 } };
  zip.file(fileToCompress, fileBuffer, compressionOptions);
  
  // Generate the ZIP as a nodebuffer
  const zipBuffer = await zip.generateAsync({ type: 'nodebuffer', streamFiles: true });
  
  // Write the file
  const generatedFilename = `${fileToCompress}.zip`
  await writeFile(generatedFilename, zipBuffer)
};

(async () => {
  await compressFileToZIP(argv.fileToCompress);
  process.exit(0);
})();
