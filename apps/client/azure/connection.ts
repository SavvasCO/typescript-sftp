import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob"
import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"

import config from "../config"

export async function getContainerClient() {
    const accountName = config.azure.account.accountName
    const accountKey = config.azure.account.accountKey

    const blobServiceUrl = `${config.azure.blob.blobServiceBaseUrl}/${accountName}`

    const credential = new StorageSharedKeyCredential(accountName, accountKey)

    const blobServiceClient = new BlobServiceClient(blobServiceUrl, credential)

    const containerName = config.azure.blob.containerName

    const containerClient = blobServiceClient.getContainerClient(containerName)
    return containerClient
}

export async function getTableClient(){
    const accountName = config.azure.account.accountName
    const accountKey = config.azure.account.accountKey

    const tableEndpoint = `${config.azure.table.tableServiceBaseUrl}/${accountName}`

    const credential = new AzureNamedKeyCredential(accountName, accountKey)
    
    const tableName = config.azure.table.tableName
    const client = new TableClient(tableEndpoint, tableName, credential, {
        allowInsecureConnection: config.azure.table.allowInsecureConnection
    })
    
    return client
}