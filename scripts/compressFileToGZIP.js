import { argv } from 'dark-args';
import { createGzip } from 'zlib';
import {
  createReadStream,
  createWriteStream,
} from 'fs';
import { pipeline } from 'stream/promises';
import { Shade } from 'js-shade';


/**
 * Receives a relative filepath as an argument and outputs a compressed GZIP in the directory this script was invoked
 *
 * Invoke the script like this:
 * node scripts/compressFileToGZIP uncompressed.csv
 *
 * @param {string} fileToCompress - The relative filepath of the file to compress
 */
export const compressFileToGZIP = async (fileToCompress) => {
  // Validate required argument is provided
  if (!fileToCompress) {
    console.log(`Must provide the filename of the file to compress as ${Shade.yellow('fileToCompress')}`);
    return;
  }

  // Parse the source file as a readable stream
  const source = createReadStream(fileToCompress);

  // Define the GZIP object with maximum compression
  const gzip = createGzip({ level: 9 });

  // Speficy the output filename and create the write stream
  const destination = createWriteStream(`${fileToCompress}.gz`)

  // Pipe the stream to the destination
  await pipeline(source, gzip, destination)
};

(async () => {
  await compressFileToGZIP(argv.fileToCompress);
  process.exit(0);
})();
