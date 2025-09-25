const env = process.env

const config = {
    sftp: {
        host: env.SFTP_HOST ?? 'sftp',
        port: env.SFTP_PORT ? parseInt(env.SFTP_PORT) : 22,
        username: env.SFTP_USERNAME ?? 'user',
        password: env.SFTP_PASSWORD ?? 'password1'
    },
    azure: {
        account: {
            accountName: env.AZURE_ACCOUNT_NAME ?? 'devstoreaccount1',
            accountKey: env.AZURE_ACCOUNT_KEY ?? 'Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw=='
        },
        blob: {
            blobServiceBaseUrl: env.AZURE_BLOB_SERVICE_BASE_URL ?? `http://azurite:10000`,
            containerName: env.AZURE_CONTAINER_NAME ?? 'govskillsjob',
            blobName: env.AZURE_BLOB_NAME ?? 'key',
            downloadFilePath: env.AZURE_DOWNLOAD_FILE_PATH ?? '/tmp/govskills-key'
        },
        table: {
            tableName: env.AZURE_TABLE_NAME ?? 'jobData',
            partitionKey: env.AZURE_TABLE_PARTITION_KEY ?? 'skillsSync',
            allowInsecureConnection: env.AZURE_TABLE_ALLOW_INSECURE_CONNECTION ? (env.AZURE_TABLE_ALLOW_INSECURE_CONNECTION === "true") : true,
            tableServiceBaseUrl: env.AZURE_TABLE_SERVICE_BASE_URL ?? `http://azurite:10002`,
            
        }
    }
}

export default config