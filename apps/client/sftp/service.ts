import { connect } from './connection'

export const uploadToSftp = async (privateKey: string) => {
    const sftp = await connect(privateKey)

    const localFilePath = 'test-file.txt'
    const remoteFilePath = `/upload/${localFilePath}`

    console.log(`Uploading ${localFilePath} to ${remoteFilePath}...`)
    await sftp.put(localFilePath, remoteFilePath)
    console.log(`File uploaded to ${remoteFilePath}`)

    sftp.end()
}