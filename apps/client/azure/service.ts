import * as fs from "fs"
import config from "../config"
import { getContainerClient, getTableClient } from "./connection"

export async function getTableRowValue(rowKey: string) {
    const tableClient = await getTableClient()
    
    console.log(config.azure.table.partitionKey, rowKey)
    
    const entity = await tableClient.getEntity<{ value: string }>(config.azure.table.partitionKey, rowKey)
    
    return entity.value
}

export async function downloadBlob() {
  const blobName = config.azure.blob.blobName
  const downloadFilePath = config.azure.blob.downloadFilePath

  const containerClient = await getContainerClient()
  const blobClient = containerClient.getBlobClient(blobName)

  const downloadResponse = await blobClient.download()
  const downloaded = await streamToBuffer(downloadResponse.readableStreamBody!)

  fs.writeFileSync(downloadFilePath, downloaded)
  console.log(`Downloaded blob content to ${downloadFilePath}`)
}

async function streamToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    readableStream.on("data", (data) => {
      chunks.push(Buffer.isBuffer(data) ? data : Buffer.from(data))
    })
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks))
    })
    readableStream.on("error", reject)
  })
}
