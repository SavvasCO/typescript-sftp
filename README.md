# SFTP in TypeScript

## Steps

1. Install packages:
```sh
make install
```

2. Start SFTP server and client container:
```
make start
```

3. Upload the `test-file.txt` file to the SFTP server:

```
make upload
```

This will run the `index.ts` file which will upload the `test-file.txt` file into the `sftp-data` folder.
