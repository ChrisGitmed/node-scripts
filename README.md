# node-scripts

#### A collection of Node.js scripts I use to increase productivity.

---
## compressFileToGZIP
Receives a relative filepath as an argument and outputs a compressed GZIP in the directory this script was invoked
#### Usage
```shell
node scripts/compressFileToGZIP uncompressed.csv
```

---
## compressFileToZIP
Receives a relative filepath as an argument and outputs a compressed ZIP in the directory this script was invoked
#### Usage
```shell
node scripts/compressFileToZIP uncompressed.csv
```

---
## pickRandom.js
Picks a random selection of `n` items from a JSON array and logs the selection to the console. Guaranteed to not pick duplicates.
#### Usage
```shell
node pickRandom.js --arr='[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]' n=3
```
