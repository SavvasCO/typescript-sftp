import * as SftpClient from 'ssh2-sftp-client'

async function uploadToSftp(){
    const sftp = new SftpClient()

    const config = {
        host: 'sftp',
        port: 22,
        username: 'user',
        password: 'password1'
    }

    console.log("Connecting...")
    await sftp.connect(config)
    console.log("Connected to SFTP server")
    

    const localFilePath = 'test-file.txt'
    const remoteFilePath = `/upload/${localFilePath}`

    console.log(`Uploading ${localFilePath} to ${remoteFilePath}...`)
    await sftp.put(localFilePath, remoteFilePath)
    console.log(`File uploaded to ${remoteFilePath}`)

    sftp.end()
}

uploadToSftp()